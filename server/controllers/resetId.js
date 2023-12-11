const { Client } = require('pg')
require('dotenv').config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

const resetId = async (table) => {
  await client.connect();
  const res = await client.query(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}))`);
  console.log(res.rows[0]);
  client.end();
}


module.exports = {resetId};