const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/connection');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const { productsMock } = require('../models/mocks/products.model.mock')
const produto = { name: "Tadalafila" };

const { expect } = chai;

describe('Testes unitários da camada service de /products', function () {
  it('Verifica se é retornado todos os produtos', async function () {
    sinon.stub(productsModel, 'productAll').resolves(productsMock);

    const result = await productsService.serviceProductsAll();

    expect(result).to.be.deep.equal({ message: productsMock, status: 200 });
  });

  // it('Verifica se é retornado um obj ao cadastrar um produto', async function () {
  //   sinon.stub(productsModel, 'productPost').resolves(4);

  //   const result = await productsService.serviceProductsPost(produto);

  //   expect(result).to.be.deep.equal({
  //     message: [{
  //       "id": 4,
  //       "name": "ProdutoX"
  //     }] });
  // });

  it('Verifica se retorna erro ao atualizar um produto inexistente', async function () {
    sinon.stub(productsModel, 'productById').resolves([]);

    const result = await productsService.serviceProductUpdate(222, { name: "ProdutoX" });

    expect(result).to.be.deep.equal({ type: 'not found', message: 'Product not found' });
  });

  it('Verifica se é possível deletar um produto com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([2]);

    const result = await productsService.serviceProductDelete(2);

    expect(result).to.be.deep.equal({ type: null, message: [] });
  });

  it('Verifica se retorna erro ao deletar um produto inexistente', async function () {
    sinon.stub(productsModel, 'productDelete').resolves([]);

    const result = await productsService.serviceProductDelete(222);

    expect(result).to.be.deep.equal({ type: 'not found', message: 'Product not found' });
  })

  afterEach(sinon.restore);
});