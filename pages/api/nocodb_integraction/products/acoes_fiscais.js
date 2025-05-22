import { atualizarProduto } from "../../../../lib/utils/funcao_update_produtos";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    console.log("Método não permitido: " + req.method);
    return res
      .status(405)
      .json({ error: `Método não permitido ${req.method}` });
  }

  const {
    id_produto,
    peso_unitario,
    volume_fisico,
    preco_custo,
    preco_venda,
    estoque_minimo,
    estoque_maximo,
    ponto_requisicao,
    tempo_requisicao,
  } = req.body.parametro;

  console.log("Parâmetros recebidos:", req.body.parametro);

  const produtoAtualizado = await atualizarProduto(id_produto, {
    peso_unitario,
    volume_fisico,
    preco_custo,
    preco_venda,
    estoque_minimo,
    estoque_maximo,
    ponto_requisicao,
    tempo_requisicao,
  });

  if (produtoAtualizado.status !== 200) {
    console.error("Erro ao atualizar produto:", produtoAtualizado);
    return res
      .status(produtoAtualizado.status)
      .json({ error: `${produtoAtualizado.error}` });
  }
  console.log("Produto atualizado com sucesso:", produtoAtualizado.produto);
  return res.status(200).json({
    message: "Produto atualizado com sucesso",
    produto: produtoAtualizado.produto,
  });
  // Aqui você pode adicionar a lógica para processar os parâmetros recebidos
}
