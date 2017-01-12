import {
  RECEIVE_ORDER,
  RECEIVE_ORDERS
} from 'APP/app/constants'

import axios from 'axios'

// sync
export const actionCreatorName = payload => (
  {
    type: CONSTANT, // replace this
    payload,
  }
)

// thunks