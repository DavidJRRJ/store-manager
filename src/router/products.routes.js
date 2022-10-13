const express = require('express');
const { productsController } = require('../controllers');
const { nameValidation } = require('../helpers/nameValidation');

const routes = express.Router();

routes.get('/', productsController.controllerProductsAll);

routes.get('/:id', productsController.controllerProductsById);

routes.post('/', nameValidation, productsController.controllerProductsPost);

module.exports = routes;