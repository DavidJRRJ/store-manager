const { salesModel } = require('../models');

const serviceGetAll = async () => {
  const result = await salesModel.salesGetAll();
  return result;
};

const serviceGetId = async (id) => {
  const result = await salesModel.salesGetId(id);
  return result;
};

module.exports = {
  serviceGetAll,
  serviceGetId,
};