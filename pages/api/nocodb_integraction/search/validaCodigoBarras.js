import { prisma } from "../../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  console.log("REQ query:", req.body);

  const { codigo_barras } = req.body;

  if (!codigo_barras) {
    return res
      .status(400)
      .json({ error: "codigo_barras ausente no corpo da requisição." });
  }

  try {
    // 🔎 Busca o código de barras no banco
    const codigo_find = await prisma.codigos_barras_produto.findMany({
      where: {
        codigo_barras: codigo_barras,
      },
    });

    if (!codigo_find || codigo_find.length === 0) {
      return res
        .status(404)
        .json({ error: "Código de barras não encontrado." });
    }

    console.log("Codigo encontrado:", codigo_find);

    // 🔎 Busca o produto relacionado
    const produto_find = await prisma.produtos.findMany({
      where: {
        id: {
          in: codigo_find.map((item) => item.produto_id),
        },
      },
    });

    if (!produto_find || produto_find.length === 0) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }

    console.log("Produtos encontrados:", produto_find);

    // ✅ Tudo certo: retorna o produto e o código
    console.log("Código e produto encontrados com sucesso.");
    return res.status(200).json({
      codigo: codigo_find,
      produto: produto_find,
    });
  } catch (error) {
    console.error("Erro geral ao buscar código/produto:", error);
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
}
