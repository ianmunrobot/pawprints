import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS
} from 'APP/app/constants'

import axios from 'axios'

export const actionCreatorName = payload => (
  {
    type: CONSTANT, // replace this
    payload,
  }
)