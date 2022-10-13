const express = require('express');
const { productsController } = require('../controllers');

const routes = express.Router();

routes.get('/', productsController.controllerProductsAll);

routes.get('/:id', productsController.controllerProductsById);

routes.post('/', productsController.controllerProductsPost);

module.exports = routes;