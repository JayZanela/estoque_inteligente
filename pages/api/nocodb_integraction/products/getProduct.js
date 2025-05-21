
import { prisma } from '../../../../lib/prisma';

export default async function handler(req, res) {

    if (req.method !== 'GET') {
        console.log('Método não permitido: ' + req.method);
        return res.status(200).json({ error: 'Método não permitido' });
        
    }

        else {

            return res.status(200).json({ error: 'Caiu no Else' });
        }
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