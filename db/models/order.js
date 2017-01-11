'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const Address = require('./address')

const TAX_RATE = 0.0875

const Order = db.define('orders', {
  user: {
    type: Sequelize.STRING
  },
  // EI: line item model?
  products: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: []
  },
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
    type: Sequelize.INTEGER
  },
  isGift: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
},
{ // EI: associating Order and Product (or Line Item) will give you a lot of these methods
  instanceMethods: {
    addToOrder: function(product, amount = 1) {
      if (this.status === 'in cart') {
        let newProduct = {
          price: product.price,
          amount: amount,
          id: product.id
        }
        this.products.push(newProduct)
      }
      return this
    },
    changeProductAmount: function(product, amount = 0) {
      if (this.status === 'in cart') {
        this.products = this.products.map(singleProduct => {
          if (singleProduct.id === product.id) {
            singleProduct.amount += amount
          }
        })
        .filter(singleProduct => {
          return singleProduct.amount > 0
        })
      }
      return this
    },
    removeProductFromOrder: function(product) {
      if (this.status === 'in cart') {
        this.products = this.products.filter(singleProduct => {
          return this.product.id !== product.id
        })
      }
      return this
    },
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
