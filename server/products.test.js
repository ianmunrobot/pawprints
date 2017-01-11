const request = require('supertest-as-promised')
const chai = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')
const chaiProperties = require('chai-properties');
const chaiThings = require('chai-things');
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;

describe('/api/products', () => {
  before('wait for the db', () => db.didSync)

  var option1, option2, option3
  before(() => {
    return Product.destroy({
        truncate: true,
        cascade: true,
        restartIdentity: true,
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
        restartIdentity: true,
      })
  })


  describe('when not logged in', () => {
    it('GET / returns all products', () =>
      request(app)
        .get(`/api/products`)
        .then(response => {
          expect(response.body.length).to.equal(3)
          expect(response.body).to.contain.a.thing.with('inventory', 3)
          expect(response.body).to.contain.a.thing.with('inventory', 4)
        }))


    it('GET /:id returns a single product', () =>
      request(app)
        .get(`/api/products/1`)
        .then(response => {
          expect(response.body).to.be.an('object')
          expect(response.body.id).to.equal(1)
          expect(response.body.description).to.be.equal('a very cool product')
        }))

  })

  describe('when admin', () => {
    it('PUT /:id alters a product', (req, res, next) => {
      return request(app)
        .put(`/api/products/1`)
        .then(response => {
          console.log(response)
          expect(response.body).to.be.an('object')
        })
    })
  })
})