const { Pool } = require('pg')
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

const resetId = async (table) => {
  const res = await pool.query(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}))`);
  console.log(res.rows[0]);
}


module.exports = {resetId};