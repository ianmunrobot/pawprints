import {
  RECEIVE_REVIEW,
  RECEIVE_SINGLE_PRODUCT_REVIEWS
} from 'APP/app/constants'

const initialState = {
  singleProductReviews: [],
  selectedReview: {},
}

const reviewsReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch(action.type) {
    case RECEIVE_REVIEW:
      newState.selectedReview = action.review
      break

    case RECEIVE_SINGLE_PRODUCT_REVIEWS:
      newState.singleProductReviews = action.reviews
      break

    default:
      return state
  }
  return newState
}

export default reviewsReducer