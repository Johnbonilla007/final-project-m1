function productoController() {
  async function getProductos(req, res) {
    res.status(200).json({ name: "test1" });
  }

  return { getProductos };
}

module.exports = productoController;
