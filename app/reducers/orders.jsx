import {
  RECEIVE_ORDERS,
  RECEIVE_SINGLE_ORDER,
  RECEIVE_CURRENT_ORDER,
  ADD_PRODUCT_TO_ORDER,
  CHANGE_QUANTITY_OF_PRODUCT,
  CHANGE_BILLING_ADDRESS,
  CHANGE_SHIPPING_ADDRESS,
  CHECKOUT,
} from 'APP/app/constants'

const DEFAULT_STATE = {
  allOrders: [],
  selectedOrder: {},
  currentOrder: {
    products: [],
    shippingAddress: {
      name: '',
      businessName: '',
      phone: '',
      streetNum: '',
      streetName: '',
      apartment: '',
      city: '',
      state: '',
      zip: ''
    },
    billingAddress: {
      name: '',
      businessName: '',
      phone: '',
      streetNum: '',
      streetName: '',
      apartment: '',
      city: '',
      state: '',
      zip: ''
    },
  },
}


const ordersReducer = (state = DEFAULT_STATE, action) => {

  const newState = Object.assign({}, state)

  switch(action.type) {
    case RECEIVE_ORDERS:
      newState.allOrders = action.orders
      break
    case RECEIVE_SINGLE_ORDER:
      newState.selectedOrder = action.order
      break
    case RECEIVE_CURRENT_ORDER:
      newState.currentOrder = action.currentOrder
      break
    case ADD_PRODUCT_TO_ORDER:
      newState.currentOrder.products.push(
        {
          productId: action.productId,
          quantity: action.quantity,
        })
      break
    case CHANGE_QUANTITY_OF_PRODUCT:
      newState.currentOrder.products = newState.currentOrder.products.map(product => {
        if (product.id === action.productId) {
          product.quantity = action.quantity
        }
      })
      break
    case CHANGE_BILLING_ADDRESS:
      newState.currentOrder.billingAddress = action.billingAddress
      break
    case CHANGE_SHIPPING_ADDRESS:
      newState.currentOrder.shippingAddress = action.shippingAddress
      break

    default:
      return state
  }
  return newState
}

export default ordersReducer
