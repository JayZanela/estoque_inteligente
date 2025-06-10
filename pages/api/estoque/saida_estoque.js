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
  subtraiQuantidadeOcupacao,
} from "@/lib/utils/funcoes_ocupacoes";
import { buscarEndereco } from "@/lib/utils/funcoes_posicoes";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  let detalhesOcupacaoDestino = {};
  let detalhesOcupacaoOrigem = {};
  let detalhesEnderedoDE = {};
  let idEnderecoOrigem = null;
  let idEnderecoDestino = null;
  let ocupacaoXProduto = false;

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ etapa: "1", message: "Metodo Inválido" });
  }

  const {
    endereco_de,
    quantidade,
    responsavel_id,
    motivo,
    observacoes,
    produto_id,
  } = req.body.param;

  if (
    !endereco_de ||
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
        quantidade: quantidade,
        responsavel_id: !!responsavel_id,
        motivo: !!motivo,
        observacoes: observacoes ?? "(opcional)",
        produto_id: !!produto_id,
      },
    });
  }

  //Etapa 1.0 Buscar Endereço DE
  const runEnderecoDEExiste = await buscarEndereco(endereco_de);
  if (runEnderecoDEExiste.status !== 200) {
    return res
      .status(runEnderecoDEExiste.status)
      .json({ etapa: "1.0", error: runEnderecoDEExiste.error });
  }
  detalhesEnderedoDE = await runEnderecoDEExiste.data;
  idEnderecoOrigem = await runEnderecoDEExiste.data.id;

  console.log("LOG 1", idEnderecoOrigem);

  const runOcupacoesdoEnderecoDE = await buscaOcupacoesEndereco(
    idEnderecoOrigem
  );
  if (runOcupacoesdoEnderecoDE.status !== 200) {
    return res
      .status(runOcupacoesdoEnderecoDE.status)
      .json({ etapa: "1.1", error: runOcupacoesdoEnderecoDE.error });
  }

  for (const ocupacao of runOcupacoesdoEnderecoDE.data) {
    if (ocupacao.ocupacao.produto_id === produto_id) {
      detalhesOcupacaoOrigem = ocupacao.ocupacao;

      if (quantidade > ocupacao.ocupacao.quantidade) {
        return res.status(415).json({
          etapa: "1.0.1",
          error:
            "Quantidade da Ocupação de Origem é menor que o Solicitado para Saída",
        });
      }
      break;
    }
  }
  /*
  // Etapa 1.0 - Buscar endereço PARA
  const runEnderecoPARAExiste = await buscarEndereco(endereco_para);
  if (runEnderecoPARAExiste.status !== 200) {
    return res
      .status(runEnderecoPARAExiste.status)
      .json({ etapa: "1.0", error: runEnderecoPARAExiste.error });
  }
  const detalhesEnderecoPARA = await runEnderecoPARAExiste.data;
  idEnderecoDestino = await runEnderecoPARAExiste.data.id;

  //Etapa 1.1 - Tenho Ocupações no endereço?
  const runOcupacoesdoEnderecoPARA = await buscaOcupacoesEndereco(
    idEnderecoDestino
  );
  if (
    runOcupacoesdoEnderecoPARA.status !== 200 &&
    runOcupacoesdoEnderecoPARA.status !== 406
  ) {
    return res
      .status(runOcupacoesdoEnderecoPARA.status)
      .json({ etapa: "1.1.2", error: runOcupacoesdoEnderecoPARA.error });
  }
  if (runOcupacoesdoEnderecoPARA.status === 200) {
    for (const ocupacao of runOcupacoesdoEnderecoPARA.data) {
      if (ocupacao.ocupacao.produto_id === produto_id) {
        detalhesOcupacaoDestino = ocupacao.ocupacao;
        ocupacaoXProduto = true;
        break;
      }
    }
  }

  //Etapa 1.1.1 -> Criar Nova Ocupação
  /*if (!ocupacaoXProduto) {
    const gerarNovaOcupacao = await criar_nova_ocupacao(
      quantidade,
      observacoes,
      0,
      produto_id,
      detalhesEnderecoPARA.id
    );
    if (gerarNovaOcupacao.status !== 200 || !gerarNovaOcupacao.data) {
      return res.status(gerarNovaOcupacao.status).json({
        etapa: "1.1.1",
        error: gerarNovaOcupacao.error,
      });
    }

    detalhesOcupacaoDestino = gerarNovaOcupacao.data;
  }
  //Etapa 1.1.2 -> Atualizar Quantidade da Ocupacao
  /*else {
    console.log(quantidade, detalhesOcupacaoDestino.id);
    const quantidadeAtualziada = await atualizarQuantidadeOcupacao(
      quantidade,
      detalhesOcupacaoDestino.id
    );

    if (quantidadeAtualziada.status !== 200) {
      return res
        .status(quantidadeAtualziada.status)
        .json({ etapa: "1.1.2", error: quantidadeAtualziada.error });
    }
  }*/

  const subtrairQuantidade = await subtraiQuantidadeOcupacao(
    quantidade,
    detalhesOcupacaoOrigem.id
  );

  if (subtrairQuantidade.status !== 200) {
    return res
      .status(subtrairQuantidade.status)
      .json({ etapa: "1.5.1", error: subtrairQuantidade.error });
  }

  const parametroMovimento = {
    ocupacao_origem_id: detalhesOcupacaoOrigem.id, // Ajuste se necessário
    ocupacao_destino_id: 2,
    tipo: "Saída",
    quantidade: quantidade,
    responsavel_id: responsavel_id,
    documento_id: null,
    motivo: motivo,
    observacoes: observacoes ?? "",
    endereco_id: idEnderecoOrigem,
  };

  //Etapa 1.2 -> Registra movimentação executada.
  const registraMovimentoSaida = await criaMovimentacao(parametroMovimento);

  if (registraMovimentoSaida.status !== 200) {
    return res.status(registraMovimentoSaida.status).json({
      etapa: "1.2",
      error: registraMovimentoSaida.error,
    });
  }
  return res.status(200).json({
    etapa: "1.3",
    status: 200,
    mensagem: "Movimentação registrada com sucesso.",
    ocupacao_origem: detalhesOcupacaoOrigem,
    movimento: registraMovimentoSaida.message,
  });
}
