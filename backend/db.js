const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:brigadeiro71@@localhost:5432/cliente', {dialect: 'postgres'});

module.exports = sequelize;