import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const modelos = await prisma.modelos_moto.findMany({
      select: { id: true, nome: true },
    });

    res.status(200).json({ modelos });
  } catch (error) {
    console.error("Erro ao buscar modelos:", error);
    res.status(500).json({ error: "Erro interno ao buscar modelos." });
  }
}
