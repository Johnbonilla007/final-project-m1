var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "dbeconomico.cda4rw4e9bfb.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "abc1234*",
  database: "dbEconomico",
});

function handleDisconnect() {
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

function productoController() {
  async function getProductos(req, res) {
    connection.connect();

    connection.query(
      "select * from Producto",
      function (error, result, fields) {
        res.status(200).json(result);
      }
    );

    handleDisconnect();
  }

  async function agregarProducto(req, res) {
    connection.connect();

    const { producto } = req.body;
    const query = `INSERT INTO Producto (NombreProducto) VALUES('${producto.NombreProducto}')`;

    connection.query(query, function (error, result) {
      if (error) res.status(200).json({ Error: "Hay un clavo" });

      res.status(200).json({ mensaje: "Todo bien" });
    });
  }

  async function actualizarProducto(req, res) {
    connection.connect();
    const { producto } = req.body;
    var query = `UPDATE Producto SET NombreProducto = '${producto.NombreProducto}' WHERE IdProducto = ${producto.IdProducto}`;

    connection.query(query, function (error, result) {
      if (error) res.status(400).json({ Error: "Hay un clavo" });

      res.status(200).json({ mensaje: "todo bien" });
    });
  }

  async function EliminarProducto(req, res) {
    connection.connect();
    const { producto } = req.body;
    var query = `DELETE FROM Producto WHERE IdProducto = ${producto.IdProducto}`;
    connection.query(query, function (error, result) {
      if (error) res.status(401).json({ Error: "Hay un clavo" });

      res.status(200).json({ mensaje: "todo bien" });
    });
  }

  return {
    getProductos,
    agregarProducto,
    actualizarProducto,
    EliminarProducto,
  };
}

module.exports = productoController;
