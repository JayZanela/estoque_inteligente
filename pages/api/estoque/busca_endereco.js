import { prisma } from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { enderecoParam } = req.body.param;

  console.log(enderecoParam);

  const pattern = /^R\d{2}-C\d{2}-N\d$/;

  if (!pattern.test(enderecoParam)) {
    return res
      .status(400)
      .json({ error: "Endereço Fora do Modelo RXX-CXX-NX" });
  }

  // Tente Buscar os dados desse Endereço
  try {
    // busca a posição
    const buscaIdOcupacaoEstoque = await prisma.posicoes_estoque.findFirst({
      where: { endereco: enderecoParam },
    });

    // se não encontrou, responde 400
    if (!buscaIdOcupacaoEstoque) {
      return res
        .status(400)
        .json({ error: "Endereço não encontrado no sistema" });
    }

    // se encontrou, retorna o objeto completo
    return res.status(200).json({ data: buscaIdOcupacaoEstoque });
  } catch (error) {
    console.error("Erro ao buscar endereço:", error);
    return res.status(500).json({
      error: "Erro interno ao buscar endereço",
      details: error.message,
    });
  }
}
