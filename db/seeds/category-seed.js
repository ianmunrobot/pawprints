const {expect} = require('chai')
const db = require('APP/db')
const Category = require('./category')

const seedCategories = () => db.Promise.map([
  {name: 'cat'},
  {name: 'dog'},
  {name: 'rodent'},
], category=> db.model('category').create(category));

module.exports = seedCategories;