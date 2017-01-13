import { expect } from 'chai'
import { createStore } from 'redux'

import reviewsReducer from './reviews'

describe('Reviews Reducer', () => {
  let testStore
  beforeEach('create testing store', () => {
    testStore = createStore(reviewsReducer)
  })

  it('has the proper intial state', () => {
    expect(testStore.getState()).to.be.deep.equal({
      singleProductReviews: [],
      selectedReview: {},
    })
  })

  it('sets a single review', () => {
    let testAction = {
      type: 'RECEIVE_REVIEW',
      review: {
        title: "I hate this dog",
        message: "I feel like it's always looking at me with its beady little eyes. I wish I never bought it!",
        rating: 1,
      }
    }
    testStore.dispatch(testAction)
    let newState = testStore.getState()
    expect(newState.selectedReview).to.be.deep.equal(testAction.review)
  })

  it('sets an array of reviews for a product', () => {
    let testAction = {
      type: 'RECEIVE_SINGLE_PRODUCT_REVIEWS',
      reviews: [
        {
          title: 'GREAT PRODUCT!!',
          message: `This print was a great value\nI can't wait to order many many more hooray!`,
          rating: 1
        },
        {
          title: `would not order again`,
          message: `I loved it`,
          rating: 5
        },
      ]
    }
    testStore.dispatch(testAction)
    let newState = testStore.getState()
    expect(newState.singleProductReviews).to.be.deep.equal(testAction.reviews)
  })

})