const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/products', () => {
  describe('when not logged in', () => {
    it('GET returns all products', () => {
      request(app)
        .get(`/api/products`)
        .then(result => {
          console.log(result)
        })
    })

  })

  describe('when admin', () => {

  })
})