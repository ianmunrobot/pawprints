const db = require('APP/db')

const seedArray = [
  {
    name: 'a user',
    phone: '555-555-5555',
    streetNum: '34',
    streetName: 'Big St.',
    city: 'Cool Town',
    state: 'WY',
    zip: '12345',
  },
  {
    businessName: 'The Best Business',
    phone: '555-555-5555',
    streetNum: '123',
    streetName: 'Big St.',
    city: 'Cool Town',
    state: 'WY',
    zip: '12345',
  },
  {
    name: 'Mr. Usery Userman',
    phone: '555-555-5555',
    streetNum: '56-12',
    streetName: 'User Lane',
    city: 'Userville',
    state: 'WA',
    zip: '34567',
  },
  {
    name: 'Ms. User Userstein',
    phone: '555-555-5555',
    streetNum: '17a',
    streetName: 'New User Rd.',
    city: 'Userton',
    state: 'MO',
    zip: '12354',
  },
]

const seedAddresses = () => db.Promise.map(seedArray, address => db.model('addresses').create(address))

module.exports = seedAddresses