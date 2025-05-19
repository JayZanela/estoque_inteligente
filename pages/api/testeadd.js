
import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
    res.status(200).json({ name: 'Item Teste Adicionado com Sucesso!'
    // Aqui vamos aadicionar os itens!
        
     });

     const nome = 'Café Torrado em Grãos 500g';
     const sku = 'CAF-GRA-500';

    console.log('Adicionando item:', nome, sku);
    
     const novoItem = await prisma.produtos.create({
        data: {
          nome,
          sku,
        },
        });

        console.log('Item adicionado:', novoItem);
    }




