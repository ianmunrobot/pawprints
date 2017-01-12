import {
  RECEIVE_ORDER,
  RECEIVE_ORDERS
} from 'APP/app/constants'

import axios from 'axios'

export const actionCreatorName = payload => (
  {
    type: CONSTANT, // replace this
    payload,
  }
)