const { Client } = require('pg')
require('dotenv').config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

const resetId = (table) => {
  client.connect();
  client.query(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}), false)`,
  (err, res) => {
    if(err){
      console.error(err);
    } else {res.rows[0]};
    client.end();
  });
}


module.exports = {resetId};