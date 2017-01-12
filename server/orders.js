'use strict'

const db = require('APP/db')
const Order = db.model('orders')

const {mustBeLoggedIn, selfOnly, forbidden, mustBeAdmin, selfOrAdmin} = require('./auth.filters')

module.exports = require('express').Router()
  // an admin can retrieve all orders
  .get('/', mustBeAdmin, (req, res, next) =>
    Order.findAll({
      include: [{ all: true }]
    })
    .then(orders => res.json(orders))
    .catch(next))

  // a logged-in user can look at a specific order
  .get('/:id', (req, res, next) =>
    Order.findById(req.params.id, {
      include: [{ all: true }]
    })
    .then(order => res.json(order))
    .catch(next))

  // any user can create a new order
  .post('/', (req, res, next) => Order.create(req.body)
    .then(order => res.status(201).json(order))
    .catch(next))

  // a user can update an order
  .put('/:id', (req, res, next) => Order.findById(req.params.id)
    .then(order => order.update(req.body))
    .then(updatedOrder => res.status(202).json(updatedOrder))
    .catch(next))

  // a user can remove an order
  .delete('/:id', (req, res, next) => Order.findById(req.params.id)
    .then(order => order.destroy())
    .then(() => {res.sendStatus(204)})
    .catch(next))
