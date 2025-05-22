import { prisma } from '../prisma';

export async function atualizarProduto(id, dadosAtualizados) {

    const produtoExistente = await prisma.produtos.findUnique({
      where: { id: Number(id) }
    });

    if (!produtoExistente) {
      throw new Error(`Produto com ID ${id} não encontrado.`);
    }

    console.log('Entrou na função atualizarProduto');
    console.log('ID do produto:', id);
    console.log('Dados atualizados:', dadosAtualizados);

    try {
        const produtoAtualizado = await prisma.produtos.update({
            where: { id: Number(id) },
            data: dadosAtualizados
        });
        return {
            status: 200,
            produto: produtoAtualizado

        };
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        throw new Error('Erro ao atualizar produto');
    }
}