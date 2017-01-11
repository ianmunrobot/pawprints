const Sequelize = require('sequelize')
const db = require('APP/db')
const Product = require('./product')


const Category = db.define('categories', {
	name: Sequelize.STRING
});



module.exports = Category