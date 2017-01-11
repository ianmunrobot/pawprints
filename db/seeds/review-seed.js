const db = require('APP/db')

const {productsNum} = require('./product-seed')
const {usersNum} = require('./user-seed')

const seedReviews = () => db.Promise.map([
  {
    title: 'GREAT PRODUCT!!',
    message: `This print was a great value\nI can't wait to order many many more hooray!`,
    rating: 1
  },
  {
    title: `would not order again`,
    message: `I loved it`,
    rating: 5
  },
  {
    title: `One Star`,
    message: `Very good. 4 stars`,
    rating: 1
  },
  {
    title: `So cute`,
    message: `That's all. Cute`,
    rating: 4
  },
  {
    title: `'I've seen cuter`,
    message: `dogs`,
    rating: 3
  },
], review => {
  return db.model('reviews').create(review)
    .then(createdReview => {
      let productId = Math.ceil(Math.random() * productsNum)
      return createdReview.setProduct(productId)
    })
    .then(updatedReview => {
      let userId = Math.ceil(Math.random() * usersNum)
      return updatedReview.setUser(userId)
    })

});

module.exports = seedReviews