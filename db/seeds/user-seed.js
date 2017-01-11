const db = require('APP/db')

const seedArray = [
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
]

const seedUsers = () => db.Promise.map(seedArray, user => db.model('users').create(user))

module.exports = {
  seedUsers,
  usersNum: seedArray.length
}