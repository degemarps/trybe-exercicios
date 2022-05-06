const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'docker123',
  database: 'cep_lookup'
});

module.exports = connection;
