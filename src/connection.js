const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'db',
  user: 'root',
  port: 3306,
  password: 'password',
  database: 'StoreManager',
});

module.exports = connection; 