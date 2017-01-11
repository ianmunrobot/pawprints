const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Review = require('APP/db/models/review');
const Product = require('APP/db/models/product');
const app = require('./start')

import chai from 'chai'
import supertest from 'supertest-as-promised'

describe('/api/products/:productId/reviews', () => {
  describe('for a product', () => {
    it('GET all reviews', () => request(app)
      .get('/api/products/1/reviews')
      .expect(200)
    );
  })
  describe('for a user', () => {
    it ('GET all reviews', () => request(app)
      .get('/api/users/1/reviews')
      .expect(200)
    )
  })
    // it('POST creates a new review', () => request(app)
    //   .post('/api/products/1/reviews')
    //   .expect(201)
    // );
    // it('POST redirects to the review that was just made', () => request(app)
    //   .post('/api/products/1/reviews/1')
    //   .expect(201)
    // );
  // })
})
