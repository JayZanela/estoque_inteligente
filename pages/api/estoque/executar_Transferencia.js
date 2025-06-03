import { criarDado } from "@/lib/db/actions";
import { criaMovimentacao } from "@/lib/utils/funcoes_movimentacoes";
import {
  criar_nova_ocupacao,
  relacionaOcupacaoeProduto,
  atualizarQuantidadeOcupacao,
  verificarOcupacaoProduto,
  BuscarOcupacaodoProduto,
  relacionaOcupacaoaPosicao,
  subtraiQuantidadeOcupacao,
} from "@/lib/utils/funcoes_ocupacoes";
import { buscarEndereco } from "@/lib/utils/funcoes_posicoes";

export default async function handler(req, res) {
  let detalhesOcupacao = {};
  let ocupacaoDestinoJaExistente = false;
  let idOcupacaoOrigem = null;
  let idOcupacaoDestino = null;

  if (req.method !== "POST") {
    return res.status(405).json({ etapa: "1", message: "Metodo Inválido" });
  }

  const {
    endereco_de,
    endereco_para,
    quantidade,
    responsavel_id,
    motivo,
    observacoes,
    produto_id,
  } = req.body.param;

  if (
    !endereco_de ||
    !endereco_para ||
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
        endereco_de: !!endereco_de,
        endereco_para: !!endereco_para,
        quantidade: quantidade,
        responsavel_id: !!responsavel_id,
        motivo: !!motivo,
        observacoes: observacoes ?? "(opcional)",
        produto_id: !!produto_id,
      },
    });
  }

  // Etapa 1.1 -> Buscar Endereço De
  const enderecoDeExiste = await buscarEndereco(endereco_de);
  if (enderecoDeExiste.status !== 200) {
    return res
      .status(enderecoDeExiste.status)
      .json({ etapa: "1.1", error: enderecoDeExiste.error });
  }
  const detalhesEndereco_De = enderecoDeExiste.data;

  //Etapa 1.2 -> Buscar ID da Ocupação De
  const ocupacaoOrigem = await BuscarOcupacaodoProduto(
    detalhesEndereco_De.id,
    produto_id
  );
  if (ocupacaoOrigem.status !== 200) {
    return res
      .status(ocupacaoOrigem.status)
      .json({ etapa: "1.2", error: ocupacaoOrigem.error });
  }
  idOcupacaoOrigem = await ocupacaoOrigem.data.id;

  if (ocupacaoOrigem.data.quantidade <= 0) {
    return res.status(415).json({
      etapa: "1.2.1",
      error: "Ocupação de Origem Sem Valores para Movimentar.",
    });
  } else if (ocupacaoOrigem.data.quantidade < quantidade) {
    return res.status(425).json({
      etapa: "1.2.2",
      error: "Quantidade Maior do que Saldo da Origem.",
    });
  }

  // Etapa 1.3 - Buscar endereço Para
  const enderecoParaExiste = await buscarEndereco(endereco_para);
  if (enderecoParaExiste.status !== 200) {
    return res
      .status(enderecoParaExiste.status)
      .json({ etapa: "1.3", error: enderecoParaExiste.error });
  }
  const detalhesEndereco_Para = enderecoParaExiste.data;

  //Etapa 1.4 -> Buscar Ocupação do Produto no Endereço Para
  const ocupacaoDestino = await BuscarOcupacaodoProduto(
    detalhesEndereco_Para.id,
    produto_id
  );

  console.log("LOG 1.4 -> ", ocupacaoDestino);

  if (ocupacaoDestino.error && ocupacaoDestino.status !== 406) {
    return res
      .status(ocupacaoDestino.status)
      .json({ etapa: "1.4", error: ocupacaoDestino.error });
  }

  if (ocupacaoDestino.status === 200) {
    ocupacaoDestinoJaExistente = true;
    idOcupacaoDestino = await ocupacaoDestino.data.id;
  }

  //Etapa 1.5 -> Atualizar Quantidade Ocupação (Tudo ja existe, portanto so sigo!)
  if (ocupacaoDestinoJaExistente) {
    const quantidadeAtualizada = await atualizarQuantidadeOcupacao(
      quantidade,
      ocupacaoDestino.data.id
    );

    if (quantidadeAtualizada.status !== 200) {
      return res
        .status(quantidadeAtualizada.status)
        .json({ etapa: "1.5.0", error: quantidadeAtualizada.error });
    }
  } else {
    //Etapa 1.6 -> Cria Nova Ocupação para Destino
    const gerarNovaOcupacao = await criar_nova_ocupacao(
      quantidade,
      observacoes,
      0
    );
    if (gerarNovaOcupacao.status !== 200 || !gerarNovaOcupacao.data) {
      return res.status(gerarNovaOcupacao.status).json({
        etapa: "1.6",
        error: gerarNovaOcupacao.error,
      });
    }

    const detalhesNovaOcupacao = await gerarNovaOcupacao.data;
    idOcupacaoDestino = await detalhesNovaOcupacao.id;

    //Etapa 1.7 -> Relaciona a OCupação nova ao Produto Transferido
    const NovaOcupacaoXProduto = await relacionaOcupacaoeProduto(
      produto_id,
      detalhesNovaOcupacao.id
    );
    console.log("Nova Relacao Ocupacao X Produto", NovaOcupacaoXProduto);
    if (
      NovaOcupacaoXProduto.status !== 200 &&
      NovaOcupacaoXProduto.status !== 201
    ) {
      return res.status(NovaOcupacaoXProduto.status).json({
        etapa: "1.7",
        error: NovaOcupacaoXProduto.error,
      });
    }

    // Etapa 1.8 - Relacionar nova ocupação com o Endereço
    const relacionandoOcupacaoaPosicao = await relacionaOcupacaoaPosicao(
      detalhesEndereco_Para.id,
      detalhesNovaOcupacao.id
    );
  }
  const subtrairQuantidade = await subtraiQuantidadeOcupacao(
    quantidade,
    idOcupacaoOrigem
  );

  console.log("LOG 1.5.1", subtrairQuantidade);

  if (subtrairQuantidade.status !== 200) {
    return res
      .status(subtrairQuantidade.status)
      .json({ etapa: "1.5.1", error: subtrairQuantidade.error });
  }

  // Etapa 1.9 - Registrar movimentação
  const parametroMovimento = {
    ocupacao_origem_id: idOcupacaoOrigem, // Ajuste se necessário
    ocupacao_destino_id: idOcupacaoDestino,
    tipo: "Transferência",
    quantidade: quantidade,
    responsavel_id: responsavel_id,
    documento_id: null,
    motivo: motivo,
    observacoes: observacoes ?? "",
    endereco_id: detalhesEndereco_Para.id,
  };

  const registraMovimentoTransferencia = await criaMovimentacao(
    parametroMovimento
  );

  if (registraMovimentoTransferencia.status !== 200) {
    return res.status(registraMovimentoTransferencia.status).json({
      etapa: "1.9",
      error: registraMovimentoTransferencia.error,
    });
  }

  // Etapa 2.0 - Sucesso
  return res.status(200).json({
    etapa: "2.0",
    status: 200,
    mensagem: "Movimentação registrada com sucesso.",
    ocupacao: detalhesOcupacao,
    movimento: registraMovimentoTransferencia.message,
  });
}
