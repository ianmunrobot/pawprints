const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  urlTitle: {
    type: Sequelize.STRING
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://placekitten.com/g/300/200/'
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  size: {
    type: Sequelize.STRING,
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
},
{
  hooks: {
    beforeValidate: function (product) {
      if (product.title) {
        product.urlTitle = product.title.replace(/\s+/g, '_').replace(/\W/g, '');
      }
    }
  },
})

module.exports = Product
