import {
  RECEIVE_SINGLE_ORDER,
  RECEIVE_ORDERS,
  RECEIVE_CURRENT_ORDER,
  ADD_PRODUCT_TO_ORDER,
  CHANGE_QUANTITY_OF_PRODUCT,
  REMOVE_PRODUCT_FROM_ORDER,
  ADD_SHIPPING_ADDRESS,
  CHANGE_SHIPPING_ADDRESS,
  ADD_BILLING_ADDRESS,
  CHANGE_BILLING_ADDRESS,
  CHECKOUT,
  RESET_CART,
} from 'APP/app/constants'

import store from 'APP/app/store'

import axios from 'axios'

import { whoami } from './auth'

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

export const receiveCurrentOrder = order => (
  {
    type: RECEIVE_CURRENT_ORDER,
    order
  }
)

export const resetCart = () => {
  return (
    {
      type: RESET_CART,
      action: {}
    }
  )
}

export const addProductToOrder = (productId, quantity = 1) => {
  let newProduct = {}
  store.getState()
    .productsReducer
    .allProducts.forEach(product => {
    if (product.id === productId) newProduct = product
  })
  return {
    type: ADD_PRODUCT_TO_ORDER,
    quantity,
    productId,
    product: newProduct
  }
}

export const removeProductFromOrder = (productId) => {
  return {
    type: REMOVE_PRODUCT_FROM_ORDER,
    productId
  }
}

export const changeQuantityOfProduct = (productId, quantity) => {
  return {
    type: CHANGE_QUANTITY_OF_PRODUCT,
    quantity,
    productId,
  }
}

export const changeShippingAddress = (shippingAddress) => ({
  type: CHANGE_SHIPPING_ADDRESS,
  shippingAddress
})

export const changeBillingAddress = (billingAddress) => ({
  type: CHANGE_BILLING_ADDRESS,
  billingAddress
})

export const checkout = (complete) => ({
  type: CHECKOUT,
  complete
})

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

export const addProductToOrderThunk = (orderId, productId, quantity) => {
  return dispatch => {
    const userId = store.getState().authReducer.id

    axios.post(`/api/orders/${orderId}/items/${productId}`,{
      quantity,
      product_id: productId,
      user_id: userId
    })
    .then(response => response.data)
    .then(newProduct => {
      dispatch()
    })
  }
}

export const placeOrder = () => {
  return dispatch => {
    let user = store.getState().auth
    let newOrder = {
      status: 'placed',
      shipping_address_id: user.shippingAddress.id,
      billing_address_id: user.billingAddress.id,
      date: Date.now(),
      user_id: user.id,
    }
    let orderLineItems = store.getState().ordersReducer.currentOrder.products

    return axios.post(`/api/orders`, newOrder)
    .then(res => res.data)
    .then(createdOrder => {
      let orderId = createdOrder.id
      let lineItemPromises = orderLineItems.map(lineItem => {
        return axios.post(`/api/orders/${orderId}/items/${lineItem.productId}`, {
          quantity: lineItem.quantity,
          price: lineItem.product.price,
          order_id: orderId,
        })
        .then(res => res.data)
        .then(console.log)
        .catch(console.error)
      })
      return Promise.all(lineItemPromises)
    })
    .then(res => {
      dispatch(resetCart())
      dispatch(whoami())
    })
    .catch(() => dispatch(whoami()))
  }
}