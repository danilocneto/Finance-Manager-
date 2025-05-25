require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.query('SELECT NOW()')
  .then(res => {
    console.log('Conectado! Resultado:', res.rows);
    pool.end();
  })
  .catch(err => {
    console.error('Erro na conexão:', err);
    pool.end();
  });
