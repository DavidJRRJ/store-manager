const express = require('express');
const { salesController } = require('../controllers');

const routes = express.Router();

routes.get('/', salesController.controllerGetAll);

routes.get('/:id', salesController.controllerGetId);

routes.post('/', salesController.controllerSalesinsert);

module.exports = routes;