
export function traduzJsonProduto(json) {
    try {

        if (typeof json === 'string') {
            json = JSON.parse(json);
        }

        console.log('JSON recebido:', json);

        const item = json.data.rows[0]; // 👈 acessa o primeiro (ou único) produto

        const jsonProduto = {
            json: {
            id: item.id,
            nome: item.nome,
            descricao: item.descricao
            }
        };

        console.log('JSON traduzido:', jsonProduto);
        return jsonProduto;
    } 
    catch (ex) {
        console.error('Erro ao traduzir JSON:', ex);
        return {
            erro: 'Erro ao traduzir JSON: ' + ex.message
        }
    }
}