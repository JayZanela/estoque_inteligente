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
  // VALIDAÇÕES INICIAIS

  let idOcupacaoOrigem = null;

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

  //Etapa 1.0 -> Busca Endereço Origem

  const enderecoDeExiste = await buscarEndereco(endereco_de);
  if (enderecoDeExiste.status !== 200) {
    return res
      .status(enderecoDeExiste.status)
      .json({ etapa: "1.1", error: enderecoDeExiste.error });
  }
  const detalhesEndereco_De = enderecoDeExiste.data;

  //Etapa 1.1 -> Buscar ID da Ocupação De (Origem)

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

  //Etapa 1.2 -> Subtrair  Quantidade da Ocupação

  if (ocupacaoOrigem.data.quantidade <= 0) {
    return res.status(415).json({
      etapa: "1.1.1",
      error: "Ocupação de Origem Sem Valores para Movimentar.",
    });
  } else if (ocupacaoOrigem.data.quantidade < quantidade) {
    return res.status(425).json({
      etapa: "1.1.2",
      error: "Quantidade Maior do que Saldo da Origem.",
    });
  }

  const subtrairQuantidade = await subtraiQuantidadeOcupacao(
    quantidade,
    idOcupacaoOrigem
  );

  if (subtrairQuantidade.status !== 200) {
    return res
      .status(subtrairQuantidade.status)
      .json({ etapa: "1.2", error: subtrairQuantidade.error });
  }

  //Entrada 1.3 -> Registrar Movimento

  const parametroMovimento = {
    ocupacao_origem_id: idOcupacaoOrigem, // Ajuste se necessário
    ocupacao_destino_id: 2,
    tipo: "Saída",
    quantidade: quantidade,
    responsavel_id: responsavel_id,
    documento_id: null,
    motivo: motivo,
    observacoes: observacoes ?? "",
    endereco_id: detalhesEndereco_De.id,
  };

  const registraMovimentoSaida = await criaMovimentacao(parametroMovimento);

  if (registraMovimentoSaida.status !== 200) {
    return res.status(registraMovimentoSaida.status).json({
      etapa: "1.3",
      error: registraMovimentoSaida.error,
    });
  }

  // Etapa 1.4 - Sucesso
  return res.status(200).json({
    etapa: "1.4",
    status: 200,
    mensagem: "Movimentação registrada com sucesso.",
    ocupacao: ocupacaoOrigem.data,
    movimento: registraMovimentoSaida.message,
  });
}
