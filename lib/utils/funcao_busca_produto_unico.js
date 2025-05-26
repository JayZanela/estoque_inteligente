import { prisma } from "../../../../lib/prisma";

export default async function buscaItemUnico(id) {
  if (!id) {
    throw new Error("ID do produto é necessário");
  }

  try {
    const produto_find = await prisma.produtos.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!produto_find) {
      throw new Error("Produto não encontrado");
    }

    return produto_find;
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    throw new Error("Erro interno ao buscar produto");
  }
}
