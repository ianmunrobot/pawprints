const db = require('APP/db')

const {productsNum} = require('./product-seed')
const {usersNum} = require('./user-seed')
const {ordersNum} = require('./order-seed')

const randomQuantity = () => Math.ceil(Math.random() * 10)
const randomPrice = () => Math.round(Math.random() * 10000) / 100;

const seedArray = new Array(12).fill(0).map(item => {
  return {
    price: randomPrice(),
    quantity: randomQuantity(),
  }
})

const seedLineItems = () => db.Promise.map(seedArray, review => {
  return db.model('lineItems').create(review)
    .then(createdLineItem => {
      let productId = Math.ceil(Math.random() * productsNum)
      return createdLineItem.setProduct(productId)
    })
    .then(updatedLineItem => {
      let orderId = Math.ceil(Math.random() * ordersNum)
      return updatedLineItem.setOrder(orderId)
    })

});

module.exports = seedLineItems