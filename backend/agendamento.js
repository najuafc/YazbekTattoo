// rotas relacionadas ao agendamento

const express = require('express');
const pool = require('./database');
const upload = require('./upload');

const rota = express.Router();

rota.post('/', upload.single('imagem'), async (req, res) => {
    const { nome, email, telefone, tamanho } = req.body;
    const imagem_path = req.file ? req.file.path : null; // Caminho da imagem, se estiver presente
  
    try {
      const query = 'INSERT INTO clientes (nome, email, telefone, tamanho, imagem_path) VALUES ($1, $2, $3, $4, $5)';
      await pool.query(query, [nome, email, telefone, tamanho, imagem_path]);
      res.status(201).json({ message: 'Agendamento criado com sucesso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar agendamento.' });
    }
  });
  
  module.exports = rota;