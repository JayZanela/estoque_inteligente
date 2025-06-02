import { criarDado, buscarPrimeiroDado, atualizarDado } from "@/lib/db/actions";

export async function inserirProdutoNovo(dadosCriacao) {
  try {
    const criaProduto = await criarDado("produtos", dadosCriacao);
    return {
      status: 200,
      produto: criaProduto,
    };
  } catch (error) {
    console.error("Erro ao inserir produto:", error);
    return {
      status: 500,
      error: "Erro ao inserir produto: " + error.message,
    };
  }
}

export async function relacionarModeloeProduto(modeloNome, produtoId) {
  try {
    const detalhesModelo = await buscarPrimeiroDado("modelos_moto", {
      nome: modeloNome,
    });

    const criaLinhaRelacao = await criarDado("produtos_modelos_moto", {
      produto_id: produtoId,
      modelo_moto_id: detalhesModelo.id,
    });

    const sku = `${modeloNome}-V${detalhesModelo.edicao}-ID${produtoId}`;

    const atualizaSku = await atualizarDado(
      "produtos",
      { id: produtoId },
      {
        sku: sku,
      }
    );

    return {
      status: 200,
      message: "Relacioamentos Automáticos Executados com Sucesso.",
    };
  } catch (error) {
    console.error("Erro ao relacionar Modelo ao Produto ", error);
    return {
      status: 500,
      error:
        "Erro ao Relacionar Produto ao Modelo Cadastrado: " + error.message,
    };
  }
}
