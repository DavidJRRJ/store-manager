const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { productsMock } = require('../models/mocks/products.model.mock');
const product = {
  id: 4,
  name: "ProdutoX",
};

const { expect } = chai;
chai.use(sinonChai);

describe('Testes de unidade da camada controller do /products', function () {
  beforeEach(sinon.restore);
  it('Verifica se é retornado um status 200 e todos os produtos', async function () {
    sinon.stub(productsService, 'serviceProductsAll').resolves({ message: productsMock, status: 200 });
    
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.controllerProductsAll(req, res);

    expect(res.status).to.have.been.calledOnceWith(200);
    // expect(res.json).to.have.been.calledWith({ message: productsMock});
  });

  it('Verifica se é retornado 200 ao consultar o id', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'serviceProductsById').resolves({ message: productsMock[0], status: 200 });
    await productsController.controllerProductsById(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });

  it('Verifica se é retornado 404 ao consultar um id inválido', async function () {
    const req = { params: { id: 222 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'serviceProductsById').resolves({ message: [] });
    await productsController.controllerProductsById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' })
  });

  // it('Verifica se é retornado 201 ao cadastrar um produto', async function () {
  //   sinon.stub(productsService, 'serviceProductsPost').resolves(product);
    
  //   const res = {};
  //   const req = {
  //     body: {
  //       name: product.name,
  //     },
  //   };

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   await productsController.controllerProductsPost(req, res);

  //   expect(res.status).to.have.been.calledOnceWith(201);
  //   // expect(res.json).to.have.been.calledWith(product);
  // });

});