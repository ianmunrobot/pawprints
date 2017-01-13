import { RECEIVE_ORDERS, RECEIVE_SINGLE_ORDER } from 'APP/app/constants'

const DEFAULT_STATE = {
  allOrders: [],
  selectedOrder: {}
}


const ordersReducer = (state = DEFAULT_STATE, action) => {

  const newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_ORDERS:
      newState.allOrders = action.orders
      break
    case RECEIVE_SINGLE_ORDER:
      newState.selectedOrder = action.order
      break;
    default:
      return state
  }
  return newState
}

export default ordersReducer
