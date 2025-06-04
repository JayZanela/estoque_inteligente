import {
  criarDado,
  buscarPrimeiroDado,
  atualizarDado,
  buscarDadoUnico,
  buscarVariosDadosComFiltro,
} from "@/lib/db/actions";

export async function buscarEndereco(endereco) {
  try {
    const buscarDetalhesEndereco = await buscarPrimeiroDado(
      "posicoes_estoque",
      { endereco: endereco }
    );
    if (buscarDetalhesEndereco) {
      return { status: 200, data: buscarDetalhesEndereco };
    }
    return { status: 415, error: "Endereço Não Existe" };
  } catch (error) {
    return {
      status: 500,
      error: "Erro Interno ao buscar detalhes do endereço:" + error,
    };
  }
}
