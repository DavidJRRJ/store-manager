const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/connection');
const { productsModel } = require('../../../src/models');
const { productsMock, productUpdate } = require('./mocks/products.model.mock');

const { expect } = chai;

const insertMock = {
  name: 'Tadalafila'
}

describe('Testes unitários da camada model de /products', function () {
  it('Verifica se é retornado todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productsMock]);

    const result = await productsModel.productAll();

    expect(result).to.be.deep.equal(productsMock);
  });

  // it('Verifica se é retornado por id específico', async function () {
  //   sinon.stub(connection, 'execute').resolves([[productsMock[1]]]);

  //   const result = await productsModel.productById(1);

  //   expect(result).to.be.deep.equal(productsMock[1]);
  // });

  it('Verifica a função de cadastrar um produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 10 }]);

    const result = await productsModel.productPost(insertMock);

    expect(result).to.be.deep.equal(10);
  });

  it('Verifica se é possível atualizar um produto', async function () {
    sinon.stub(connection, 'execute').resolves(productUpdate);

    const result = await productsModel.productUpdate(1, 'Martelo do Chapolin');

    expect(result[0].affectedRows).to.be.equal(1);
    expect(result[0].changedRows).to.be.equal(1);
  });

  it('Verifica se é possível deletar um produto', async function () {
    sinon.stub(connection, 'execute').resolves(productUpdate);

    const result = await productsModel.productDelete(1);

    expect(result[0].affectedRows).to.be.equal(1);
    expect(result[0].changedRows).to.be.equal(1);
  })

  afterEach(sinon.restore);
});
