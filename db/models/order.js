'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const Address = require('./address')

const TAX_RATE = 0.0875

const Order = db.define('orders', {
  user: {
    type: Sequelize.STRING
  },
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
{
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

// associate with a shipping and building address from DB
// Order.belongsTo(Address, {as: 'shippingAddress'})
// Order.belongsTo(Address, {as: 'billingAddress'})

module.exports = Order