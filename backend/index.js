const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
  
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
const upload = multer({ storage: storage });


const Cliente = require('./Cliente');
const database = require('./db');


app.post('/formulario', upload.single('imagem_rota'),  (req, res) => {
    try {
        const resultado = Cliente.create({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            tamanho: req.body.tamanho,
            imagem_rota: req.file.filename
        });
        console.log(req.body);
        console.log(req.body.nome);
        res.json("Ok");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao salvar os dados.' });
    }
});

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});
