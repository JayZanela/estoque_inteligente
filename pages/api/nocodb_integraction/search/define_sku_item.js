import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  console.log("API SKU AUTOMATICO REQ query:", req.body);

  const { id_produto, nome_modelo, edicao_modelo } = req.body;

  console.log("ID do produto recebido:", id_produto);
  console.log("Nome do modelo recebido:", nome_modelo);
  console.log("Edição do modelo recebida:", edicao_modelo);

  if (!id_produto || nome_modelo === undefined || edicao_modelo === undefined) {
    return res.status(400).json({
      error: "ID do produto, nome do modelo e edição são necessários.",
    });
  }

  try {
    const sku = `${nome_modelo}-V${edicao_modelo}-ID${id_produto}`;

    const updatedProduct = await prisma.produtos.update({
      where: {
        id: parseInt(id_produto),
      },
      data: {
        sku: sku,
      },
    });

    console.log("SKU atualizado com sucesso:", updatedProduct);
    return res
      .status(200)
      .json({ message: "SKU atualizado com sucesso", produto: updatedProduct });
  } catch (error) {
    console.error("Erro ao atualizar SKU do produto:", error);
    return res
      .status(500)
      .json({ error: "Erro interno ao atualizar SKU do produto." });
  }
}
