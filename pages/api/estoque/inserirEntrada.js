import { criarDado } from "@/lib/db/actions";
import { criaMovimentacao } from "@/lib/utils/funcoes_movimentacoes";
import {
  criar_nova_ocupacao,
  relacionaOcupacaoeProduto,
  atualizarQuantidadeOcupacao,
  verificarOcupacaoProduto,
  relacionaOcupacaoaPosicao,
} from "@/lib/utils/funcoes_ocupacoes";
import { buscarEndereco } from "@/lib/utils/funcoes_posicoes";

export default async function handler(req, res) {
  let ocupacaoProdutoExiste = false;
  let detalhesOcupacao = {};
  let ocupacaoXposicaoExiste = false;

  if (req.method !== "POST") {
    return res.status(405).json({ etapa: "1", message: "Metodo Inválido" });
  }

  const {
    endereco,
    quantidade,
    responsavel_id,
    motivo,
    observacoes,
    produto_id,
  } = req.body.param;

  if (
    !endereco ||
    typeof quantidade !== "number" ||
    quantidade <= 0 ||
    !responsavel_id ||
    !motivo ||
    !produto_id
  ) {
    return res.status(406).json({
      etapa: "1.0",
      status: 406,
      error:
        "Parâmetros inválidos. Verifique se todos os campos obrigatórios foram preenchidos corretamente.",
      detalhes: {
        endereco: !!endereco,
        quantidade: quantidade,
        responsavel_id: !!responsavel_id,
        motivo: !!motivo,
        observacoes: observacoes ?? "(opcional)",
        produto_id: !!produto_id,
      },
    });
  }

  // Etapa 1.1 - Buscar endereço
  const enderecoExiste = await buscarEndereco(endereco);
  if (enderecoExiste.status !== 200) {
    return res
      .status(enderecoExiste.status)
      .json({ etapa: "1.1", error: enderecoExiste.error });
  }
  const detalhesEndereco = enderecoExiste.data;

  // Etapa 1.2 - Verificar ocupação já existente
  const ocupacaoJaExistente = await verificarOcupacaoProduto(produto_id);
  console.log(ocupacaoJaExistente);
  if (
    ocupacaoJaExistente.status === 200 &&
    Array.isArray(ocupacaoJaExistente.data) &&
    ocupacaoJaExistente.data.length > 0
  ) {
    for (const item of ocupacaoJaExistente.data) {
      const testeRelacionamento = await relacionaOcupacaoaPosicao(
        detalhesEndereco.id,
        item.ocupacoes_estoque_id
      );
      console.log("Log for testeRelacioanemtno", testeRelacionamento);
      if (
        testeRelacionamento.status === 200 ||
        testeRelacionamento.status === 201
      ) {
        ocupacaoProdutoExiste = true;
        ocupacaoXposicaoExiste = true;
        detalhesOcupacao = {
          id: item.ocupacoes_estoque_id,
          produto_id: item.produtos_id,
        };
        break; // Para no primeiro vínculo encontrado
      }
    }
  }
  // Etapa 1.2.1 - Atualizar quantidade em ocupação existente
  if (ocupacaoProdutoExiste && ocupacaoXposicaoExiste) {
    console.log("TUDO SIM ATUALIZAR E MOVIMENTAR");
    const quantidadeAtualziada = await atualizarQuantidadeOcupacao(
      quantidade,
      detalhesOcupacao.id
    );

    if (quantidadeAtualziada.status !== 200) {
      return res
        .status(quantidadeAtualziada.status)
        .json({ etapa: "1.2.1", error: quantidadeAtualziada.error });
    }
  } else {
    console.log("else 1.1.0");
    // Etapa 1.1.0 - Criar nova ocupação
    const gerarNovaOcupacao = await criar_nova_ocupacao(
      quantidade,
      observacoes,
      0
    );
    if (gerarNovaOcupacao.status !== 200 || !gerarNovaOcupacao.data) {
      return res.status(gerarNovaOcupacao.status).json({
        etapa: "1.1.0",
        error: gerarNovaOcupacao.error,
      });
    }

    detalhesOcupacao = gerarNovaOcupacao.data;

    const NovaOcupacaoXProduto = await relacionaOcupacaoeProduto(
      produto_id,
      detalhesOcupacao.id
    );
    console.log("Nova Relacao Ocupacao X Produto", NovaOcupacaoXProduto);
    if (
      NovaOcupacaoXProduto.status !== 200 &&
      NovaOcupacaoXProduto.status !== 201
    ) {
      return res.status(NovaOcupacaoXProduto.status).json({
        etapa: "1.1.0",
        error: NovaOcupacaoXProduto.error,
      });
    }

    // Etapa 1.1.1 - Relacionar nova ocupação com a posição
    const relacionandoOcupacaoaPosicao = await relacionaOcupacaoaPosicao(
      detalhesEndereco.id,
      detalhesOcupacao.id
    );
    console.log("LOG STATUS RELAçÃO ", relacionandoOcupacaoaPosicao);
    // Se necessário, trate erro aqui também
  }

  // Etapa 1.3 - Registrar movimentação
  const parametroMovimento = {
    ocupacao_origem_id: 1, // Ajuste se necessário
    ocupacao_destino_id: detalhesOcupacao.id,
    tipo: "Entrada",
    quantidade: quantidade,
    responsavel_id: responsavel_id,
    documento_id: null,
    motivo: motivo,
    observacoes: observacoes ?? "",
    endereco_id: detalhesEndereco.id,
  };

  const registraMovimentoEntrada = await criaMovimentacao(parametroMovimento);

  if (registraMovimentoEntrada.status !== 200) {
    return res.status(registraMovimentoEntrada.status).json({
      etapa: "1.3",
      error: registraMovimentoEntrada.error,
    });
  }

  // Etapa 1.4 - Sucesso
  return res.status(200).json({
    etapa: "1.4",
    status: 200,
    mensagem: "Movimentação registrada com sucesso.",
    ocupacao: detalhesOcupacao,
    movimento: registraMovimentoEntrada.message,
  });
}
