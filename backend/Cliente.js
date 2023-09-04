//tabela
const Sequelize = require('sequelize');
const database = require('./db'); //importando o arquivo de config da conexão com o bc (em ./db)

//Definição do modelo de dados 'Cliente' - mapeado para uma tabela chamada 'cliente' no bd
//o segundo argumento descreve a estrutura da tabela
const Cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tamanho:{
        type: Sequelize.STRING,
        allowNull: false
    },
    imagem_rota:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Cliente;
