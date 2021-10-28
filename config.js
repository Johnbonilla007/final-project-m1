var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'dbeconomico.cda4rw4e9bfb.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'abc1234*',
  database: 'dbEconomico'
})


module.exports = connection;
