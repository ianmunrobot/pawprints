
'use strict';

const db = require('APP/db');
const LineItem = require('./lineItem');
const {expect} = require('chai');

describe('LineItem', () => {
  before('wait for the db sync', () => db.didSync);

  describe('validates', () => {
    var lineItem;
    beforeEach(() => {
      lineItem = LineItem.build({
        price: 3.40,
        inventory: 4
      });
    });

    it('rejects a null quantity count', () => {
      lineItem.quantity = null;
      return lineItem.save()
        .then(result => {
          throw new Error('Accepted incorrect input')
        },
          err => expect(err.message).to.be.equal('notNull Violation: quantity cannot be null')
      );
    });

  });
});

