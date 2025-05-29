// pages/api/estoque/movimentos/entrada.js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const {
    endereco,
    quantidade,
    responsavel_id,
    documento_id,
    motivo = "Inventário",
    observacoes,
    produtos_id,
  } = req.body;

  if (!quantidade || !endereco || !produtos_id) {
    return res
      .status(400)
      .json({ error: "Quantidade, endereço e produto são obrigatórios." });
  }

  try {
    // Verifica se a posição de estoque existe para o destino
    const novaOcupacao = await fetch("/api/movimentos/definir_ocupacao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        param: { endereco: endereco },
      }),
    });
    if (!novaOcupacao.ok) {
      const erro = await novaOcupacao.json();
      return res
        .status(novaOcupacao.status)
        .json({ error: erro?.error || "Erro ao criar nova ocupação." });
    }
    const dataNovaOcupacao = await novaOcupacao.json();

    await prisma.ocupacoes_estoque.update({
      where: { id: ocupacaoDestinoId },
      data: {
        quantidade: {
          increment: quantidade,
        },
      },
    });
    // Relaciona a nova ocupação com o produto
    const relacionarOcupacao =
      await prisma.nc_m2m_ocupacoes_estoq_produtos.create({
        data: {
          produtos_id: parseInt(produtos_id),
          ocupacoes_estoque_id: parseInt(
            dataNovaOcupacao.ocupacoes_estoque_id1
          ),
        },
      });

    // Atualiza a posição de estoque para apontar para a nova ocupação
    const atualizarOccupacao = await prisma.posicoes_estoque.update({
      where: { endereco: endereco },
      data: { ocupacoes_estoque_id1: dataNovaOcupacao.ocupacoes_estoque_id1 },
    });

    // Cria a movimentação de entrada
    const movimentacao_criada = await fetch(
      `/api/movimentos/cria_movimentacao`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movimento: {
            ocupacao_origem_id: ocupacao_origem_id || null,
            ocupacao_destino_id: idocupacao_estoque,
            tipo: tipo,
            quantidade,
            responsavel_id: responsavel_id || null,
            documento_id: documento_id || null,
            motivo: motivo,
            observacoes: observacoes || null,
          },
        }),
      }
    );

    // Retorna os dados da movimentação, nova ocupação e relacionamentos
    const retorno = {
      movimentacao: movimentacao_criada,
      ocupacao: gerarNovaOcupacao,
      relacionarOcupacao: relacionarOcupacao,
      atualizarOccupacao: atualizarOccupacao,
    };

    res.status(201).json(retorno);
  } catch (error) {
    console.error("Erro ao criar entrada:", error);
    res.status(500).json({ error: "Erro interno ao criar entrada." });
  }
}
