'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Product = require('./product')
const Category = require('./categories')
const Review = require('./review')

Product.belongsToMany(Category, {through: 'productsCategories'})
Category.belongsToMany(Product, {through: 'productsCategories'})
Review.belongsTo(Product)
Review.belongsTo(User)
module.exports = {User, Product, Category, Review}
