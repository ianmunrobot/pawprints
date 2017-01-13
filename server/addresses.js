'use strict'

const db = require('APP/db')
const Address = db.model('addresses')

const {mustBeLoggedIn, selfOnly, forbidden, mustBeAdmin, selfOrAdmin} = require('./auth.filters')

module.exports = require('express').Router()
  // admins can get all addresses
  .get(`/`, mustBeAdmin, (req, res, next) => {
    Address.findAll()
      .then(res.send.bind(res))
      .catch(next)
  })

  // all users can add an address
  .post(`/`, (req, res, next) => {
    Address.findOrCreate({
      where: req.body
    })
      .then(created => created[0])
      .then(createdAddress => {
        res.status(201).send(createdAddress)
      })
      .catch(next)
  })

  // logged in or admin can get their own addresses
  .get(`/:id`, mustBeLoggedIn, (req, res, next) => {
    if (req.user.isAdmin) {
      Address.findById(req.params.id, {
        where: {
          user_id: req.body.id
        }
      })
        .then(res.send.bind(res))
        .catch(next)
    } else {
      Address.findById(req.params.id)
        .then(res.send.bind(res))
        .catch(next)
    }
  })

  // logged in or admin can edit an address
  .put(`/:id`, mustBeLoggedIn, (req, res, next) => {
    if (req.user.isAdmin) {
      Address.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      })
      .then(result => result[1][0])
      .then(res.send.bind(res))
      .catch(next)
    } else {
      Address.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.body.id
        },
        returning: true,
      })
      .then(result => result[1][0])
      .then(res.send.bind(res))
      .catch(next)
    }
  })

  // logged in or admin can delete an address that belongs to them
  .delete(`/:id`, mustBeLoggedIn, (req, res, next) => {
    if (req.user.isAdmin) {
      Address.destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(result => res.sendStatus(200))
      .catch(next)
    } else {
      Address.destroy({
        where: {
          id: req.params.id,
          user_id: req.user.id
        },
      })
      .then(result => res.sendStatus(200))
      .catch(next)
    }
  })