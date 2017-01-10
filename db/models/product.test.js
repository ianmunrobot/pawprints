const {expect} = require('chai')
const db = require('APP/db')
const Product = require('./product')

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

    it('has the correct title (sanity check)', () => {
      expect(product.title).to.be.equal('A testing product')
    })

    it('requires category to not be null', (done) => {
      product.category = null
      product.save()
        // does it disallow null?
        .then(result => {
          console.log('AAAAA')
          done(new Error())
        })
        .catch(err => {
          try {
            expect(err.message).to.be.equal('notNull Violation: category cannot be null')
            done()
          } catch ( err ) {
            done(err)
          }
        })
    // .then(() => {
    //   product.category = []
    //   return product.save()
    // })
    // // does it require that length is at least one?
    // .then(result => {
    //   console.log('BBBB')
    //   done(new Error())
    // })
    // .catch(err => {
    //   expect(err.message).to.be.equal('Validation error: Validation len failed')
    // })
    // .then(() => {
    //   console.log('CCCCC')
    //
    //   done();})
    // .catch(err => {
    //   console.log('DDDD')
    //
    //   done(err)})
    })


    it('requires a non-empty description', () => {
      product.description = ''
      product.save()
        .then(result => {
          expect(result).to.be.null
        })
        .catch(err => {
          expect(err.message).to.be.equal('notNull Violation: description cannot be null')
        })
      product.description = null
      product.save()
        .then(result => {
          expect(result).to.be.null
        })
        .catch(err => {
          expect(err.message).to.be.equal('notNull Violation: description cannot be null')
        })
    })

    it('requires an inventory level', () => {
      product.inventory = null
      product.save()
        .then(result => {
          expect(result).to.be.null
        })
        .catch(err => {
          expect(err.message).to.be.equal('notNull Violation: inventory cannot be null')
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
    var option1, option2, option3, testId
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

      // instances must be saved to add associations
      return Promise.all([option1.save(), option2.save(), option3.save()])
        .then(values => {
          testId = values[0].id
          return values[0].setOptions([option2, option3])
        })

    })

    it('has correct options associations', () => {
      Product.findById(testId, {
        include: [{
          all: true
        }]
      })
        .then(result => {
          expect(result.options).to.have.length(2)
        })
    })

  })

})
