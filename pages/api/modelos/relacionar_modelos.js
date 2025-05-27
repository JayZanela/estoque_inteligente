import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const produto_id = req.body.produto.id;
    const modelo_nome = req.body.modelo.nome;

    if (!produto_id || !modelo_nome) {
      return res.status(400).json({ error: "ID e Modelo são necessários." });
    }
    const modeloExistente = await prisma.modelos_moto.findFirst({
      where: { nome: modelo_nome },
    });

    console.log("Modelo existente:", modeloExistente);
    console.log("Produto ID:", produto_id);

    const createModelo = await prisma.produtos_modelos_moto.create({
      data: {
        produto_id: produto_id,
        modelo_moto_id: modeloExistente.id,
      },
    });

    return res.status(200).json({
      message: "Modelo relacionado com sucesso.",
      edicao: modeloExistente.edicao,
    });
  } catch (error) {
    console.error("Erro ao buscar modelos:", error);
    return res.status(500).json({ error: "Erro interno ao buscar modelos." });
  }
}
