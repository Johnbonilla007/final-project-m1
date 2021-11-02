var mysql = require("mysql");
var database = () =>
  mysql.createConnection({
    host: "dbeconomico.cda4rw4e9bfb.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "abc1234*",
    database: "dbEconomico",
  });

function handleDisconnect(connection) {
  connection.on("error", function (err) {
    if (!err.fatal) {
      return;
    }

    if (err.code !== "PROTOCOL_CONNECTION_LOST") {
      throw err;
    }

    console.log("Re-connecting lost connection: " + err.stack);

    connection = mysql.createConnection(connection.config);
    handleDisconnect(connection);
    connection.connect();
  });
}

module.exports = { handleDisconnect, database };
