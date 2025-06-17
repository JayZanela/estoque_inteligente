import { buscarVariosDadosComFiltro, buscarTodosOsDados } from "../db/actions";

export async function BuscarTodasCategorias() {
  try {
    const runBuscaCategorias = await buscarTodosOsDados("categorias");
    return { status: 200, data: runBuscaCategorias };
  } catch (error) {
    return {
      status: 500,
      error: "Erro inesperado ao buscar categorias: " + error.message,
    };
  }
}
