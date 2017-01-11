const db = require('APP/db')

const {productsNum} = require('./product-seed')
const {usersNum} = require('./user-seed')

const seedOrders = () => db.Promise.map([
  {
    status: 'in cart',
  },
  {
    status: 'shipped',
    shippingCost: 10.50,
    isGift: true,
    tax: 7.56,
  },
  {
    status: 'delivered',
    shippingCost: 30.54,
    isGift: false,
    tax: 10.43,
  },
  {
    status: 'in cart',
    isGift: false,
  },
  {
    status: 'placed',
    shippingCost: 0.00,
    tax: 5.43,
  },
], order => {
  return db.model('orders').create(order)
    .then(createdOrder => {
      // TODO: populate with created addresses
      // let addShipping = createdOrder.setShippingAddress()
      // let addBilling = createdOrder.setBillingAddress()
      // return Promise.all([addShipping, addBilling])
      return createdOrder
    })
    .then(updatedOrder => {

    })
});

module.exports = seedOrders