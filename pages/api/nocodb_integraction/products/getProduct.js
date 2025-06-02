import { BuscarProduto } from "@/lib/utils/funcoes_gets_produtos";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  console.log("REQ query:", req.query);

  const { id_product } = req.query;

  if (!id_product) {
    return res.status(400).json({ error: "id_product ausente na query." });
  }

  try {
    const produto_find = await BuscarProduto(id_product);

    if (!produto_find) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }

    console.log("Produto encontrado:", produto_find);

    return res.status(200).json({ produto: produto_find });
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return res.status(500).json({ error: "Erro interno ao buscar produto." });
  }
}
