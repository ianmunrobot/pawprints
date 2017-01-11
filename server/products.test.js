const db = require('APP/db')
const app = require('./start')
const Product = require('APP/db/models/product')
const User = require('APP/db/models/user')

const request = require('supertest-as-promised')
const chai = require('chai')
const chaiProperties = require('chai-properties')
const chaiThings = require('chai-things')
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const sinon = require('sinon')


describe('/api/products', () => {
  before('wait for the db', () => db.didSync)

  var option1, option2, option3, adminUser
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
    .then(result => {
      return User.create({
        firstName: 'Admin',
        lastName: 'McAdmin',
        email: 'admin@admin.com',
        isAdmin: true,
        password: 'iamadmin',
      })
      .then(createdAdmin => {
        adminUser = createdAdmin
        // console.log(adminUser);
        return adminUser
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

    it('PUT /:id is not allowed to alter a product', () => {
      return request(app)
        .put(`/api/products/1`)
        .expect(401)
    })

    it('DELETE /:id is not allowed to alter a product', () => {
      return request(app)
        .delete(`/api/products/1`)
        .expect(401)
    })

  })

  // cannot really test auth in this manner, but leaving in codebase
  // in case we can get it working in the future
  xdescribe('when admin', () => {
    beforeEach('set up mustBeAdmin spies', () => {
      const mustBeAdmin = sinon.spy()
    })

    it('PUT /:id alters a product', () => {
      return request(app)
      .post('/api/auth/local/login')
      .send({
        username: 'admin@admin.com',
        password: 'iamadmin',
      })
      .expect(302)
      .then(response => {
        return request(app)
          .put(`/api/products/1`)
          .send({
            description: 'an updated product'
          })
          .then(response => {
            expect(response.body).to.be.an('object')
          })
        })
      })

  })
})