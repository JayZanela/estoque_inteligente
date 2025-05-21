export async function atualizarProduto(id, dadosAtualizados) {
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