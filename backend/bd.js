const { Pool } = require('pg').Client

const bd = new Pool ({
    user: 'postgres',
    host: '150.162.67.196',
    database: 'clientes',
    password: 'paodequeijo123',
    port: 5432
});

module.exports = bd;