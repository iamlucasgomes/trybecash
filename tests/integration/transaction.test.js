const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect, use } = require('chai');
const app = require('../../src/app/app');

use(chaiHttp);

describe('Endpoints transactions /people/:peopleId/transactions', function () {
  it('POST - Insere uma nova transaction', async function () {
    const response = await chai.request(app)
      .post('/people/1/transactions')
      .send(
        {
          name: 'Sabre de Luz',
          description: 'Ferramenta de trabalho',
          price: '1000.00',
          type: 2,
        },
      );

    expect(response.status).to.equal(201);
    expect(response.body).to.deep.equal({
      message: 'Transação cadastrada com sucesso',
    });
  });
});