// const { Pool } = require('pg').Client

// const db = new Pool ({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'cliente',
//     password: 'brigadeiro71@',
//     port: 5432
// });

// module.exports = db;

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:brigadeiro71@@localhost:5432/cliente', {dialect: 'postgres'});

module.exports = sequelize;