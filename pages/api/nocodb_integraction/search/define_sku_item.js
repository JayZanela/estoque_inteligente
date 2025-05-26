import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  console.log("API SKU AUTOMATICO REQ query:", req.body);

  const id_product = req.body.produto.id;

  console.log("ID do produto recebido:", id_product);

  if (!id_product) {
    return res.status(400).json({ error: "ID do produto é necessário." });
  }

  try {
    const produto_find = await prisma.produtos.findUnique({
      where: {
        id: parseInt(id_product),
      },
    });

    if (!produto_find) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }

    const codigo_categoria = await prisma.categorias.findUnique({
      where: {
        id: produto_find.categoria_id,
      },
    });

    const codigo_subcategoria = await prisma.subcategorias.findUnique({
      where: {
        id: produto_find.subcategoria_id,
      },
    });

    console.log(
      "Categoria e subcategoria encontradas:",
      codigo_categoria,
      codigo_subcategoria
    );
    const is_modelo_unique = await prisma.produtos_modelos_moto.findMany({
      where: {
        produto_id: parseInt(id_product),
      },
    });

    const tipo_modelo =
      is_modelo_unique.length > 1 ? "Mult" : is_modelo_unique[0].modelo_moto_id;
    // Atualiza o SKU do produto
    if (tipo_modelo !== "Mult") {
      const nome_modelo = await prisma.modelos_moto.findUnique({
        where: {
          nome: tipo_modelo,
        },
      });

      sku = `${codigo_categoria.codigo}${codigo_subcategoria.codigo}${nome_modelo.nome}`;
    } else {
      sku = `${codigo_categoria.codigo}${codigo_subcategoria.codigo}${tipo_modelo}`;
    }
    const updatedProduct = await prisma.produtos.update({
      where: {
        id: parseInt(id_product),
      },
      data: {
        sku: sku,
      },
    });

    console.log("SKU atualizado com sucesso:", updatedProduct);
    return res
      .status(200)
      .json({ message: "SKU atualizado com sucesso", produto: updatedProduct });
  } catch (error) {
    console.error("Erro ao atualizar SKU do produto:", error);
    return res
      .status(500)
      .json({ error: "Erro interno ao atualizar SKU do produto." });
  }
}
