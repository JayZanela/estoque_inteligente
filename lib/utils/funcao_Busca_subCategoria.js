export async function buscarSubCategoria(parametro) {
  try {
    const baseUrl = process.env.API_BASE_URL;
    console.log('Base URL:', baseUrl);
    console.log('Parâmetro enviado:', parametro);
    const response = await fetch(`${baseUrl}/api/nocodb_integraction/search/define_subcategoria`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ parametro })
    });

    const data = await response.json();

    return {
      status: response.status,
      ...data
    };
  } catch (error) {
    console.error('Erro na chamada da API de subcategoria:', error);
    return {
      status: 500,
      error: 'Falha na comunicação com o serviço de subcategoria'
    };
  }
}
