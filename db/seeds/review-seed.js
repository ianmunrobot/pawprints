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
  },{
    title: `Cute! Cute! Cute!`,
    message: `And cuter!`,
    rating: 5
  },{
    title: `You call this a canvas?`,
    message: `Spend a few more dollars on your material. I could have made this with my 5 year old!`,
    rating: 1
  },{
    title: `OMG!!!`,
    message: `OMG, these animals are soooooooooo totally adorbz!! LOL Totally luvd it!!!`,
    rating: 5
  }, {
    title: `Ugh`,
    message: `These are some fugly canvases`,
    rating: 2
  }, {
    title: `Ehh, it's okay...`,
    message: `You get what you pay for.`,
    rating: 3
  }, {
    title: `My daughter loves it!`,
    message: `I bought some to hang in her room and she loves it. Proud Mama!`,
    rating: 4
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