import { prisma } from "../prisma";

export async function inserirProduto(dadosCriacao) {
  try {
    const produtoInserido = await prisma.produtos.create({
      data: dadosCriacao,
    });
    return {
      status: 200,
      produto: produtoInserido,
    };
  } catch (error) {
    console.error("Erro ao inserir produto:", error);
    return {
      status: 500,
      error: "Erro ao inserir produto: " + error.message,
    };
  }
}
