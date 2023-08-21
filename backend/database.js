// configurar o banco de dados

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: '150.162.67.196',
    database: 'clientes',
    password: 'paodequeijo123',
    port: 5432
});

module.exports = pool;