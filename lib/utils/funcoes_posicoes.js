import {
  buscarPrimeiroDado,
  buscarTodosOsDados,
  buscarVariosDadosComDetalhes,
  buscarVariosDadosComFiltro,
} from "@/lib/db/actions";

export async function buscarEndereco(endereco, montadoraId) {
  try {
    const buscarDetalhesEndereco = await buscarPrimeiroDado(
      "posicoes_estoque",
      { endereco: endereco, montadora_id: montadoraId }
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

export async function buscarEnderecos(montadoraId) {
  try {
    const buscarDetalhesEnderecos = await buscarVariosDadosComFiltro(
      "posicoes_estoque",
      { montadora_id: montadoraId }
    );
    if (buscarDetalhesEnderecos) {
      return { status: 200, data: buscarDetalhesEnderecos };
    }
    return { status: 415, error: "Sem Endereços na Montadora informada" };
  } catch (error) {
    return {
      status: 500,
      error: "Erro Interno ao buscar detalhes do endereço:" + error,
    };
  }
}
