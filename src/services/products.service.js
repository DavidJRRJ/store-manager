const { productsModel } = require('../models');

const serviceProductsAll = async () => {
  const result = await productsModel.productAll();
  return { message: result, status: 200 };
};

const serviceProductsById = async (productId) => {
  const result = await productsModel.productById(productId);
  console.log(result);

  return { message: result, status: 200 };
};

const serviceProductsPost = async (name) => {
  const resultId = await productsModel.productPost(name);
  const result = await productsModel.productById(resultId);
  console.log(result);
  return { message: result };
};

const serviceProductDelete = async (id) => {
  const product = await productsModel.productById(id);
  console.log(product);
  if (product.length <= 0) return { type: 'not found', message: 'Product not found' };
  await productsModel.productDelete(id);
  return { type: null, message: [] };
};

module.exports = {
  serviceProductsAll,
  serviceProductsById,
  serviceProductsPost,
  serviceProductDelete,
};