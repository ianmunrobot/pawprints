'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const Address = require('./address')

const TAX_RATE = 0.0875

const Order = db.define('orders', {
  status: {
    type: Sequelize.ENUM('in cart', 'placed', 'shipped', 'delivered', 'returned'),
    defaultValue: 'in cart'
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
    type: Sequelize.BIGINT
  },
  isGift: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
},
{
  instanceMethods: {
    placeOrder: function() {
      if (this.status === 'in cart') {
        // TODO: must process CC info, etc here
        // EI: ^^ can wait until you integrate Stripe API to deal with payment info; see the "Checkout" bullet point in the workshop's section on Unauthenticated Users
        this.date = Date.now();
        this.status = 'placed';
      }
      return this
    },
    calculateTax: function() {
      let taxTotal = 0.0
      this.products.map(singleProduct => {
        taxTotal += singleProduct.price * TAX_RATE
      })
      this.tax = Math.round(taxTotal * 100) / 100
      return this
    }
  }
})



module.exports = Order
