import { buscarMovimentos } from "@/lib/utils/funcoes_movimentacoes";
import {
  buscarProdutosdaOcupacao,
  buscaOcupacoesEndereco,
  buscarOcupacoesProduto,
} from "@/lib/utils/funcoes_ocupacoes";
import { buscarEndereco } from "@/lib/utils/funcoes_posicoes";
import { BuscarProdutos } from "@/lib/utils/funcoes_gets_produtos";
import { BuscarTodasCategorias } from "@/lib/utils/funcoes_categorias";
import { BuscarTodasSubCategorias } from "@/lib/utils/funcoes_subcategorias";

export default async function handler(req, res) {
  // Libera CORS para requisições de qualquer origem
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Trata o pré-flight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  //Etapa 0.0 -> Validações Iniciais (Verifica a existencia de parametros e função)
  const validadores = {
    busca_endereco_unico: (param) => param.enderecoParam,
    busca_produto_like: (param) => param.colunasParam && param.termoParam,
    busca_movimentos_equals: (param) => param.colunasParam && param.termoParam,
    busca_ocupacoes_produto: (param) => param.produtoParam,
    buscar_todas_categorias: () => true,
    buscar_todas_sub_categorias: () => true,
    // adicione outras funções aqui
  };

  const funcao = req.body.function;
  const montadora = req.body.montadora_id;
  const param = req.body.param;

  console.log(req.body);

  /*
  if (!validadores[funcao] && funcao !== 'busca_movimentos_like') {
    return res.status(402).json({ error: "Função inválida" });
  }
  if (!validadores[funcao](param) && funcao !== 'busca_movimentos_like') {
    return res
      .status(401)
      .json({ error: "Parâmetros inválidos para a função " + funcao });
  }
*/

  if (funcao === "buscar_todas_sub_categorias") {
    const execBuscaSubCategorias = await BuscarTodasSubCategorias();

    if (execBuscaSubCategorias.status !== 200) {
      return res
        .status(execBuscaSubCategorias.status)
        .json(execBuscaSubCategorias.error);
    }
    return res
      .status(execBuscaSubCategorias.status)
      .json(execBuscaSubCategorias.data);
  }

  if (funcao === "buscar_todas_categorias") {
    const execBuscaCategorias = await BuscarTodasCategorias();

    if (execBuscaCategorias.status !== 200) {
      return res
        .status(execBuscaCategorias.status)
        .json(execBuscaCategorias.error);
    }
    return res
      .status(execBuscaCategorias.status)
      .json(execBuscaCategorias.data);
  }

  //Etapa 1.0 -> Executar a Função busca_endereco_unico

  if (funcao === "busca_endereco_unico") {
    const execBuscaEndereco = await buscarEndereco(
      param.enderecoParam,
      montadora
    );
    let produtosDetalhados = [];

    if (execBuscaEndereco.status !== 200) {
      return res.status(execBuscaEndereco.status).json(execBuscaEndereco.error);
    }

    const dataEndereco = await execBuscaEndereco.data;

    const execBuscaOcupacoesPosicao = await buscaOcupacoesEndereco(
      dataEndereco.id,
      montadora
    );

    console.log(execBuscaOcupacoesPosicao.status);

    if (execBuscaOcupacoesPosicao.status !== 200) {
      return res
        .status(execBuscaOcupacoesPosicao.status)
        .json(execBuscaOcupacoesPosicao.error);
    }

    const dataOcupacaoPosicao = execBuscaOcupacoesPosicao.data;

    for (const ocupacao of dataOcupacaoPosicao) {
      produtosDetalhados.push(ocupacao);
    }

    const resultJson = {
      endereco: execBuscaEndereco.data,
      produtos: produtosDetalhados,
    };

    return res.status(200).json(resultJson);
    if (execBuscaOcupacoesPosicao.status !== 200) {
    } else {
      const dataOcupacaoPosicao = execBuscaOcupacoesPosicao.data;
      console.log(dataOcupacaoPosicao);

      for (const ocupacao of dataOcupacaoPosicao) {
        produtosDetalhados.push(ocupacao);
        const produtosOcupantes = await buscarProdutosdaOcupacao(
          ocupacao.ocupacao_id
        );

        console.log(produtosOcupantes);

        if (produtosOcupantes.status !== 200) {
          return res
            .status(produtosOcupantes.status)
            .json(produtosOcupantes.error);
        }
        if (produtosOcupantes.status === 200) {
        }
      }
    }
  }

  //Etapa 1.1 -> Executar busca_produto_like

  if (funcao === "busca_produto_like") {
    if (param.colunasParam.length <= 0) {
      return res.status(403).json({ error: "Zero Colunas Para Busca." });
    }
    const paramLike = {
      OR: param.colunasParam.map((campo) => ({
        [campo]: {
          contains: param.termoParam,
          mode: "insensitive",
        },
      })),
    };

    const execBuscaProdutos = await BuscarProdutos(paramLike);
    if (execBuscaProdutos.status !== 200) {
      return res.status(execBuscaProdutos.status).json(execBuscaProdutos.error);
    }

    return res.status(200).json(execBuscaProdutos.data);
  }

  //Etapa 1.2 -> Executar busca_movimentos_like
  if (funcao === "busca_movimentos_like") {
    const paramLike = param
      ? {
          OR: param.colunasParam.map((campo) => ({
            [campo]: {
              contains: param.termoParam,
            },
          })),
        }
      : null;

    const execBuscaMovimentos = await buscarMovimentos(paramLike);
    if (execBuscaMovimentos.status !== 200) {
      return res
        .status(execBuscaMovimentos.status)
        .json(execBuscaMovimentos.error);
    }

    return res.status(200).json(execBuscaMovimentos.data);
  }

  //Etapa 1.2 -> Executar busca_movimentos_like
  if (funcao === "busca_movimentos_equals") {
    if (param.colunasParam.length <= 0) {
      return res
        .status(403)
        .json({ error: "Zero Colunas Para Busca Numerica." });
    }
    const paramEqual = {
      OR: param.colunasParam.map((campo) => ({
        [campo]: {
          equals: Number(param.termoParam),
        },
      })),
    };

    const execBuscaMovimentosEqual = await buscarMovimentos(paramEqual);
    if (execBuscaMovimentosEqual.status !== 200) {
      return res
        .status(execBuscaMovimentosEqual.status)
        .json(execBuscaMovimentosEqual.error);
    }

    return res.status(200).json(execBuscaMovimentosEqual.data);
  }

  if (funcao === "busca_ocupacoes_produto") {
    const paramProduto = param.produtoId;
    const Montadora = montadora;
    const execbuscarOcupacoesProduto = await buscarOcupacoesProduto(
      paramProduto,
      Montadora
    );

    if (execbuscarOcupacoesProduto.status !== 200) {
      return res
        .status(execbuscarOcupacoesProduto.status)
        .json(execbuscarOcupacoesProduto.error);
    }

    return res.status(200).json(execbuscarOcupacoesProduto.data);
  }
}
