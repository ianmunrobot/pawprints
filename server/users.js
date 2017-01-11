'use strict'

const db = require('APP/db')
const User = db.model('users')
const Review = db.model('reviews')

const {mustBeLoggedIn, selfOnly, forbidden, mustBeAdmin, selfOrAdmin} = require('./auth.filters')

module.exports = require('express').Router()
  //admins can get all users
  .get('/', mustBeAdmin, (req, res, next) => User.findAll()
    .then(users => res.json(users))
    .catch(next))
  //
  // //anyone can create a new user
  .post('/', (req, res, next) => User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next))

  //anyone can find reviews posted by the user
  .get('/:id/reviews', (req, res, next) => Review.findAll({
    where: {
      user_id: req.params.id
    }
  })
  .then(reviews => res.json(reviews))
  .catch(next))

  //a user can get themself, admins can get a user
  .get('/:id', selfOrAdmin('get'), (req, res, next) => User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next))

  //a user can update themself, admins can update a user
  .put('/:id', selfOrAdmin('update'), (req, res, next) => User.findById(req.params.id)
    .then(user => user.update(req.body))
    .then(updatedUser => res.json(updatedUser))
    .catch(next))

  //a user can delete themself, admins can delete a user
  .delete('/:id', selfOrAdmin('delete'), (req, res, next) => User.findById(req.params.id)
    .then(user => user.destroy())
    .then(() => res.send(202))
    .catch(next))
