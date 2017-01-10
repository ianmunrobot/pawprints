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
    beforeEach(() => {
      order = Order.build()
    })

    describe('addToOrder', () => {
      var testProduct;
      beforeEach(() => {
        testProduct = Product.build({
          title: 'A testing product',
          description: 'a very cool product',
          price: 2.50,
          inventory: 3,
          category: ['cat'],
        })
      })

      it(`should fail if status is not 'in cart'`, () => {
        let updatedOrder = order.addToOrder(testProduct)
        expect(updatedOrder).to.deep.equal(order)
      })

      it(`adds the correct item and current price to the order`, () => {

      })


    })
  })
})