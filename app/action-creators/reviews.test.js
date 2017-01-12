import { expect } from 'chai'
import { receiveReviews, receiveReview } from './reviews'

describe('Review actions', () => {
  const testReviews = [
    {
      title: 'So lifelike, I thought I was buying a real dog!',
      message: "Here I was looking for a pet for my 4 year old and I stumbled upon this cute little thing. But it wasn't real and now his birthday is ruined. Good quality print though!"
    },
    {
      title: 'Terrifyingly perfect',
      message: "Lost my dog last week, but this print looks eerily like him. It's like his soul is actually trapped inside, like when Jack Nicholson's picture is in the phot at the end of the Shining."
    }
  ]

  it('receives a single review', () => {
    expect(receiveReview(testReviews[0])).to.be.deep.equal({
      type: 'RECEIVE_REVIEW',
      review: testReviews[0]
    })
  })

  it('recieves all reviews', () => {
    expect(receiveReviews(testReviews)).to.be.deep.equal({
      type: 'RECEIVE_REVIEWS',
      reviews: testReviews
    })
  })
})
