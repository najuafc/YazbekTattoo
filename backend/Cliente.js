//dados
const Sequelize = require('sequelize');
const database = require('./db');
 
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