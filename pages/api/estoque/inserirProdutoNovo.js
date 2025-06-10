import { categorizaInteligente } from "@/lib/utils/openai/categoriza_inteligente";
import {
  inserirProdutoNovo,
  relacionarModeloeProduto,
} from "@/lib/utils/funcao_insert_produto";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    const {
      nome,
      descricao,
      tipo_embalagem,
      unidade_medida,
      edicao_modelo,
      nome_modelo,
      codigo_barras,
    } = req.body;

    // FIXME: Retirar Log
    console.log("REQ body:", req.body);
    console.log("Nome do modelo:", nome_modelo);
    console.log("Código de barras:", codigo_barras);
    console.log("Tipo de embalagem:", tipo_embalagem);
    console.log("Unidade de medida:", unidade_medida);
    console.log("Nome do produto:", nome);

    // Validação simples dos campos
    if (
      !nome ||
      !descricao ||
      !tipo_embalagem ||
      !unidade_medida ||
      !nome_modelo
    ) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios." });
    }

    const insertInserirProduto = {
      nome,
      descricao,
      tipo_embalagem,
      unidade_medida,
      codigo_barras: codigo_barras || null,
    };

    const inserirRegistro = await inserirProdutoNovo(insertInserirProduto);

    if (inserirRegistro.status !== 200) {
      console.error("Erro ao inserir produto:", inserirRegistro);
      return res
        .status(inserirRegistro.status)
        .json({ error: `${inserirRegistro.error}` });
    }

    console.log(
      "INSERT NEW PRODUCT!!!!!!!!!!!!!! Produto inserido com sucesso:",
      inserirRegistro.produto
    );

    const id_produtoNovo = inserirRegistro.produto.id;
    const categorizarInteligente = await categorizaInteligente(
      inserirRegistro.produto
    );

    if (categorizarInteligente.status !== 200) {
      console.error("Erro ao validar categorias:", categorizarInteligente);
      return res
        .status(categorizarInteligente.status)
        .json({ error: `${categorizarInteligente.error}` });
    }
    const vinculaModelos = await relacionarModeloeProduto(
      nome_modelo,
      edicao_modelo,
      id_produtoNovo
    );

    if (vinculaModelos.status !== 200) {
      console.error("Erro ao vincular modelos:", vinculaModelos);
      return res
        .status(vinculaModelos.status)
        .json({ error: `${vinculaModelos.error}` });
    }

    console.log(inserirRegistro.produto);
    res.status(200).json(inserirRegistro.produto);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
