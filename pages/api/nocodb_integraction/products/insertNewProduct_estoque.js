import { prisma } from "@/lib/prisma";
import { inserirProduto } from "@/lib/utils/funcao_insert_produto";
import { validarCategorias } from "../search/define_categoria";

export default async function handler(req, res) {
  const baseUrl = process.env.API_BASE_URL || "http://localhost:3000";
  if (req.method === "POST") {
    const {
      nome,
      descricao,
      tipo_embalagem,
      unidade_medida,
      modelo,
      codigo_barras,
    } = req.body;

    console.log("REQ body:", req.body);
    console.log("Nome do modelo:", modelo);
    console.log("Código de barras:", codigo_barras);
    console.log("Tipo de embalagem:", tipo_embalagem);
    console.log("Unidade de medida:", unidade_medida);
    console.log("Nome do produto:", nome);
    // Validação simples dos campos
    if (!nome || !descricao || !tipo_embalagem || !unidade_medida || !modelo) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios." });
    }

    const insert = {
      nome,
      descricao,
      tipo_embalagem,
      unidade_medida,
      codigo_barras: codigo_barras || null, // Inicialmente nulo, pode ser atualizado posteriormente
    };

    const inserirRegistro = await inserirProduto(insert);
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
    const validarCategoriasApi = await fetch(
      `${baseUrl}/api/nocodb_integraction/search/define_categoria`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ produto: inserirRegistro.produto }), // você pode ajustar a estrutura do payload
      }
    );
    if (validarCategoriasApi.status !== 200) {
      console.error("Erro ao validar categorias:", validarCategoriasApi);
      return res
        .status(validarCategoriasApi.status)
        .json({ error: `${validarCategoriasApi.error}` });
    }
    const vinculaModelos = await fetch(
      `${baseUrl}/api/modelos/relacionar_modelos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          produto: { id: id_produtoNovo },
          modelo: { nome: modelo }, // Certifique-se de que o modelo contém um ID válido
        }), // você pode ajustar a estrutura do payload
      }
    );

    const vinculaModelosData = await vinculaModelos.json();
    console.log("json vincula modelos:", vinculaModelosData);

    if (vinculaModelos.status !== 200) {
      console.error("Erro ao vincular modelos:", vinculaModelos);
      return res
        .status(vinculaModelos.status)
        .json({ error: `${vinculaModelos.error}` });
    }

    const definir_sku_item = await fetch(
      `${baseUrl}/api/nocodb_integraction/search/define_sku_item`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_produto: id_produtoNovo,
          nome_modelo: modelo,
          edicao_modelo: vinculaModelosData.edicao, // Certifique-se de que a edição do modelo está sendo retornada corretamente
        }), // você pode ajustar a estrutura do payload
      }
    );
    if (definir_sku_item.status !== 200) {
      console.error("Erro ao definir SKU do item:", definir_sku_item);
      return res
        .status(definir_sku_item.status)
        .json({ error: `${definir_sku_item.error}` });
    }
    console.log(inserirRegistro.produto);
    res.status(200).json(inserirRegistro.produto);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
