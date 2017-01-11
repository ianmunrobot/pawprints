'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Product = require('./product')
const Category = require('./categories')
const Order = require('./order')
const Address = require('./address')

Product.belongsToMany(Category, {through: 'productsCategories'})
Category.belongsToMany(Product, {through: 'productsCategories'})

// EI: this is a small thing, but it's have all associations in this one file so it's easy to look them over.

// associate with a shipping and building address from DB
Order.belongsTo(Address, {as: 'shippingAddress'})
Order.belongsTo(Address, {as: 'billingAddress'})

// associate multiple rows as size options for each product
Product.belongsToMany(Product, {through: 'options', as: 'options'})

// EI: associate Order and Product?

module.exports = {User, Product, Category}
