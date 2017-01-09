const {expect} = require('chai')
const db = require('APP/db')
const Product = require('./product');

describe('Product', () => {
  before('wait for the db', () => db.didSync)

  describe('authenticates', () => {

    var product;
    beforeEach(() => {
      product = Product.build({
        title: 'A testing product',
        description: 'a very cool product',
        price: 2.50,
        inventory: 3,
        category: ['cat'],
      })
    })


    it('requires at least one category', () => {
      product.category = null
      product.save()
        .then(result => {
          expect(result).to.be.null
        })
        .catch(result => {
          expect(result).to.not.be.null;
        })
    })

    it('has the correct title', () => {
      expect(product.title).to.be.equal('A testing product');
    })

    it('requires a non-empty description', () => {
      product.description = '';
      product.save()
      .then(result => {
        expect(result).to.be.null
      })
      .catch(result => {
        expect(result).to.not.be.null;
      })
      product.description = null;
      product.save()
      .then(result => {
        expect(result).to.be.null
      })
      .catch(result => {
        expect(result).to.not.be.null;
      })
    })

    it('requires an inventory level', () => {
      product.inventory = null;
      product.save()
      .then(result => {
        expect(result).to.be.null
      })
      .catch(result => {
        expect(result).to.not.be.null;
      })
    })

    it('has a default image', () => {
      product.save()
        .then(result => {
          expect(result.imgUrl).to.be.ok
        })
        .catch(console.error)
    })
  }),

  describe('hasMany relationship', () => {
    var option1, option2, option3
    beforeEach(() => {
      option1 = Product.build({
        title: 'A testing product',
        description: 'a very cool product',
        price: 2.50,
        inventory: 3,
        category: ['cat'],
      })
      option2 = Product.build({
        title: 'The first option',
        description: 'a very cool product',
        price: 2.50,
        inventory: 4,
        category: ['cat'],
      })
      option3 = Product.build({
        title: 'The second option',
        description: 'a very cool product',
        price: 2.50,
        inventory: 1,
        category: ['cat'],
      })

      // console.log(option1);
      Promise.all([option1.save(), option2.save(), option3.save()])
      .then(values => {
        return values[0].setOptions([option2, option3])
      })
      .then(result => {
        console.log(result);
      })



    })

    it('has options associations', () => {

    })

  })

})