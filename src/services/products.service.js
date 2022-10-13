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

module.exports = {
  serviceProductsAll,
  serviceProductsById,
  serviceProductsPost,
};