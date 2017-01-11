'use strict'

const db = require('APP/db')
const Product = db.model('products')
const router = require('express').Router()

// get all products
router.get('/', (req, res, next) => {
  Product.findAll()
  .then(res.send.bind(res))
  .catch(next)
})

// get product by id
router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
  .then(res.send.bind(res))
  .catch(next)
})

// update product
router.put('/:id', (req, res, next) => {
  if (req.user.isAdmin) {
    Product.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true,
    })
    .then(response => response[1])
    .then(res.send.bind(res))
    .catch(next)
  } else {
    res.sendStatus(403)
  }
})



module.exports = router