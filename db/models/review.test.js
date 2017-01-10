const db = require('APP/db')
const Review = require('./review')
const {expect} = require('chai')

describe('Review', () => {
  before('wait for the db', () => db.didSync);
  let exampleReview;
  beforeEach('', () => {
    exampleReview = Review.build({
      title: "I hate this dog",
      message: "I feel like it's always looking at me with its beady little eyes. I wish I never bought it!",
      rating: 1,
      likes: 7
    })
  });
  afterEach('destroy the created review', () => Review.destroy({
    where: {
      title: "I hate this dog!"
    }
  }));

  describe('validations', () => {
    it('require title', () => {
      exampleReview.title = '';
      return exampleReview.save()
        .catch(err => {
          expect(err.message).to.be.equal('Validation error: Validation notEmpty failed')
        })
    });

    it('require message', () => {
      exampleReview.message = '';
      return exampleReview.save()
        .catch(err => {
          expect(err.message).to.be.equal('Validation error: Validation notEmpty failed')
        })
    });
    it("rating system can't have a rating less than 1", () => {
      exampleReview.rating = 0;
      return exampleReview.save()
      .then(result => {
        expect(exampleReview.rating).to.equal(1)
      })
    });
    it("rating system can't have a rating greter than 5", () => {
      exampleReview.rating = 6;
      return exampleReview.save()
        .then(result => {
          expect(exampleReview.rating).to.equal(5)
        })
    })
  })

  describe('rating system', () => {
  })

})
