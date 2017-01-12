const request = require('supertest-as-promised');
const chai = require('chai');
const expect = chai.expect
const db = require('APP/db');
const Order = require('APP/db/models/order')
const app = require('./start')

import supertest from 'supertest-as-promised'


describe('api/orders', () => {
  describe('for not logged in users', () => {
    it('GET all orders', () => request(app)
      .get('/api/orders')
      .expect(200)
    );
    it('GET a specific order', () => request(app)
      .get('/api/orders/1')
      .expect(200)
    );
    it('POST a new order', () => request(app)
      .post('/api/orders')
      .expect(201)
    );
    it('PUT update an order', () => request(app)
      .put('/api/orders/1')
      .expect(202)
    );
    it('DELETE an order', () => request(app)
      .delete('/api/orders/1')
      .expect(204)
    );
  })
  describe('for logged in users', () => {
  //   xit("GET all of a user's orders")
  //   xit("GET can't get users orders if not logged in")
  //   xit('GET a specific order')
  //   xit("GET can't get a specific order if not logged in")
  //   xit("POST a new order")
  //   xit("POST can't create a new order to user's cart if not logged in")
  //   xit("PUT updates an order")
  //   xit("PUT can't updates an order if user isn't logged in")
  })
})
