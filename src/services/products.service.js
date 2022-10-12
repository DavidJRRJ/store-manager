const { productsModel } = require('../models');

const serviceProductsAll = async () => {
  const result = await productsModel.productAll();
  return { message: result, status: 200 };
};

const serviceProductsById = async (productId) => {
  const result = await productsModel.productById(productId);
  console.log(result);
  // if (result <= 0) {
  //   return {
  //     message: 'Product not found',
  //     status: 404,
  //   };
  // }

  return { message: result, status: 200 };
};

module.exports = {
  serviceProductsAll,
  serviceProductsById,
};