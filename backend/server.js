const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const bd = new Pool({
  user: 'postgres',
  host: '150.162.67.196',
  database: 'clientes',
  password: 'paodequeijo123',
  port: 5432,
});

app.post('/', async (req, res) => {
  const { nome, email, telefone, tamanho, referencia } = req.body;

  try {
    const query = 'INSERT INTO infosclientes (nome, email, telefone, tamanho, referencia) VALUES ($1, $2, $3, $4, $5)';
    await bd.query(query, [nome, email, telefone, tamanho, referencia]);
    console.log('Dados inseridos com sucesso.');
    res.status(200).send('Dados inseridos com sucesso.');
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    res.status(500).send('Erro ao enviar dados.');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

