const { productsService } = require('../services');

const controllerProductsAll = async (_req, res) => {
  const { message } = await productsService.serviceProductsAll();
  res.status(200).json(message);
};

const controllerProductsById = async (req, res) => {
  const { id } = req.params;
  const { message, status } = await productsService.serviceProductsById(id);
  if (message.length <= 0) {
    return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(status).json(message[0]);
};

const controllerProductsPost = async (req, res) => {
  const { name } = req.body;
  const { message } = await productsService.serviceProductsPost(name);
  console.log(message);
  return res.status(201).json(message[0]);
};

const controllerProductsDelete = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.serviceProductDelete(id);
  if (type) return res.status(404).json({ message });
  res.status(204).json(message);
};

const controllerProductsUpdate = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productsService.serviceProductUpdate(id, name);
  if (type === 'error') return res.status(422).json({ message });
  if (type === 'not found') return res.status(404).json({ message });
  res.status(200).json({ id, name });
};

module.exports = {
  controllerProductsAll,
  controllerProductsById,
  controllerProductsPost,
  controllerProductsDelete,
  controllerProductsUpdate,
};