const Sequelize = require('sequelize')
const db = require('APP/db')
const Order = require('./order')
const Product = require('./product')


const LineItem = db.define('lineItem', {

  price: Sequelize.FLOAT,
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

});



module.exports = LineItem;
