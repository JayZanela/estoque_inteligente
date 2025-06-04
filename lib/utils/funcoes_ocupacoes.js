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
    const validaExistencia = await buscarPrimeiroDado(
      "nc_m2m_ocupacoes_estoq_produtos",
      {
        produtos_id: produtoId,
        ocupacoes_estoque_id: ocupacaoId,
      }
    );
    if (validaExistencia) {
      return { status: 201, message: "Produto Relacionado" };
    }
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

export async function relacionaOcupacaoaPosicao(posicaoId, ocupacaoId) {
  if (!parseInt(posicaoId) || !parseInt(ocupacaoId)) {
    return {
      status: 405,
      error: "Parametros Inválidos",
    };
  }

  try {
    const id_somado = String(ocupacaoId) + String(posicaoId);

    console.log(id_somado);
    const validaExistencia = await buscarPrimeiroDado("ocupacao_posicao", {
      posicao_id: posicaoId,
      ocupacao_id: ocupacaoId,
    });
    console.log("LOG FUNCAO RELACIONA OCUYPACAO E POSICAO", validaExistencia);
    if (validaExistencia) {
      return { status: 201, message: "Posição Já Relacionado" };
    }
  } catch {}
  try {
    const geraRelacao = await criarDado("ocupacao_posicao", {
      posicao_id: posicaoId,
      ocupacao_id: ocupacaoId,
    });
    return { status: 200, message: "Posição Relacionada." };
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

export async function subtraiQuantidadeOcupacao(quantidade, ocupacaoId) {
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
          decrement: parseInt(quantidade),
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

export async function verificarOcupacaoPosicao(posicaoId) {
  try {
    const buscaOcupacoes = await buscarVariosDadosComFiltro(
      "ocupacao_posicao",
      { posicao_id: posicaoId }
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

export async function BuscarOcupacaodoProduto(posicaoId, produtoId) {
  try {
    const buscaOcupacoesdaPosicao = await buscarVariosDadosComFiltro(
      "ocupacao_posicao",
      { posicao_id: posicaoId }
    );

    if (
      !Array.isArray(buscaOcupacoesdaPosicao) ||
      buscaOcupacoesdaPosicao.length === 0
    ) {
      return {
        status: 406,
        error: "Endereço está vazio.",
      };
    }
    for (const ocupacao of buscaOcupacoesdaPosicao) {
      const buscaProdutodaOcupacao = await buscarPrimeiroDado(
        "nc_m2m_ocupacoes_estoq_produtos",
        { ocupacoes_estoque_id: ocupacao.ocupacao_id, produtos_id: produtoId }
      );
      if (
        buscaProdutodaOcupacao &&
        buscaProdutodaOcupacao.produtos_id === produtoId
      ) {
        const buscaDetalhesOcupacao = await buscarDadoUnico(
          "ocupacoes_estoque",
          { id: ocupacao.ocupacao_id }
        );
        return { status: 200, data: buscaDetalhesOcupacao };
      }
    }
    return {
      status: 210,
      message: "Produto sem Ocupação Registrada no Endereço",
    };
  } catch (error) {
    return {
      status: 500,
      error: "Erro ao buscar ocupação do produto: " + error.message,
    };
  }
}

export async function buscarProdutosdaOcupacao(ocupacaoId) {
  try {
    const produtosdaOcupacao = await buscarVariosDadosComFiltro(
      "nc_m2m_ocupacoes_estoq_produtos",
      { ocupacoes_estoque_id: ocupacaoId }
    );

    if (!Array.isArray(produtosdaOcupacao) || produtosdaOcupacao.length === 0) {
      return {
        status: 406,
        error: "Ocupacao está vazia.",
        data: {},
      };
    }

    console.log(`LOG FUNCTION`, produtosdaOcupacao);

    const produtosDetalhados = [];

    for (const produto of produtosdaOcupacao) {
      console.log(`LOG FUNCTION`, produto);

      const produtoOcupante = await buscarDadoUnico("produtos", {
        id: produto.produtos_id,
      });

      console.log(`LOG FUNCTION`, produtoOcupante);

      if (produtoOcupante && produtoOcupante) {
        produtosDetalhados.push(produtoOcupante);
      }
    }
    return {
      status: 200,
      data: produtosDetalhados,
    };
  } catch (error) {
    return {
      status: 500,
      error: "Erro ao buscar produtos da ocupacao: " + error.message,
    };
  }
}
