'use strict';

const db = require('APP/db');
const Address = require('./address');
const {expect} = require('chai');

describe('Address', () => {
  before('wait for the db sync', () => db.didSync);

  describe('validates', () => {
    var address;
    beforeEach(() => {
      address = Address.build({
        name: "Jimmy DiColandrea",
        phone: "347-255-6257",
        businessName: "Jimmy's Jellybeans",
        streetNum: "60-24",
        streetName: "Woodbine St.",
        apartment: "3",
        city: "Ridgewood",
        state: "NY",
        zip: "11385"
      });
    });

    it('requires a name and/or a business', () => {
      address.name = null;
      address.businessName = null;
      return address.save()
        .then(result => {
          return expect(result).to.be.null;
        })
        .catch(err => {
          return expect(err.message).to.be.equal('Validation error: Require either name or businessName');
        })
        .then(() => {
          address.name = "Jimmy";
          return address.save();
        })
        .then(result => {
          expect(result.businessName).to.be.null;
          expect(result.name).to.equal('Jimmy');
        })
        .then(() => {
          address.name = null;
          address.businessName = "Jimmy's JuJubeans";
          return address.save();
        })
        .then(result => {
          expect(result.name).to.be.null
          expect(result.businessName).to.equal("Jimmy's JuJubeans");
        });
    });

    it('rejects a null phone number', () => {
      address.phone = null;
      return address.save()
        .then(result => {
          throw new Error('Accepted incorrect input')
        },
          err => expect(err.message).to.be.equal('notNull Violation: phone cannot be null')
      );
    });
    it('rejects an invalid phone number', () => {
      address.phone = "8029991234";
      return address.save()
        .then(result => {
          throw new Error('Accepted incorrect input')
        }, err => expect(err.message).to.be.equal('Validation error: Invalid Phone Number')
      );
    });

    it('requires a streetNum', () => {
      address.streetNum = null;
      return address.save()
        .then(result => {
          return expect(result).to.be.null;
        })
        .catch(err => {
          return expect(err.message).to.be.equal('notNull Violation: streetNum cannot be null');
        })
    });

    it('requires a streetName', () => {
      address.streetName = null;
      return address.save()
        .then(result => {
          return expect(result).to.be.null;
        })
        .catch(err => {
          return expect(err.message).to.be.equal('notNull Violation: streetName cannot be null');
        })
    });

    it('requires a city', () => {
      address.city = null;
      return address.save()
        .then(result => {
          return expect(result).to.be.null;
        })
        .catch(err => {
          return expect(err.message).to.be.equal('notNull Violation: city cannot be null');
        })
    });

    it('requires a valid state', () => {
      address.state = null;
      return address.save()
        .then(result => {
          throw new Error('Accepted null input');
        })
        .catch(err => expect(err.message).to.be.equal('notNull Violation: state cannot be null')
      )
        .then(() => {
          address.state = "ZZ";
          return address.save();
        })
        .then(result => {
          throw new Error('Accepted incorrect input');
        })
        .catch(err => {
          if (err.message === 'Accepted incorrect input' || err.message === 'Accepted null input')
            return err;
          else return expect(err.message.slice(0, 36)).to.be.equal('ERROR:  invalid input value for enum');
        });
    });

    it('rejects a null zip', () => {
      address.zip = null;
      return address.save()
        .then(result => {
          throw new Error('Accepted null input');
        }, err => expect(err.message).to.be.equal('notNull Violation: zip cannot be null')
      );
    });
    it('rejects an invalid zip', () => {
      address.zip = "123456";
      return address.save()
        .then(result => {
          throw new Error('Accepted incorrect input')
        }, err => expect(err.message).to.be.equal('Validation error: Invalid Zip')
      );
    });
  });
});
