const db = require('APP/db')

const {productsNum} = require('./product-seed')
const {usersNum} = require('./user-seed')

const seedArray = [
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
    status: 'in cart',
  },
  {
    status: 'placed',
    shippingCost: 0.00,
    tax: 5.43,
  },
]

const seedOrders = () => db.Promise.map(seedArray, order => db.model('orders').create(order))

module.exports = {
  seedOrders,
  ordersNum: seedArray.length
}
