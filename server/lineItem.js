'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const LineItem = db.model('lineItems')
const Address = db.model('addresses')

module.exports = require('express').Router()
  // auth filter - will only allow lineItem edits if order
  // router has already verified user and added order to
  // req object
  .use('/', (req, res, next) => {
    if (req.order) {
      next()
    } else {
      res.sendStatus(401)
    }
  })

  // add an item to an order
  .post('/:productId', (req, res, next) => {
    let val = +req.body.quantity
    LineItem.create({
      quantity: val,
      product_id: +req.params.productId,
      user_id: req.body.user_id,
    },
    {
      include: ['product']
    })
    .then(res.send.bind(res))
    .catch(next)
  })


  // update an order item quantity
  .put('/:itemId', (req, res, next) => {
    LineItem.update(req.body, {
      where: {
        id: req.params.itemId
      },
      returning: true,
    })
    .then(result => result[1][0])
    .then(res.send.bind(res))
    .catch(next)
  })

  // delete an order item
  .delete('/:itemId', (req, res, next) => {
    LineItem.destroy({
      where: {
        id: req.params.itemId
      }
    })
    .then(() => res.sendStatus(204))
    .catch(next)
  })