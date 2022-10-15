const { salesModel } = require('../models');

const serviceGetAll = async () => {
  const result = await salesModel.salesGetAll();
  return result;
};

const serviceGetId = async (id) => {
  const result = await salesModel.salesGetId(id);
  return result;
};

// const serviceSalesInsert = async (productsArr) => {
//   const dataId = await salesModel.salesInsertData();
//   const promises = productsArr.map(async (product) => {
//     await salesModel.salesInsertProduct(product, dataId);
//   });
//   await Promise.all(promises);
//   return { id: dataId, itemsSold: [...productsArr] };
// };

module.exports = {
  serviceGetAll,
  serviceGetId,
};