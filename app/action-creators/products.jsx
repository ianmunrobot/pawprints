import {
  RECEIVE_PRODUCT,
  RECEIVE_PRODUCTS
} from 'APP/app/constants'

import axios from 'axios'

export const actionCreatorName = payload => (
  {
    type: CONSTANT, // replace this
    payload,
  }
)