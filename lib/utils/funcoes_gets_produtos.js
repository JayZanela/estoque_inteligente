import {
  criarDado,
  buscarPrimeiroDado,
  atualizarDado,
  buscarDadoUnico,
  buscarVariosDadosComDetalhes,
} from "@/lib/db/actions";

export async function BuscarProduto(produtoId) {
  try {
    const funcaoBuscaUnica = await buscarDadoUnico("produtos", {
      id: parseInt(produtoId),
    });

    return { status: 200, data: funcaoBuscaUnica };
  } catch (error) {
    return {
      status: 500,
      error: "Erro ao buscar Detalhes do Produto:" + error.message,
    };
  }
}

export async function BuscarProdutos(param) {
  try {
    const funcaoBuscarProdutos = await buscarVariosDadosComDetalhes(
      "produtos",
      param,
      {
        categorias: true,
        subcategorias: true,
      }
    );

    return { status: 200, data: funcaoBuscarProdutos };
  } catch (error) {
    return {
      status: 500,
      error: "Erro ao buscar Detalhes dos Produtos:" + error.message,
    };
  }
}
