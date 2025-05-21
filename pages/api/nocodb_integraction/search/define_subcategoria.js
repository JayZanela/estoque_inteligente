
import { json } from 'express';
import { prisma } from '../../../../lib/prisma';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function buscarSubCategoria(req, res) {
    console.log('Entrou na função buscarSubCategoria');

    if (req.method !== 'POST') {
        console.log('Método não permitido: ' + req.method);
        return res.status(405).json({ error: 'Método não permitido' });
    }
    console.log('req.body:', req.body);
console.log('ID da categoria recebido:', req.body.id_categoria);

const {
  id_categoria,
  nome_categoria,
  nome_produto,
  descricao_produto
} = req.body.parametro;


    const id_numero = parseInt(id_categoria);
    console.log('ID da categoria recebido:', id_numero);console.log('Tipo de id_categoria:', typeof id_categoria, 'Valor:', id_categoria);
    const subcategorias = await prisma.subcategorias.findMany({

        where: {
            categoria_id: id_numero
        }

    });
        console.log('Subcategorias encontradas:', subcategorias);
    const listaFormatada = subcategorias.map(c => `- ${c.nome}: ${c.descricao}`).join('\n');

    const pergunta_GPT = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [
    {
      role: 'system',
      content: `Você é um assistente que classifica produtos em subcategorias. Sua tarefa é analisar um produto com base em seu nome e descrição e escolher a subcategoria mais adequada.

            Abaixo estão as subcategorias disponíveis. Cada linha contém o nome da subcategoria seguido de sua descrição:

${listaFormatada}

Seu objetivo é retornar em um objeto JSON válido contendo os campos "nome" e "id" da subcategoria escolhida.`
    },
    {
      role: 'user',
      content: `Produto recebido para análise:

Nome: ${nome_produto}
Descrição: ${descricao_produto || 'Sem descrição disponível'}

Com base nas subcategorias listadas anteriormente, qual é a subcategoria mais adequada para este produto?

Responda **exclusivamente** com um **JSON válido** no formato:

{
  "nome": "Nome da Subcategoria",
  "id": 123
}`
    }             
          ]
        });

    if ( pergunta_GPT.choices.length === 0 ) {
        console.error('Nenhuma resposta recebida da OpenAI');
        return res.status(410).json({ error: 'Erro ao processar a resposta da OpenAI, Busca de SubCategorias' });
    }

    const sub_categoria = JSON.parse(pergunta_GPT.choices[0].message.content.trim());

    const nome_sub_categoria = sub_categoria.nome;
    const id_sub_categoria = parseInt(sub_categoria.id);

    return res.status(200).json({ nome_sub_categoria, id_sub_categoria });
}