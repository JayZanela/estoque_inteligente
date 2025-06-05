import {
  criarDado,
  buscarPrimeiroDado,
  atualizarDado,
  buscarDadoUnico,
  buscarVariosDadosComFiltro,
} from "@/lib/db/actions";

export async function criaMovimentacao(param) {
  const totalParans = Object.keys(param).length;
  const data_alocacao = new Date().toISOString();

  if (totalParans !== 9) {
    return { status: 405, error: "Parametros Inválidos" };
  }
  try {
    const criaMovimento = await criarDado("movimentacoes", {
      ocupacao_origem_id: param.ocupacao_origem_id,
      ocupacao_destino_id: param.ocupacao_destino_id,
      tipo: param.tipo,
      quantidade: param.quantidade,
      data_hora: data_alocacao, // corta milissegundos exatos
      responsavel_id: param.responsavel_id,
      documento_id: param.documento_id,
      motivo: param.motivo,
      observacoes: param.observacoes,
    });
    const atualizaUltimaMovimentacao = await atualizarDado(
      "posicoes_estoque",
      { id: param.endereco_id },
      { ultima_movimentacao: data_alocacao }
    );

    return { status: 200, message: criaMovimento };
  } catch (error) {
    return {
      status: 500,
      error: "Erro ao buscar Detalhes do Produto:" + error.message,
    };
  }
}


export async function buscarMovimentos(param) {
 try {
    const funcaoBuscarVariosMovimentos = await buscarVariosDadosComFiltro(
      "movimentacoes",
      param
    );

    return { status: 200, data: funcaoBuscarVariosMovimentos };
  } catch (error) {
    return {
      status: 500,
      error: "Erro ao buscar Movimentos solicitados:" + error.message,
    };
  }

}
