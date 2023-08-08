const express = require('express');
const pg = require('pg');

const { Pool } = require('pg');

const bd = new Pool ({
    user: 'ṕostgres',
    password: 'paodequeijo123',
    host: '150.162.67.196',
    port: 5432,
    database: 'clientes'
});


