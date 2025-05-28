// pages/api/estoque/movimentos/entrada.js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

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

    // Verifica se a posição de estoque existe para o destino
    const buscaIdOcupacaoDestino = await prisma.posicoes_estoque.findFirst({
      where: { endereco: ocupacao_destino_id },
    });

    if (!buscaIdOcupacaoDestino) {
      return res.status(404).json({
        error: "Ocupação de destino não encontrada no Mapa de Estoque.",
      });
    }

    // Cria uma nova ocupação de estoque
    const gerarNovaOcupacao = await prisma.ocupacoes_estoque.create({
      data: {
        lote_id: null, // Inicialmente nulo, pode ser atualizado posteriormente
        data_alocacao: new Date(), // Inicialmente nulo, pode ser atualizado posteriormente
        quantidade: quantidade,
        observacoes: observacoes,
      },
    });
    const idocupacao_estoque = gerarNovaOcupacao.id;

    // Relaciona a nova ocupação com o produto
    const relacionarOcupacao =
      await prisma.nc_m2m_ocupacoes_estoq_produtos.create({
        data: {
          produtos_id: parseInt(produtos_id),
          ocupacoes_estoque_id: parseInt(idocupacao_estoque),
        },
      });

    // Atualiza a posição de estoque para apontar para a nova ocupação
    const atualizarOccupacao = await prisma.posicoes_estoque.update({
      where: { id: buscaIdOcupacaoDestino.id },
      data: { ocupacoes_estoque_id1: idocupacao_estoque },
    });

    // Cria a movimentação de entrada
    const entradaCriada = await prisma.movimentacoes.create({
      data: {
        ocupacao_origem_id: idocupacao_estoque,
        ocupacao_destino_id: idocupacao_estoque,
        tipo: tipo,
        quantidade,
        data_hora: new Date(),
        responsavel_id: responsavel_id || null,
        documento_id: documento_id || null,
        motivo: motivo,
        observacoes: observacoes || null,
      },
    });

    // Retorna os dados da movimentação, nova ocupação e relacionamentos
    const retorno = {
      movimentacao: entradaCriada,
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
