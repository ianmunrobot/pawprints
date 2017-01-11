const db = require('APP/db')

const {seedUsers} = require('./seeds/user-seed')
const {seedProducts} = require('./seeds/product-seed')
const seedCategories = require('./seeds/category-seed')
const seedReviews = require('./seeds/review-seed')
const seedOrders = require('./seeds/order-seed')
const seedAddresses = require('./seeds/address-seed')

db.didSync
  .then(() => db.sync({force: true}))
  // repeat these two lines to seed and log new rows
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  // categories must be seeded before products
  .then(seedCategories)
  .then(categories => console.log(`Seeded ${categories.length} categories OK`))

  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))

  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))

  .then(seedAddresses)
  .then(addresses => console.log(`Seeded ${addresses.length} addresses OK`))

  .then(seedOrders)
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))

  .catch(error => console.error(error))
  .finally(() => db.close())
