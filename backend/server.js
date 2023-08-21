const express = require('express');
const { Pool } = require('pg');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Agendamento = require('../frontend/src/componentes/Agendamento'); // Substitua pelo caminho correto para o seu componente Agendamento

const app = express();
const port = 4000;

// Configuração do banco de dados
const pool = new Pool({
  user: 'postgres',
  password: 'paodequeijo123',
  host: '150.162.67.196',
  database: 'clientes',
  port: 5432,
});

// Rota para exibir o formulário
app.get('/', (req, res) => {
  const agendamentoHtml = ReactDOMServer.renderToString(<Agendamento />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Agendamento</title>
      </head>
      <body>
        <div id="root">${agendamentoHtml}</div>
      </body>
    </html>
  `);
});

// Rota para agendamento com upload de imagem
app.post('/agendamento', upload.single('imagem'), async (req, res) => {
    const { nome, email, telefone, tamanho } = req.body;
    const imagem_path = req.file ? req.file.path : null;
  
    try {
      const query = 'INSERT INTO clientes (nome, email, telefone, tamanho, imagem_path) VALUES ($1, $2, $3, $4, $5)';
      await pool.query(query, [nome, email, telefone, tamanho, imagem_path]);
      res.status(201).json({ message: 'Agendamento criado com sucesso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar agendamento.' });
    }
  });  

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
