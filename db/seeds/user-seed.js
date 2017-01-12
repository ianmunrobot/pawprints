const db = require('APP/db')

const seedArray = [
  {
    firstName: 'so',
    lastName: 'many',
    email: 'god@example.com',
    password: '1234',
  },
  {
    firstName: 'barack',
    lastName: 'obama',
    email: 'potus@us.gov',
    password: '44',
  },
  {
    firstName: 'Admin',
    lastName: 'McAdmin',
    email: 'admin@pawprints.com',
    password: 'password',
    isAdmin: true,
  },
  {
    firstName: 'Lowly',
    lastName: 'PeonWorker',
    email: 'grunt@pawprints.com',
    password: 'puppiezRcute',
  },
  {
    firstName: 'Kitty',
    lastName: 'Superfan',
    email: 'meowz4lyfe@cats4eva.edu',
    password: 'dog',
  }
]

const seedUsers = () => db.Promise.map(seedArray, user => db.model('users').create(user))

module.exports = {
  seedUsers,
  usersNum: seedArray.length
}