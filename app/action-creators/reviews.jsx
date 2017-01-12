import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS
} from 'APP/app/constants'

import axios from 'axios'

// sync
export const receiveReviews = reviews => (
  {
    type: RECEIVE_REVIEWS,
    reviews
  }
)

export const receiveReview = review => (
  {
    type: RECEIVE_REVIEW,
    review
  }
)

// thunks
export const fetchReviews = function() {
  return dispatch => {
    axios.get('/api/reviews')
    .then(response => {
      dispatch(receiveReviews(response.data))
    })
  }
}

export const fetchReview = function(reviewId) {
  return dispatch => {
    axios.get(`/api/reviews/${reviewId}`)
    .then(response => {
      dispatch(receiveReviews(response.data))
    })
  }
}
