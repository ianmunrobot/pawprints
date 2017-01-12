const Promise = require('bluebird')
const request = require('supertest-as-promised');
const chai = require('chai');
const chaiProperties = require('chai-properties')
const chaiThings = require('chai-things')
chai.use(chaiProperties)
chai.use(chaiThings)
const expect = chai.expect

const db = require('APP/db');
const Order = require('APP/db/models/order')
const Address = require('APP/db/models/address')
const LineItem = require('APP/db/models/lineItem')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('api/orders', () => {
  let testOrder,
      testAddress,
      testLineItem,
      testProduct

  before('create test orders', () => {

    testOrder = Order.create({
      status: 'shipped',
      shippingCost: 10.50,
      isGift: true,
      tax: 7.56,
      date: Date.now(),
    })

    testAddress = Address.create({
      name: 'Mr. Usery Userman',
      phone: '555-555-5555',
      streetNum: '56-12',
      streetName: 'User Lane',
      city: 'Userville',
      state: 'WA',
      zip: '34567',
    })

    testLineItem = LineItem.create({
      price: 10.50,
      quantity: 3,
    })

    testProduct = Product.create({
      title: 'Siberian Husky Print',
      imgUrl: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/siberian-husky-dog-breed-pictures/siberian-husky-dog-breed-pictures-2.jpg',
      price: 12.99,
      description: 'A majestic and interesting pup',
      size: '12" x 16"',
      tags: ['cute', 'dog', 'puppy'],
      inventory: 10,
    })

    return Promise.all([testOrder, testAddress, testLineItem, testProduct])
      .spread((order, address, lineItem, product) => {
        let addLineItem = order.addLineItem(lineItem)
        let addShipping = order.setShippingAddress(address)
        let addBilling = order.setBillingAddress(address)
        let addProduct = lineItem.setProduct(product)
        return Promise.all([addLineItem, addShipping, addBilling, addProduct])
      })
  })



  describe('for not logged in users', () => {

    it('GET / does not returns all orders', () => request(app)
      .get('/api/orders')
      .expect(401)
      .then(result => {
        // expect(result.body).to.be.an('array')
      })
    )

    it('GET /:id returns a specific order with eager loading', () => request(app)
      .get('/api/orders/1')
      .expect(200)
      .then(result => {
        expect(result.body).to.have.properties({status: 'shipped'})
        expect(result.body).to.include.keys('shippingAddress')
        expect(result.body).to.include.keys('lineItems')
      })
    )

    it('POST / a new order', () => request(app)
      .post('/api/orders')
      .expect(201)
      .then(result => {
        expect(result.body).to.be.an('object')
        expect(result.body).to.have.properties({status: 'in cart'})
      })
    )

    it('PUT /:id update an order', () => request(app)
      .put('/api/orders/1')
      .send({
        isGift: false
      })
      .expect(202)
      .then(result => {
        expect(result.body).to.have.properties({ isGift: false })
      })
    )

    it('DELETE /:id an order', () => request(app)
      .delete('/api/orders/1')
      .expect(204)
    )

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
