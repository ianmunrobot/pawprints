'use strict'

const db = require('APP/db')
const Product = db.model('product')
const router = require('express').Router()

router.get('/', (req, res, next) => {
  Product.findAll()
  .then(res.send.bind(res))
  .catch(next)
})

module.exports = router