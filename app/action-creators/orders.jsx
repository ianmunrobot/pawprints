import {
  RECEIVE_SINGLE_ORDER,
  RECEIVE_ORDERS
} from 'APP/app/constants'

import axios from 'axios'

// sync
export const receiveOrders = orders => (
  {
    type: RECEIVE_ORDERS, // replace this
    orders,
  }
)

export const receiveSingleOrder = order => (
  {
    type: RECEIVE_SINGLE_ORDER,
    order
  }
)

// thunks
export const fetchOrders = () => {
 return dispatch => {
    axios.get(`/api/orders`)
    .then(response => {
      dispatch(receiveOrders(response.data))
    })
  }
}

export const fetchSingleOrder = orderId => {
  return dispatch => {
    axios.get(`/api/orders/${orderId}`)
    .then(response => {
      dispatch(receiveOrder(response.data))
    })
  }
}
