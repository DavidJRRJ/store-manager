const { salesService } = require('../services');

const controllerGetAll = async (_req, res) => {
  const result = await salesService.serviceGetAll();
  return res.status(200).json(result);
};

const controllerGetId = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.serviceGetId(Number(id));
  if (result.length <= 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(result);
};

module.exports = {
  controllerGetAll,
  controllerGetId,
  
};