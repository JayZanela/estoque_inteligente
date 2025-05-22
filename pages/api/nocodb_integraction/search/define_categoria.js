import { prisma } from "../../../../lib/prisma";
import { OpenAI } from "openai";
import { buscarSubCategoria } from "../../../../lib/utils/funcao_Busca_subCategoria";
import { atualizarProduto } from "../../../../lib/utils/funcao_update_produtos";
import { traduzJsonProduto } from "../../../../lib/utils/funcao_traduz_json";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export default async function handler(req, res) {
  const jsonTraduzido = traduzJsonProduto(req.body);

  console.log("JSON recebido:", jsonTraduzido);
  /* Validando o JSON recebido */
  if (jsonTraduzido.erro) {
    return res.status(400).json({ error: jsonTraduzido.erro });
  }

  try {
    const produto = { ...jsonTraduzido.json };

    console.log("Produto recebido:", produto);

    const categorias = await prisma.categorias.findMany({});
    console.log("Categorias encontradas:", categorias);
    const listaFormatada = categorias
      .map((c) => `${c.id} : ${c.nome}: ${c.descricao}`)
      .join("\n");

    console.log("Lista formatada:", listaFormatada);

    const pergunta_GPT = await openai.chat.completions.create({
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
          content: `Produto para análise:

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

    if (pergunta_GPT.choices.length === 0) {
      console.error("Nenhuma resposta recebida da OpenAI");
      return res
        .status(410)
        .json({ error: "Erro ao processar a resposta da OpenAI" });
    }

    console.log(
      "bruto:::: Resposta da OpenAI:",
      pergunta_GPT.choices[0].message
    );
    console.log("Resposta da OpenAI:", pergunta_GPT.choices[0].message.content);

    const categoria = JSON.parse(pergunta_GPT.choices[0].message.content);
    const nome_categoria = categoria.nome;
    const id_categoria = Number(categoria.id);

    const prompt_subcategoria =
      " Qual é a subcategoria mais adequada para o produto? \n Aqui temos o produto: \n Nome: " +
      produto.nome +
      "\n Descrição: " +
      produto.descricao +
      "\n Categoria: " +
      nome_categoria +
      "\n Responda apenas com o nome da subcategoria.";
    const parametro_busca_subcategoria = {
      id_categoria: id_categoria,
      nome_categoria: nome_categoria,
      nome_produto: produto.nome,
      descricao_produto: produto.descricao,
    };

    console.log(
      "Parâmetro de busca de subcategoria:",
      parametro_busca_subcategoria
    );
    const sub_categoria = await buscarSubCategoria(
      parametro_busca_subcategoria
    );

    console.log("Subcategoria encontrada:", sub_categoria);

    if (sub_categoria.status != 200) {
      console.error("Erro ao buscar subcategoria:", sub_categoria);
      return res
        .status(sub_categoria.status)
        .json({ error: `${sub_categoria.error}` });
    }

    const id_sub_categoria = sub_categoria.id_sub_categoria;

    const atualizar_produto = await atualizarProduto(produto.id, {
      categoria_id: Number(id_categoria),
      subcategoria_id: Number(id_sub_categoria),
    });

    if (atualizar_produto.status != 200) {
      console.error("Erro ao atualizar produto:", atualizar_produto);
      return res
        .status(atualizar_produto.status)
        .json({ error: `${atualizar_produto.error}` });
    }

    return res
      .status(200)
      .json({ id_categoria, sub_categoria: id_sub_categoria });
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}
