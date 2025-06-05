import { criarDado } from "@/lib/db/actions";
import { buscarMovimentos } from "@/lib/utils/funcoes_movimentacoes";
import {
  criar_nova_ocupacao,
  relacionaOcupacaoeProduto,
  atualizarQuantidadeOcupacao,
  verificarOcupacaoProduto,
  relacionaOcupacaoaPosicao,
  verificarOcupacaoPosicao,
  buscarProdutosdaOcupacao,
} from "@/lib/utils/funcoes_ocupacoes";
import { buscarEndereco } from "@/lib/utils/funcoes_posicoes";
import { BuscarProdutos } from "@/lib/utils/funcoes_gets_produtos";

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
    // adicione outras funções aqui
  };

  const funcao = req.body.function;
  const param = req.body.param;

  console.log(req.body);

  if (!validadores[funcao]) {
    return res.status(402).json({ error: "Função inválida" });
  }
  if (!validadores[funcao](param)) {
    return res
      .status(401)
      .json({ error: "Parâmetros inválidos para a função " + funcao });
  }

  //Etapa 1.0 -> Executar a Função busca_endereco_unico

  if (funcao === "busca_endereco_unico") {
    const execBuscaEndereco = await buscarEndereco(param.enderecoParam);

    if (execBuscaEndereco.status !== 200) {
      return res.status(execBuscaEndereco.status).json(execBuscaEndereco.error);
    }

    const dataEndereco = await execBuscaEndereco.data;
    const execBuscaOcupacoesPosicao = await verificarOcupacaoPosicao(
      dataEndereco.id
    );

    if (execBuscaOcupacoesPosicao.status !== 200) {
      return res
        .status(execBuscaOcupacoesPosicao.status)
        .json(execBuscaOcupacoesPosicao.error);
    }

    const dataOcupacaoPosicao = execBuscaOcupacoesPosicao.data;
    console.log(dataOcupacaoPosicao);

    const produtosDetalhados = [];

    for (const ocupacao of dataOcupacaoPosicao) {
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
        produtosDetalhados.push(produtosOcupantes.data);
      }
    }

    const resultJson = {
      endereco: execBuscaEndereco.data,
      produtos: produtosDetalhados,
    };

    return res.status(200).json(resultJson);
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
}


  if (funcao === "busca_movimentos_like") {
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

    const execBuscaMovimentos = await buscarMovimentos(paramLike);
    if (execBuscaMovimentos.status !== 200) {
      return res.status(execBuscaMovimentos.status).json(execBuscaMovimentos.error);
    }

    return res.status(200).json(execBuscaMovimentos.data);
  }
}