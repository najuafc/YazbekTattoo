const express = require('express'); //'express' - framework para criar o servidor
const app = express();
const path = require('path'); //'path' - usado para manipular caminhos de arquivos

app.use(express.static(path.join('../frontend/public'))); //servir arquivos estáticos para o cliente a partir desse dir

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const multer = require('multer'); //importação do multer - para upload de arquivos
//config do multer para lidar com uploads
const storage = multer.diskStorage({
    //definição do destino do arquivo
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    //atualização do nome do arquivo
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
const upload = multer({ storage: storage });


const Cliente = require('./Cliente'); //importa o modelo 'Cliente'
const database = require('./db');

//rota POST - envio de formulários
app.post('/formulario', upload.single('imagem_rota'),  (req, res) => {
    try {
        const resultado = Cliente.create({
            nome: req.body.nome, //registro com base nos dados do corpo da solicitação (req.body)
            email: req.body.email,
            telefone: req.body.telefone,
            tamanho: req.body.tamanho,
            imagem_rota: req.file.filename //registro com o nome do arquivo gerado pelo multer
        });
        console.log(req.body);
        console.log(req.body.nome);
        res.sendFile(path.join(__dirname, '../frontend/public', 'pagina.html')); //envio de um arquivo html como resposta

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao salvar os dados.' });
    }
});

//inialização do servidor Express
app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});
