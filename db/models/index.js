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

// M-M relationship between categories and Products
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
LineItem.belongsTo(Order);
LineItem.belongsTo(Product);


// associate multiple rows as size options for each product
Product.belongsToMany(Product, {
  through: 'options',
  as: 'options'
})

// reviews must belong to product and user
Review.belongsTo(Product)
Product.hasMany(Review)
Review.belongsTo(User)

// Address can/should be associated with user when logged in
Address.belongsTo(User)
User.hasMany(Address)

module.exports = {
  User,
  Product,
  Category,
  Order,
  Address,
  Review,
  LineItem
}