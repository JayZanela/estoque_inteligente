import { buscarVariosDadosComFiltro, buscarTodosOsDados } from "../db/actions";

export async function BuscarTodasSubCategorias() {
  try {
    const runBuscaSubCategorias = await buscarTodosOsDados("subcategorias");
    return { status: 200, data: runBuscaSubCategorias };
  } catch (error) {
    return {
      status: 500,
      error: "Erro inesperado ao buscar categorias: " + error.message,
    };
  }
}
