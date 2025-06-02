import { prisma } from "../../prisma";
import { OpenAI } from "openai";
import { buscarVariosDadosComFiltro, atualizarDado } from "../../db/actions";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function categorizaInteligente(produto) {
  try {
    const categorias = await prisma.categorias.findMany({});
    const listaFormatada = categorias
      .map((c) => `${c.id} : ${c.nome}: ${c.descricao}`)
      .join("\n");

    const respostaGPT1 = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Você é um assistente inteligente que classifica produtos em **categorias** com base no nome e na descrição dos produtos.
Abaixo estão as categorias disponíveis. Cada item contém o ID da categoria, seguido do nome e depois da descrição (EXEMPLO: 1 : Eletrônicos: Produtos eletrônicos como TVs, celulares, etc.):

${listaFormatada}

Seu objetivo é analisar o produto informado e responder **exclusivamente** com um objeto JSON válido contendo os campos "nome" e "id" da categoria mais adequada.`,
        },
        {
          role: "user",
          content: `roduto para análise:

Nome: ${produto.nome}
Descrição: ${produto.descricao || "Sem descrição disponível"}

Com base nas categorias listadas anteriormente, informe **apenas** a categoria mais adequada.

A resposta deve ser um **JSON válido**, no seguinte formato (os valores são exemplos):

{
  "nome": "Nome exato da categoria",
  "id": "id da categoria"
}`,
        },
      ],
    });

    if (respostaGPT1.choices.length === 0) {
      return {
        status: 410,
        error: "Erro ao processar a resposta da OpenAI (categorias)",
      };
    }

    const categoria = JSON.parse(respostaGPT1.choices[0].message.content);
    const id_categoria = Number(categoria.id);

    const subcategorias = await buscarVariosDadosComFiltro("subcategorias", {
      categoria_id: id_categoria,
    });

    const listaSubcategorias = subcategorias
      .map((c) => `id: ${c.id}: nome: ${c.nome}: descricao: ${c.descricao}`)
      .join("\n");

    const respostaGPT2 = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Você é um assistente que classifica produtos em subcategorias. Sua tarefa é analisar um produto com base em seu nome e descrição e escolher a subcategoria mais adequada.

            Abaixo estão as subcategorias disponíveis. Cada linha contém o nome da subcategoria seguido de sua descrição:

${listaSubcategorias}

Seu objetivo é retornar em um objeto JSON válido contendo os campos "nome" e "id" da subcategoria escolhida.`,
        },
        {
          role: "user",
          content: `Produto recebido para análise:

Nome: ${produto.nome}
Descrição: ${produto.descricao || "Sem descrição disponível"}

Com base nas subcategorias listadas anteriormente, qual é a subcategoria mais adequada para este produto?

Responda **exclusivamente** com um **JSON válido** no formato (os valores são exemplos):

{
  "nome": "Nome da Subcategoria",
  "id": "id da Subcategoria"
}`,
        },
      ],
    });

    if (respostaGPT2.choices.length === 0) {
      return {
        status: 410,
        error: "Erro ao processar a resposta da OpenAI (subcategorias)",
      };
    }

    const sub_categoria = JSON.parse(
      respostaGPT2.choices[0].message.content.trim()
    );

    const id_sub_categoria = Number(sub_categoria.id);

    await atualizarDado(
      "produtos",
      { id: produto.id },
      {
        categoria_id: id_categoria,
        subcategoria_id: id_sub_categoria,
      }
    );

    return {
      status: 200,
      resultado: { id_categoria, id_sub_categoria },
    };
  } catch (error) {
    console.error("Erro ao categorizar produto:", error);
    return {
      status: 500,
      error: "Erro interno ao categorizar produto",
      detalhes: error.message,
    };
  }
}
