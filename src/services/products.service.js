const { productsModel } = require('../models');

const serviceProductsAll = async () => {
  const result = await productsModel.productAll();
  return { message: result, status: 200 };
};

const serviceProductsById = async (productId) => {
  const result = await productsModel.productById(productId);

  return { message: result, status: 200 };
};

const serviceProductsPost = async (name) => {
  const resultId = await productsModel.productPost(name);
  const result = await productsModel.productById(resultId);
  return { message: result };
};

const serviceProductDelete = async (id) => {
  const product = await productsModel.productById(id);
  console.log(product);
  if (product.length <= 0) return { type: 'not found', message: 'Product not found' };
  await productsModel.productDelete(id);
  return { type: null, message: [] };
};

const serviceProductUpdate = async (id, name) => {
  const product = await productsModel.productById(id);
  if (product.length <= 0) return { type: 'not found', message: 'Product not found' };
  await productsModel.productUpdate(id, name);
  const upProduct = await productsModel.productById(id);
  return { type: null, message: upProduct };
};

module.exports = {
  serviceProductsAll,
  serviceProductsById,
  serviceProductsPost,
  serviceProductDelete,
  serviceProductUpdate,
};