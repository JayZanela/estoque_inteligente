// pages/api/estoque/movimentos/entrada.js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
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

    if (!buscaOcupacaoEstoque) {
      const gerarOcupacao = await fetch("/api/movimentos/criar_nova_ocupacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          param: {
            quantidade: 0,
            observacoes:
              "Ocupação criada via sistema, não identificou Ocupação para o Endereço",
            lote_id: null,
          },
        },
      });

      if (!gerarOcupacao.ok) {
        const resultGerar = gerarOcupacao.json;
        return res.status(gerarOcupacao.status).json(resultGerar.error);
      }
      const OcupacaoGerada = gerarOcupacao.json;
      return res.status(200).json({ data: OcupacaoGerada });
    }
    return res.status(201).json({ data: buscaOcupacaoEstoque });
  } catch (error) {
    console.error("Erro ao criar entrada:", error);
    res.status(500).json({ error: "Erro interno ao criar entrada." });
  }
}
