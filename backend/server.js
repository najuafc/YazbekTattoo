// configurar o servidor express e as rotas

const express = require('express');
const agendamentoRotas = require('./agendamento');
const pool = require('./database');
const upload = require('./upload');

const app = express();

app.use(express.json());

app.use('./agendamento', agendamentoRotas);

const port = 4000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});