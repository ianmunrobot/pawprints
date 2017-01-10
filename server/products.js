'use strict'

const db = require('APP/db')
const Product = db.model('products')
const router = require('express').Router()

router.get('/', (req, res, next) => {
  Product.findAll()
  .then(result => {
    console.log(result)
    console.log('~~~~~~~~~~~');
    return result
  })
  .then(res.send.bind(res))
  .catch(next)
})

module.exports = router