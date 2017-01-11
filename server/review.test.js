const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Review = require('APP/db/models/review');
const Product = require('APP/db/models/product');
const app = require('./start')

describe('/api/products/:productId/reviews', () => {
  describe('for a product', () => {
    it('GETs all reviews', () => {
      request(app)
        .get('/api/products/1/reviews')
        .expect(200)
    });
    it('POST creates a new review', () => {
      request(app)
        .post('/api/products/1/reviews')
        .expect(201)
    });
    it('POST redirects to the review that was just made', () => {
      request(app)
        .post('/api/products/1/reviews/1')
        .expect(201)
    })
  })
});

describe('/api/products/:productId/reviews/:reviewId', () => {
  describe('for a specific product review', () => {
    it('PUT updates a review in the database', () => {
      request(app)
        .post('/api/products/1/reviews/1')
        .expect(202)
    });
    it('PUT redirects to the review that was just updated', () => {
      request(app)
        .post('/api/products/1/reviews/1')
        .expect(202)
    })
  })
});
