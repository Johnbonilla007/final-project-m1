var express = require("express");

var express = require("express");
const productoController = require("./productoController");

var productoRouter = express.Router();

const { getProductos } = productoController();

productoRouter.get("/test", getProductos);

module.exports = productoRouter;
