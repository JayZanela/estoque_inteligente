import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const produto_id  = req.body.produto.id;
    const modelo_nome = req.body.modelo.nome;

    if (!produto_id || !modelo_nome) {
      return res.status(400).json({ error: "ID e Modelo são necessários." });
    }

    const updateModelo = await prisma.produto_.update({
      where: {
        nome: {
      },
      select: { id: true, nome: true },
    });

    res.status(200).json({ modelos });
  } catch (error) {
    console.error("Erro ao buscar modelos:", error);
    res.status(500).json({ error: "Erro interno ao buscar modelos." });
  }
}
