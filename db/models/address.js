const Sequelize = require('sequelize')
const db = require('APP/db')

const Address = db.define('address', {
  name: Sequelize.STRING,
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isValidPhoneNumber: function(value) {
        if (!value) {
          return value
        }
        const regex = /^[2-9]\d{2}-\d{3}-\d{4}$/;
        if (!regex.test(value)) {
          throw new Error('Invalid Phone Number');
        }
        return value;
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
  state: {
    type: Sequelize.ENUM('AK', 'AL', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'),
    allowNull: false
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isValidZip: function(value) {
        if (!value || value.length === 5) return value;
        throw new Error('Invalid Zip');
      }
    }
  },
}, {
  validate: {
    nameOrBusinessName: function() {
      if ((this.name === null) && (this.businessName === null)) {
        throw new Error('Require either name or businessName')
      }
    }
  }
});

module.exports = Address;

