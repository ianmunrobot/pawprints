'use strict'
const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('reviews', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      notEmpty: true
    }
  },
  rating: Sequelize.INTEGER,
  likes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
}, {
  hooks: {
    beforeValidate: function(review) {
      if (review.rating < 1) {
        review.rating = 1
      }
      else if (review.rating > 5) {
        review.rating = 5
      }
    }
  }
})

module.exports = Review
