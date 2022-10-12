const { productsService } = require('../services');

const controllerProductsAll = async (_req, res) => {
  const { message, status } = await productsService.serviceProductsAll();
  res.status(status).json(message);
};

const controllerProductsById = async (req, res) => {
  const { id } = req.params;
  const { message, status } = await productsService.serviceProductsById(id);
  if (message.length <= 0) {
    return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(status).json(message[0]);
};

module.exports = {
  controllerProductsAll,
  controllerProductsById,
};