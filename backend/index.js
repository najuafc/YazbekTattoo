// //inicializar servidor e rotas
// const express = require('express');
// const app = express();

// app.use(express.json());       
// app.use(express.urlencoded({extended: true}));

// const multer = require('multer');
// const upload = multer({ dest: './uploads' });

// const Cliente = require('./Cliente');


// // (async () => {
// //     const database = require('./db');
 
// //     try {
// //         const resultado = await database.sync();
// //         console.log(resultado);
// //     } catch (error) {
// //         console.log(error);
// //     };
// // })

// app.post('/formulario', upload.single('imagem_rota'), (req, res) => {
//     const { _nome, _email, _telefone, _tamanho, _imagem_rota } = req.body;
//     console.log(req.body);

//     // const resultado = Cliente.create({
//     //         nome: _nome,
//     //         email: _email,
//     //         telefone: _telefone,
//     //         tamanho: _tamanho,
//     //         imagem_rota: _imagem_rota
//     // });
//     res.json('ok.');
// });        
// app.listen(4000);


const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const multer = require('multer');
const upload = multer({ dest: './uploads' });

const Cliente = require('./Cliente');
const database = require('./db'); // Certifique-se de que este arquivo esteja corretamente definido


app.post('/formulario', upload.single('imagem_rota'),  (req, res) => {
    const { _nome, _email, _telefone, _tamanho, _imagem_rota } = req.body;
    
    try {
        // const resultado =  Cliente.create({
        //     nome: _nome,
        //     email: _email,
        //     telefone: _telefone,
        //     tamanho: _tamanho,
        //     imagem_rota: _imagem_rota
        // });

        // console.log(resultado);
        // res.json(resultado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao salvar os dados.' });
    }
});

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});
