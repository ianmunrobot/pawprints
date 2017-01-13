import {
  RECEIVE_SINGLE_ORDER,
  RECEIVE_ORDERS,
  ADD_PRODUCT_TO_ORDER,
  CHANGE_QUANTITY_OF_PRODUCT,
  ADD_SHIIPING_ADDRESS,
  CHANGE_SHIPPING_ADDRESS,
  ADD_BILLING_ADDRESS,
  CHANGE_BILLING_ADDRESS,
  CHECKOUT
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

export const addProductToOrder = product => {
  type: ADD_PRODUCT_TO_ORDER,
  product
}

export const changeQuantityOfProduct = (quantity) => {
  type: CHANGE_QUANTITY_OF_PRODUCT,
  quantity
}

export const addShippingAddress = (address) => {
  type: ADD_SHIIPING_ADDRESS,
  address
}

export const changeShippingAddress = (address) => {
  type: CHANGE_SHIPPING_ADDRESS,
  address
}

export const addBillingAddress = (address) => {
  type: ADD_BILLING_ADDRESS,
  address
}

export const changeBillingAddress = (address) => {
  type: CHANGE_BILLING_ADDRESS,
  address
}

export const checkout = (complete) => {
  type: CHECKOUT,
  complete
}


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
