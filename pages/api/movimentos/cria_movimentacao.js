
import { prisma } from "@/lib/prisma";


export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método não permitido" });
    }
    
    const { movimento } = req.body.movimento;
    const entradaCriada = {};
    const updateOcupacao = {};

    // Cria a movimentação de entrada
    try {
    entradaCriada = await prisma.movimentacoes.create({
      data: {
        movimento
      },
    });
    } catch (error) {
    console.error("Erro ao criar movimentação:", error);
    return res.status(500).json({ error: "Erro ao criar movimentação." });
    }

    if (!entradaCriada) {
        return res.status(401).json({ error: "Movimentação não registrada ccorretamente." });
    }

    
    // Atualiza a posicao de estoque com a última movimentação
    try {
        updateOcupacao = await prisma.posicoes_estoque.update({
            where: { ocupacao_destino_id1: entradaCriada.ocupacao_destino_id },
            data: {
                ultima_movimentacao: new Date(),
            },
        });
    } catch (error) {
        console.error("Erro ao atualizar ocupação:", error);
        return res.status(500).json({ error: "Erro ao atualizar ocupação." });
    }
    
    return res.status(200).json({ message: "Movimentação criada com sucesso." });
}


