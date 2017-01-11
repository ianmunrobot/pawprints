const Sequelize = require('sequelize')
const db = require('APP/db')
const Order = require('./order')
const Product = require('./product')


const LineItem = db.define('lineItem', {

  price: Sequelize.FLOAT,
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

});



module.exports = LineItem;
