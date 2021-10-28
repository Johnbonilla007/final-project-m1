var express = require("express");

var express = require("express");
const productoController = require("./productoController");

var productoRouter = express.Router();

const { getProductos, agregarProducto,actualizarProducto,EliminarProducto } = productoController();

productoRouter.get("/", getProductos);
productoRouter.put("/new", agregarProducto);
productoRouter.post("/update",actualizarProducto);
productoRouter.delete("/delete",EliminarProducto);

module.exports = productoRouter;
