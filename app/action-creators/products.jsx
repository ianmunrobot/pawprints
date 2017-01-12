import {
  RECEIVE_PRODUCT,
  RECEIVE_PRODUCTS
} from 'APP/app/constants'

import axios from 'axios'

export const receiveProducts = products => (
  {
    type: RECEIVE_PRODUCTS,
    products
  }
)

export const fetchProducts = function() {
  return dispatch => {
    axios.get('/api/products')
    .then(response => {
      dispatch(receiveProducts(response.data))
    })
  }
}

export const receiveProduct = product => (
  {
    type: RECEIVE_PRODUCT,
    product
  }
)

export const fetchProduct = function(productId) {
  return dispatch => {
    axios.get(`/api/products/${productId}`)
    .then(response => {
      dispatch(receiveProduct(response.data))
    })
  }
}
