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
    return { status: 200, data: buscarDetalhesEndereco };
  } catch (error) {
    return {
      status: 500,
      error: "Erro Interno ao buscar detalhes do endereço:" + error,
    };
  }
}
