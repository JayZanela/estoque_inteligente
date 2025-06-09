import { criarDado } from "@/lib/db/actions";
import { criaMovimentacao } from "@/lib/utils/funcoes_movimentacoes";
import {
  criar_nova_ocupacao,
  relacionaOcupacaoeProduto,
  atualizarQuantidadeOcupacao,
  verificarOcupacaoProduto,
  relacionaOcupacaoaPosicao,
  verificarOcupacaoPosicao,
  buscaOcupacoesEndereco,
} from "@/lib/utils/funcoes_ocupacoes";
import { buscarEndereco } from "@/lib/utils/funcoes_posicoes";

export default async function handler(req, res) {
  let ocupacaoProdutoExiste = false;
  let detalhesOcupacao = {};
  let ocupacaoXposicaoExiste = false;

  let ocupacaoXProduto = false;

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

  // Etapa 1.0 - Buscar endereço
  const runEnderecoExiste = await buscarEndereco(endereco);
  if (runEnderecoExiste.status !== 200) {
    return res
      .status(runEnderecoExiste.status)
      .json({ etapa: "1.0", error: runEnderecoExiste.error });
  }
  const detalhesEndereco = runEnderecoExiste.data;

  //Etapa 1.1 - Tenho Ocupações no endereço?
  const runOcupacoesdoEndereco = await buscaOcupacoesEndereco(
    detalhesEndereco.id
  );
  if (runOcupacoesdoEndereco.status !== 200 && runOcupacoesdoEndereco.status !== 406 ) {
    return res
      .status(runOcupacoesdoEndereco.status)
      .json({ etapa: "1.1", error: runOcupacoesdoEndereco.error });
  }

  for (const ocupacao of runOcupacoesdoEndereco.data || []) {
    if (ocupacao.ocupacao.produto_id === produto_id) {
      detalhesOcupacao = ocupacao.ocupacao;
      ocupacaoXProduto = true;
      break;
    }
  }

  //Etapa 1.1.1 -> Criar Nova Ocupação
  if (!ocupacaoXProduto) {
    const gerarNovaOcupacao = await criar_nova_ocupacao(
      quantidade,
      observacoes,
      0,
      produto_id,
      detalhesEndereco.id
    );
    if (gerarNovaOcupacao.status !== 200 || !gerarNovaOcupacao.data) {
      return res.status(gerarNovaOcupacao.status).json({
        etapa: "1.1.1",
        error: gerarNovaOcupacao.error,
      });
    }

    detalhesOcupacao = gerarNovaOcupacao.data;
  }
  //Etapa 1.1.2 -> Atualizar Quantidade da Ocupacao
  else {
    console.log(quantidade, detalhesOcupacao.id);
    const quantidadeAtualziada = await atualizarQuantidadeOcupacao(
      quantidade,
      detalhesOcupacao.id
    );

    if (quantidadeAtualziada.status !== 200) {
      return res
        .status(quantidadeAtualziada.status)
        .json({ etapa: "1.1.2", error: quantidadeAtualziada.error });
    }
  }

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

  //Etapa 1.2 -> Registra movimentação executada.
  const registraMovimentoEntrada = await criaMovimentacao(parametroMovimento);

  if (registraMovimentoEntrada.status !== 200) {
    return res.status(registraMovimentoEntrada.status).json({
      etapa: "1.2",
      error: registraMovimentoEntrada.error,
    });
  }
  return res.status(200).json({
    etapa: "1.3",
    status: 200,
    mensagem: "Movimentação registrada com sucesso.",
    ocupacao: detalhesOcupacao,
    movimento: registraMovimentoEntrada.message,
  });
}
