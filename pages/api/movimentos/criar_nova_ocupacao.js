// pages/api/estoque/movimentos/entrada.js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const param = req.body;
  const { quantidade, observacoes, lote_id } = param;

  try {
    // Verifica se a posição de estoque existe para o destino
    const gerarNovaOcupacao = await prisma.ocupacoes_estoque.create({
      data: {
        lote_id: lote_id, // Inicialmente nulo, pode ser atualizado posteriormente
        data_alocacao: new Date(), // Inicialmente nulo, pode ser atualizado posteriormente
        quantidade: quantidade,
        observacoes: observacoes,
      },
    });
    if (!gerarNovaOcupacao) {
      return res.status(400).json({ error: "Erro ao Criar Ocupação." });
    }
    return res.status(200).json({ data: gerarNovaOcupacao });
  } catch (error) {
    console.error("Erro ao criar entrada:", error);
    res.status(500).json({ error: "Erro interno ao criar entrada." });
  }
}
