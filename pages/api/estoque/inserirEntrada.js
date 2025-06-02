import { criaMovimentacao } from "@/lib/utils/funcoes_movimentacoes";
import {
  criar_nova_ocupacao,
  relacionaOcupacaoeProduto,
  atualizarQuantidadeOcupacao,
  verificarOcupacaoProduto,
} from "@/lib/utils/funcoes_ocupacoes";

export default async function handler(req, res) {
  let ocupacaoExistente = false;
  let detalhesOcupacao = {};

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metodo Inválido" });
  }
  const {
    endereco,
    quantidade,
    responsavel_id,
    motivo,
    observacoes,
    produto_id,
  } = req.body.param;

  if (
    !endereco ||
    typeof quantidade !== "number" ||
    quantidade <= 0 ||
    !responsavel_id ||
    !motivo ||
    !produto_id
  ) {
    return res.status(406).json({
      status: 406,
      error:
        "Parâmetros inválidos. Verifique se todos os campos obrigatórios foram preenchidos corretamente.",
      detalhes: {
        endereco: !!endereco,
        quantidade: quantidade,
        responsavel_id: !!responsavel_id,
        motivo: !!motivo,
        observacoes: observacoes ?? "(opcional)",
        produto_id: !!produto_id,
      },
    });
  }

  const ocupacaoJaExistente = await verificarOcupacaoProduto(produto_id);

  if (ocupacaoJaExistente.status === 200 && ocupacaoJaExistente.data) {
    ocupacaoExistente = true;
    detalhesOcupacao = ocupacaoExistente.data;
  } else {
    const gerarNovaOcupacao = await criar_nova_ocupacao(
      quantidade,
      observacoes,
      0
    );
    if (gerarNovaOcupacao.status !== 200 || !gerarNovaOcupacao.data) {
      return res.status(gerarNovaOcupacao.status).json(gerarNovaOcupacao.error);
    }

    detalhesOcupacao = gerarNovaOcupacao.data;
  }
}
