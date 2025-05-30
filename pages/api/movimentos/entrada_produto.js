// pages/api/estoque/movimentos/entrada.js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  const baseUrl = process.env.API_BASE_URL || "http://localhost:3000";
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
  } = req.body.param;

  console.log(
    endereco,
    quantidade,
    responsavel_id,
    documento_id,
    motivo,
    observacoes,
    produtos_id
  );
  if (!quantidade || !endereco || !produtos_id) {
    return res
      .status(400)
      .json({ error: "Quantidade, endereço e produto são obrigatórios." });
  }

  try {
    // Verifica se a posição de estoque existe para o destino
    const novaOcupacao = await fetch(
      `${baseUrl}/api/movimentos/definir_ocupacao`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          param: { endereco: endereco },
        }),
      }
    );
    if (!novaOcupacao.ok) {
      const erro = await novaOcupacao.json();
      return res
        .status(novaOcupacao.status)
        .json({ error: erro?.error || "Erro ao criar nova ocupação." });
    }
    const dataNovaOcupacao = await novaOcupacao.json();

    console.log(dataNovaOcupacao.data.id);

    await prisma.ocupacoes_estoque.update({
      where: { id: dataNovaOcupacao.data.ocupacoes_estoque_id1 },
      data: {
        quantidade: {
          increment: parseInt(quantidade),
        },
      },
    });
    console.log(produtos_id, dataNovaOcupacao.data.ocupacoes_estoque_id1);
    // Relaciona a nova ocupação com o produto
    const relacionarOcupacao =
      await prisma.nc_m2m_ocupacoes_estoq_produtos.create({
        data: {
          produtos_id: parseInt(produtos_id),
          ocupacoes_estoque_id: parseInt(
            dataNovaOcupacao.data.ocupacoes_estoque_id1
          ),
        },
      });
    console.log("RELACIONADO!!!!!!!");
    // Cria a movimentação de entrada
    console.log(
      [
        "MOVIMENTO",
        "origem_id:" + null,
        "destino_id:" + dataNovaOcupacao.data.ocupacoes_estoque_id1,
        "tipo:Entrada",
        "quantidade:" + parseInt(quantidade),
        "responsavel_id:" + (responsavel_id || "null"),
        "documento_id:" + (documento_id || "null"),
        "motivo:" + motivo,
        "observacoes:" + (observacoes || "null"),
      ].join(" | ")
    );
    const movimentacao_criada = await fetch(
      `${baseUrl}/api/movimentos/cria_movimentacao`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movimento: {
            ocupacao_origem_id: 1,
            ocupacao_destino_id: dataNovaOcupacao.data.ocupacoes_estoque_id1,
            tipo: "Entrada",
            quantidade: parseInt(quantidade),
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
      ocupacao: dataNovaOcupacao,
      relacionarOcupacao: relacionarOcupacao,
    };

    res.status(201).json(retorno);
  } catch (error) {
    console.error("Erro ao criar entrada:", error);
    res.status(500).json({ error: "Erro interno ao criar entrada." });
  }
}
