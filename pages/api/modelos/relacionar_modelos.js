import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { produto } = req.body;

    if (!produto || !produto.id) {
      return res.status(400).json({ error: "ID do produto é necessário." });
    }

    const modelos = await prisma.modelos_moto.findMany({
      where: {
        produtos: {
          some: {
            id: produto.id,
          },
        },
      },
      select: { id: true, nome: true },
    });

    res.status(200).json({ modelos });
  } catch (error) {
    console.error("Erro ao buscar modelos:", error);
    res.status(500).json({ error: "Erro interno ao buscar modelos." });
  }
}
