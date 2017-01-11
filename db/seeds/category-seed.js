const {expect} = require('chai')
const db = require('APP/db')

const seedCategories = () => db.Promise.map([
  {name: 'cat'},
  {name: 'dog'},
  {name: 'rodent'},
], category=> db.model('categories').create(category));

module.exports = seedCategories;