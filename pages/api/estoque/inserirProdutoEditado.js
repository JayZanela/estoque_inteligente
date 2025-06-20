import { atualizarProduto } from "@/lib/utils/funcoes_produto";
import { authenticateToken } from "@/lib/auth";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return (
      res.setHeader("Allow", ["POST"]),
      res.status(405).end(`Método ${req.method} não permitido`)
    );
  }

  await authenticateToken(req, res, async () => {
    const {
      id,
      nome,
      sku,
      peso_unitario,
      volume_fisico,
      tipo_embalagem,
      descricao,
      codigo_barras,
      preco_custo,
      preco_venda,
      estoque_minimo,
      estoque_maximo,
      ponto_reposicao,
      tempo_reposicao,
      status,
      unidade_medida,
      categoria_id,
      subcategoria_id,
      fornecedor_principal_id,
      data_cadastro,
      imagem_url,
    } = req.body.param;

    // 1) Monta um objeto com todos os campos
    const camposParaAtualizar = {
      nome,
      sku,
      peso_unitario,
      volume_fisico,
      tipo_embalagem,
      descricao,
      codigo_barras,
      preco_custo,
      preco_venda,
      estoque_minimo,
      estoque_maximo,
      ponto_reposicao,
      tempo_reposicao,
      status,
      unidade_medida,
      categoria_id,
      subcategoria_id,
      fornecedor_principal_id,
      data_cadastro,
      imagem_url,
    };

    const idProdutoParam = id;
    const dadosAtualizaParam = Object.fromEntries(
      Object.entries(camposParaAtualizar).filter(
        ([_, valor]) => valor !== null && valor !== undefined
      )
    );

    console.log(dadosAtualizaParam);
    if (!idProdutoParam || Object.entries(dadosAtualizaParam).length === 0) {
      return res
        .status(405)
        .json({ error: "Parametros do Produto Obrigatório." });
    }

    const runAtualizarProduto = await atualizarProduto(
      dadosAtualizaParam,
      idProdutoParam
    );

    if (runAtualizarProduto.status !== 200) {
      console.error(runAtualizarProduto);
      return res
        .status(runAtualizarProduto.status)
        .json({ error: `${runAtualizarProduto.error}` });
    }

    return res
      .status(runAtualizarProduto.status)
      .json({ message: `Produto Atualizado com sucesso!` });
  });
}
