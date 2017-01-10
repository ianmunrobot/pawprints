'use strict'

const db = require('APP/db')
const Product = db.model('products')
const router = require('express').Router()

router.use('/', (req, res, next) => {
  Product.findAll()
  .then(res.send.bind(res))
  .catch(next)
})