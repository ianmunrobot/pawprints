'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  user: {
    type: Sequelize.STRING
  },
  products: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  },
  status: {
    type: Sequelize.ENUM('in cart', 'placed', 'shipped', 'delivered', 'returned')
  },
  tax: {
    type: Sequelize.DECIMAL(10, 2)
  },
  shippingCost: {
    type: Sequelize.DECIMAL(10, 2)
  },
  shippingType: {
    type: Sequelize.ENUM('')
  },
  date: {
    // will store # of milliseconds in js Date() style
    type: Sequelize.INTEGER
  },
  isGift: {
    type: Sequelize.BOOLEAN
  }
},
{
  instanceMethods: {
    addToOrder: (product) => {
      if (this.status === 'in cart') {
        let currentProducts = this.products.map(singleProduct => {
          return JSON.parse(singleProduct)
        })
        currentProducts.push(product)
        this.products = currentProducts.map(singleProduct => {
          return JSON.stringify(singleProduct)
        })
      }

      return this
    }
  }
})

// associate with a shipping and building address from DB
// Order.belongsTo('address', {as: 'shippingAddress'})
// Order.belongsTo('address', {as: 'billingAddress'})

module.exports = Order