const Sequelize = require('sequelize')
const db = require('APP/db')

const Address = db.define('address', {
  name: Sequelize.STRING,
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isValidPhoneNumber: function(value) {
        if (!value) {return value}
        const regex = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/
        if (!regex.test(value)) {throw new Error('Invalid Phone Number')}
        return value
      }
    }
  },
  businessName: Sequelize.STRING,
  streetNum: {
    type: Sequelize.STRING,
    allowNull: false
  },
  streetName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  apartment: Sequelize.STRING,
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // state: {
  //   Sequelize.ENUM,
  //   allowNull: false
  // },
  zip: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = Address
