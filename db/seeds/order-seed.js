const db = require('APP/db')

const {productsNum} = require('./product-seed')
const {usersNum} = require('./user-seed')

const seedArray = [
  {
    status: 'in cart',
    user_id: 1,
    date: Date.now(),
  },
  {
    status: 'shipped',
    shippingCost: 10.50,
    isGift: true,
    tax: 7.56,
    user_id: 2,
    date: Date.now(),
  },
  {
    status: 'delivered',
    shippingCost: 30.54,
    isGift: false,
    tax: 10.43,
    user_id: 3,
    date: Date.now() - 15000,
  },
  {
    status: 'in cart',
    isGift: false,
    user_id: 4,
    date: Date.now(),
  },
  {
    status: 'in cart',
    user_id: 5,
    date: Date.now() + 1000,
  },
  {
    status: 'placed',
    shippingCost: 0.00,
    tax: 5.43,
    user_id: Math.floor(Math.random() * 5) + 1,
    date: Date.now(),
  },
]

const seedOrders = () => db.Promise.map(seedArray, order => db.model('orders').create(order))

module.exports = {
  seedOrders,
  ordersNum: seedArray.length
}
