import { prisma } from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { ocupacaoParam } = req.body.param;

  console.log(ocupacaoParam);

  if (!Number.isInteger(ocupacaoParam)) {
    return res.status(400).json({ error: "Parametros não permitidos." });
  }

  // Tente Buscar os dados desse Ocupação
  try {
    // busca a posição
    const buscaProdutosOcupantes =
      await prisma.nc_m2m_ocupacoes_estoq_produtos.findMany({
        where: { ocupacoes_estoque_id: ocupacaoParam },
      });

    // se não encontrou, responde 400
    if (!buscaProdutosOcupantes) {
      return res.status(410).json({ error: "Ocupação Sem Produtos" });
    }

    // se encontrou, retorna o objeto completo
    return res.status(200).json({ data: buscaProdutosOcupantes });
  } catch (error) {
    console.error("Erro ao buscar produtos Ocupado:", error);
    return res.status(500).json({
      error: "Erro interno ao buscar Ocupações",
      details: error.message,
    });
  }
}
