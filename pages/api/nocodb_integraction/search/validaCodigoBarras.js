import { prisma } from "../../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  console.log("REQ query:", req.body);

  const { codigo_barras } = req.body;

  //  if (!codigo_barras) {
  //    return res.status(400).json({ error: "id_product ausente na query." });
  //  }

  try {
    const codigo_find = await prisma.codigos_barras_produto.findUnique({
      where: {
        codigo_barras: codigo_barras,
      },
    });

    if (!codigo_find) {
      return res.status(404).json({ error: "Codigo não encontrado." });
    }

    console.log("Codigo encontrado:", codigo_find);

    return res.status(200).json({ codigo: codigo_find });
  } catch (error) {
    console.error("Erro ao buscar Codigo:", error);
    return res.status(500).json({ error: "Erro interno ao buscar Codigo." });
  }
}
