import {
  criarDado,
  buscarPrimeiroDado,
  atualizarDado,
  buscarDadoUnico,
  buscarVariosDadosComFiltro,
} from "@/lib/db/actions";

export async function criar_nova_ocupacao(quantidade, observacoes, lote_id) {
  try {
    const gerarNovaOcupacao = await criarDado("ocupacoes_estoque", {
      lote_id: lote_id, // Inicialmente nulo, pode ser atualizado posteriormente
      data_alocacao: new Date(), // Inicialmente nulo, pode ser atualizado posteriormente
      quantidade: quantidade,
      observacoes: observacoes,
    });
    return { status: 200, data: gerarNovaOcupacao };
  } catch (error) {
    return {
      status: 500,
      error: "Erro ao buscar Detalhes do Produto:" + error.message,
    };
  }
}

export async function relacionaOcupacaoeProduto(produtoId, ocupacaoId) {
  if (!parseInt(produtoId) || !parseInt(ocupacaoId)) {
    return {
      status: 405,
      error: "Parametros Inválidos",
    };
  }

  try {
    const validaExistencia = await buscarDadoUnico(
      "nc_m2m_ocupacoes_estoq_produtos",
      {
        produtos_id: produtoId,
        ocupacoes_estoque_id: ocupacaoId,
      }
    );
    return { status: 201, message: "Produto Relacionado" };
  } catch {}
  try {
    const geraRelacao = await criarDado("nc_m2m_ocupacoes_estoq_produtos", {
      produtos_id: produtoId,
      ocupacoes_estoque_id: ocupacaoId,
    });
    return { status: 200, message: "Produto Relacionado" };
  } catch (error) {
    return {
      status: 500,
      error: "Erro ao relacionar Produto à ocupação:" + error.message,
    };
  }
}

export async function atualizarQuantidadeOcupacao(quantidade, ocupacaoId) {
  if (!parseInt(quantidade) || !parseInt(ocupacaoId)) {
    return {
      status: 405,
      error: "Parametros Inválidos",
    };
  }
  try {
    const somarQuantidade = await atualizarDado(
      "ocupacoes_estoque",
      {
        id: ocupacaoId,
      },
      {
        quantidade: {
          increment: parseInt(quantidade),
        },
      }
    );

    return { status: 200, message: "Quantidade Atualizada." };
  } catch (error) {
    return {
      status: 500,
      error: "Erro ao atualizar quantidade na ocupação:" + error.message,
    };
  }
}

export async function verificarOcupacaoProduto(produtoId) {
  try {
    const buscaOcupacoes = await buscarVariosDadosComFiltro(
      "nc_m2m_ocupacoes_estoq_produtos",
      { produtos_id: produtoId }
    );
    return { status: 200, data: buscaOcupacoes };
  } catch (error) {
    return {
      status: 500,
      error: "Erro ao buscar ocupações para o produto :" + error.message,
    };
  }
}

export async function buscaEnderecodaOcupacao(ocupacaoId) {
  try {
    const buscaPorOcupacao = await buscarPrimeiroDado("posiceos_estoque", {
      ocupacoes_estoque_id1: ocupacaoId,
    });

    if (buscaPorOcupacao.error) {
      return { status: 410, error: buscaPorOcupacao.error };
    }
    return { status: 200, data: buscaPorOcupacao };
  } catch (error) {
    return {
      status: 500,
      error: "Erro ao buscar ocupação nos endereços:" + error.message,
    };
  }
}
