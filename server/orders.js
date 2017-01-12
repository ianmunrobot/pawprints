'use strict'

const db = require('APP/db')
const Order = db.model('orders')

// const {mustBeLoggedIn, selfOnly, forbidden, mustBeAdmin, selfOrAdmin} = require('./auth.filters')

module.exports = require('express').Router()
  // a user can look at all their orders
  .get('/', (req, res, next) => Order.findAll()
    .then(orders => res.json(orders))
    .catch(next))

  // a user can look at a specific order
  .get('/:id', (req, res, next) => Order.findById(req.params.id)
    .then(order => req.json(order))
    .catch(next))

  // a user can create a new order
  .post('/', (req, res, next) => Order.create(req.body)
    .then(order => res.status(201).json(user))
    .catch(next))

  // a user can update an order
  .put('/:id', (req, res, next) => Order.findById(req.params.id)
    .then(order => order.update(req.body))
    .then(updatedOrder => res.json(updatedOrder))
    .catch(next))

  // a user can remove an order
  .delete('/:id', (req, res, next) => Order.findById(req.params.id)
    .then(user => order.destroy())
    .then(() => {res.sendStatus(204)})
    .catch(next))
