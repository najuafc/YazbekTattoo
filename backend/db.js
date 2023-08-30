const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:paodequeijo123@150.162.67.196:5432/agendamentos', {dialect: 'postgres'});

module.exports = sequelize;