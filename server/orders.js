'use strict'

const db = require('APP/db')
const Order = db.model('orders')

const {mustBeLoggedIn, selfOnly, forbidden, mustBeAdmin, selfOrAdmin} = require('./auth.filters')

module.exports = require('express').Router()
  .param('orderId', (req, res, next, id) => {
    if (true)
      Order.findById(id, {
        include: [{ all: true }]
      })
      .then(foundOrder => {
        req.order = foundOrder
        next()
      })
      .catch(next)
    else {
      Order.findById(id, {
        include: [{ all: true }],
        where: {
          id: req.user.id,
        },
      })
      .then(foundOrder => {
        req.order = foundOrder
        next()
      })
      .catch(next)
    }
  })

  // an admin can retrieve all orders
  .get('/', mustBeAdmin, (req, res, next) =>
    Order.findAll({
      include: [{ all: true }]
    })
    .then(orders => res.json(orders))
    .catch(next))

  // a logged-in user can look at a specific order
  .get('/:orderId', (req, res, next) => {
      res.send(req.order)
    })

  // any user can create a new order
  .post('/', (req, res, next) => Order.create(req.body)
    .then(order => res.status(201).json(order))
    .catch(next))

  // a user can update an order
  .put('/:orderId', (req, res, next) => {
      req.order.update(req.body)
      .then(updatedOrder => res.status(202).json(updatedOrder))
      .catch(next)
  })

  // a user can remove an order
  .delete('/:orderId', (req, res, next) => {
    req.order.destroy()
    .then(() => {res.sendStatus(204)})
    .catch(next)})
