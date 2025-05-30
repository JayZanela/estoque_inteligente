// pages/api/estoque/movimentos/entrada.js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  const baseUrl = process.env.API_BASE_URL || "http://localhost:3000";
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const param = req.body.param;
  const { endereco } = param;

  try {
    console.log(endereco);
    // Verifica se a posição de estoque existe para o destino
    const buscaOcupacaoEstoque = await prisma.posicoes_estoque.findFirst({
      where: { endereco: endereco },
    });

    const resultadoBsuca = await buscaOcupacaoEstoque;
    console.log(resultadoBsuca.ocupacoes_estoque_id1);

    if (!resultadoBsuca.ocupacoes_estoque_id1) {
      const gerarOcupacao = await fetch(
        `${baseUrl}/api/movimentos/criar_nova_ocupacao`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            param: {
              quantidade: 0,
              observacoes:
                "Ocupação criada via sistema, não identificou Ocupação para o Endereço",
              lote_id: null,
            },
          }),
        }
      );
      const resultGerar = await gerarOcupacao.json();
      console.log(resultGerar);
      if (!gerarOcupacao.ok) {
        return res.status(gerarOcupacao.status).json(resultGerar.error);
      }
      // Atualiza a posição de estoque para apontar para a nova ocupação
      const atualizarOccupacao = await prisma.posicoes_estoque.update({
        where: { id: resultadoBsuca.id },
        data: { ocupacoes_estoque_id1: resultGerar.data.id },
      });
      if (!atualizarOccupacao) {
        return res.status(415).json({
          error: "Ocupação criada mas ão anexada ao ENdereço, tente novamente.",
        });
      }
      const buscaOcupacaoEstoque = await prisma.posicoes_estoque.findFirst({
        where: { endereco: endereco },
      });

      const OcupacaoGerada = gerarOcupacao.json;
      return res.status(200).json({ data: buscaOcupacaoEstoque });
    }
    return res.status(201).json({ data: buscaOcupacaoEstoque });
  } catch (error) {
    console.error("Erro ao criar entrada:", error);
    res.status(500).json({ error: "Erro interno ao criar entrada." });
  }
}
