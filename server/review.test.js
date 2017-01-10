const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Review = require('APP/db/models/review');
const Product = require('APP/db/models/product');

describe('/api/products/:productId/reviews', () => {
  describe('for a product', () => {
    it('GETs all reviews', () => {});
    it('POST creates a new review', () => {});
    it('POST redirects to the review that was just made', () => {})
  })
});

describe('/api/products/:productId/reviews/:reviewId', () => {
  describe('for a specific product review', () => {
    it('PUT updates a review in the database', () => {});
    it('PUT redirects to the review that was just updated')
  })
});
