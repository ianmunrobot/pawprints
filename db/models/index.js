'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Product = require('./product')
const Category = require('./categories')
const Order = require('./order')
const Address = require('./address')
const Review = require('./review')

const LineItem = require('./lineItem')

Product.belongsToMany(Category, {
  through: 'productsCategories'
})
Category.belongsToMany(Product, {
  through: 'productsCategories'
})

// associate with a shipping and building address from DB
Order.belongsTo(Address, {
  as: 'shippingAddress'
})
Order.belongsTo(Address, {
  as: 'billingAddress'
})

//associate products and orders through line items
Order.hasMany(LineItem);
LineItem.belongsTo(Product);


// associate multiple rows as size options for each product
Product.belongsToMany(Product, {
  through: 'options',
  as: 'options'
})

Review.belongsTo(Product)
Review.belongsTo(User)

module.exports = {
  User,
  Product,
  Category,
  Order,
  Address,
  Review,
  LineItem
}