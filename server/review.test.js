const request = require('supertest-as-promised');
const chai = require('chai');
const expect = chai.expect

const db = require('APP/db');
const Review = require('APP/db/models/review');
const Product = require('APP/db/models/product');
const app = require('./start')

describe('/api/products/:productId/reviews', () => {
  describe('for a product', () => {
    it('GET all reviews', () => request(app)
      .get('/api/products/1/reviews')
      .expect(200)
    );
    xit('POST creates a new review when user is logged in', () => request(app)
      .post('/api/products/1/reviews')
      .expect(201)
    );
    xit('POST redirects to the review that was just made when user is logged in', () => request(app)
      .post('/api/products/1/reviews/1')
      .expect(201)
    );
  })
})

describe('/api/users/:userId/reviews', () => {
  describe('for a user', () => {
    it ('GET all reviews', () => request(app)
      .get('/api/users/1/reviews')
      .expect(200)
    )
  })
})
