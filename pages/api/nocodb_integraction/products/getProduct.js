
import { prisma } from '../../../../lib/prisma';

export default async function handler(req, res) {

        const { id_product } = req.query;
        console.log('LOG: ' + id_product);

        const produto_find = await prisma.produtos.findUnique({
            where: {
            id: parseInt(id_product),
            },
        });

        console.log('Produto encontrado:', produto_find);

        
    res.status(200).json({ name: 'Recebido um id_product: ' + id_product
     });

}