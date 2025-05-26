import { prisma } from "@/lib/prisma";
import { inserirProduto } from "@/lib/utils/funcao_insert_produto";
import { validarCategorias } from "../search/define_categoria";

export default async function handler(req, res) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  if (req.method === "POST") {
    const { nome, descricao, tipo_embalagem, unidade_medida, codigo_barras } =
      req.body;

    console.log("REQ body:", req.body);
    // Validação simples dos campos
    if (!nome || !descricao || !tipo_embalagem || !unidade_medida) {
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
    console.log("Produto inserido com sucesso:", inserirRegistro.produto);
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
    /*const definir_sku_item = await fetch(
      `${baseUrl}/api/nocodb_integraction/search/define_sku_item`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ produto: inserirRegistro.produto }), // você pode ajustar a estrutura do payload
      }
    );
    if (definir_sku_item.status !== 200) {
      console.error("Erro ao definir SKU do item:", definir_sku_item);
      return res
        .status(definir_sku_item.status)
        .json({ error: `${definir_sku_item.error}` });
    }*/

    res.status(200).json(inserirRegistro.produto);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
