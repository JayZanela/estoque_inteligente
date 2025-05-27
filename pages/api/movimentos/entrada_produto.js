// pages/api/estoque/movimentos/entrada.js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  console.log("API ENTRADA PRODUTO REQ query:", req.body);
  const {
    ocupacao_origem_id,
    ocupacao_destino_id,
    tipo = "Entrada",
    quantidade,
    responsavel_id,
    documento_id,
    motivo,
    observacoes,
    produtos_id, // Certifique-se de que este campo está sendo enviado corretamente
  } = req.body;

  if (!quantidade || !ocupacao_destino_id || !produtos_id) {
    return res
      .status(400)
      .json({ error: "Quantidade, destino e produto são obrigatórios." });
  }
  if (motivo === undefined) {
    motivo = "Inventário";
  }

  try {
    const buscaIdOcupacaoDestino = await prisma.posicoes_estoque.findFirst({
      where: { endereco: ocupacao_destino_id },
    });
    if (!buscaIdOcupacaoDestino) {
      return res.status(404).json({
        error: "Ocupação de destino não encontrada no Mapa de Estoque.",
      });
    }
    console.log("Ocupação de destino encontrada:", buscaIdOcupacaoDestino);
    const gerarNovaOcupacao = await prisma.ocupacoes_estoque.create({
      data: {
        lote_id: null, // Inicialmente nulo, pode ser atualizado posteriormente
        data_alocacao: new Date(), // Inicialmente nulo, pode ser atualizado posteriormente
        quantidade: quantidade,
        observacoes: observacoes,
      },
    });
    const idocupacao_estoque = gerarNovaOcupacao.id;
    const relacionarOcupacao =
      await prisma.nc_m2m_ocupacoes_estoq_produtos.create({
        data: {
          produtos_id: parseInt(produtos_id),
          ocupacoes_estoque_id: parseInt(idocupacao_estoque),
        },
      });
    const atualizarOcupacaoDestino = await prisma.posicoes_estoque.update({
      where: { id: buscaIdOcupacaoDestino.id },
      data: { ocupacoes_estoque_id1: gerarNovaOcupacao.id },
    });
    const entradaCriada = await prisma.movimentacoes.create({
      data: {
        ocupacao_origem_id: gerarNovaOcupacao.id,
        ocupacao_destino_id: gerarNovaOcupacao.id,
        tipo: tipo,
        quantidade,
        data_hora: new Date(),
        responsavel_id: responsavel_id || null,
        documento_id: documento_id || null,
        motivo: motivo,
        observacoes: observacoes || null,
      },
    });

    res.status(201).json(entradaCriada);
  } catch (error) {
    console.error("Erro ao criar entrada:", error);
    res.status(500).json({ error: "Erro interno ao criar entrada." });
  }
}
