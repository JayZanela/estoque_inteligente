import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const movimento = req.body.movimento;
  const updateOcupacao = {};
  const data_alocacao = new Date().toISOString();
  let resultadoEntradaCriada = {};
  // Cria a movimentação de entrada
  try {
    const entradaCriada = await prisma.movimentacoes.create({
      data: {
        ocupacao_origem_id: movimento.ocupacao_origem_id,
        ocupacao_destino_id: movimento.ocupacao_destino_id,
        tipo: movimento.tipo,
        quantidade: movimento.quantidade,
        data_hora: data_alocacao, // corta milissegundos exatos
        responsavel_id: movimento.responsavel_id,
        documento_id: movimento.documento_id,
        motivo: movimento.motivo,
        observacoes: movimento.observacoes,
      },
    });
    resultadoEntradaCriada = await entradaCriada;
  } catch (error) {
    console.error("Erro ao criar movimentação:", error);
    return res.status(500).json({ error: "Erro ao criar movimentação." });
  }

  // Atualiza a posicao de estoque com a última movimentação
  try {
    const updateOcupacao = await prisma.posicoes_estoque.update({
      where: {
        ocupacoes_estoque_id1: parseInt(
          resultadoEntradaCriada.ocupacao_destino_id
        ),
      },
      data: {
        ultima_movimentacao: data_alocacao,
      },
    });
    resultadoEntradaCriada = await updateOcupacao;
  } catch (error) {
    console.error("Erro ao atualizar ocupação:", error);
    return res.status(500).json({ error: "Erro ao atualizar ocupação." });
  }

  return res.status(200).json({ data: resultadoEntradaCriada });
}
