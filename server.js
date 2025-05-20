const express = require('express');
const axios = require('axios');

const app = express();
const port = 3333;


app.get('/testenocodb', async (req, res) => {
  try {
    const response = await axios.get('https://nocodb.plataforma.app/api/v2/tables/m46zfdjgzwtlpnw/records/1', {
      headers: {
        'Content-Type': 'application/json', 
                'accept': 'application/json',
        'xc-token': 'YID3aLay4VDxYBvMrLwNxGuBA-s932eBxxk_W74A'

      }
    });

    console.log('Response data:', response.data);

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ erro: 'Erro na requisição externa' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
