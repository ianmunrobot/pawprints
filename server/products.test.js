const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/products', () => {
  before('wait for the db', () => db.didSync)

  var option1, option2, option3
  before(() => {
    return Product.destroy({
        truncate: true,
        cascade: true,
      })
    .then(() => {
      option1 = Product.build({
        title: 'product routes test 1',
        description: 'a very cool product',
        price: 2.50,
        inventory: 3,
      })
      option2 = Product.build({
        title: 'product routes test 2',
        description: 'a very cool product',
        price: 2.50,
        inventory: 4,
      })
      option3 = Product.build({
        title: 'product routes test 3',
        description: 'a very cool product',
        price: 2.50,
        inventory: 1,
      })

      return Promise.all([option1.save(), option2.save(), option3.save()])
      .then(values => {
        return values[0].setOptions([option2, option3])
      })
    })
  })

  after(() => {
    return Product.truncate(
      {
        truncate: true,
        cascade: true,
      })
  })


  describe('when not logged in', () => {
    it('GET / returns all products', () => {
      request(app)
        .get(`/api/products`)
        .then(response => {
          console.log(response);
          expect(response.body.length).to.equal(3)
        })
    })

    it('GET /:id returns a single product', () => {
      request(app)
        .get(`api/products/`)
    })

  })

  describe('when admin', () => {

  })
})