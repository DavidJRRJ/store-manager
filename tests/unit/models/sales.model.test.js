const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/connection');
const { salesModel } = require('../../../src/models');
const { salesAll, salesId } = require('./mocks/sales.mock');

const { expect } = chai;

describe('Testes unitários da camada model de /sales', function () {
  it('Verifica se é retornado todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([salesAll]);

    const result = await salesModel.salesGetAll();

    expect(result).to.be.deep.equal(salesAll);
  });

  it('Verifica se é retornado uma venda por id', async function () {
    sinon.stub(connection, 'execute').resolves([salesId]);

    const result = await salesModel.salesGetId(1);

    expect(result).to.be.deep.equal(salesId);
  })

  afterEach(sinon.restore);
});