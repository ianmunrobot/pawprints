'use strict'

const db = require('APP/db')
const Order = require('./order')
const Product = require('./product')

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect

describe('Order', () => {
  before('wait for the db', () => db.didSync)

  describe('validations', () => {

    var order;
    beforeEach(() => {
      order = Order.build({
        user: '1',
        products: [],
        status: 'in cart',
      })
    })

    it('must have a valid status', () => {
      order.status = 'status'
      let testPromise = order.save()
        // does it throw an error
        .then(result => {

        })
        .catch(err => {
          return err.message.split('\n')[0]
        })
      return expect(testPromise).to.eventually.be.equal('ERROR:  invalid input value for enum enum_orders_status: "status"')
    })

  })

  describe('Instance Methods', () => {
    var order;
    var testProduct;
    beforeEach(() => {
      return Order.create()
      .then(createdOrder => {
        order = createdOrder
      })
      .then(() => {
        return Product.create({
          title: 'order model testing product',
          description: 'a very cool product',
          price: 2.50,
          inventory: 3,
          category: ['cat'],
        })
        .then(created => {
          testProduct = created
        })
      })

    })

    describe('addToOrder', () => {

      it(`should fail if status is not 'in cart'`, () => {
        order.status='placed'
        let updatedOrder = order.addToOrder(testProduct)
        expect(updatedOrder.products).to.deep.equal([])
      })

      it(`adds the correct item and current price to the order`, () => {
        let updatedOrder = order.addToOrder(testProduct).save()
        .then(result => {
          return result.products[0]
        })
        return expect(updatedOrder).to.eventually.haveOwnProperty('price')
      })
    })

    describe('placeOrder', () => {
      beforeEach('invoke the function', () => {
        order.placeOrder()
      })

      it('changes order status once placed', () => {
        expect(order.status).to.equal('placed')
      })

      it('sets the current date', () => {
        let testDate = Date.now();
        // ensure that order.date happened before this test
        expect(order.date).to.be.at.most(testDate)
      })
    })

    describe('calculateTax', () => {
      it('calculates the right tax', () => {
        order.addToOrder(testProduct)
        order.calculateTax()
        expect(order.tax).to.be.equal(0.22);
      })

    })

  })
})