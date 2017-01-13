import { RECEIVE_ORDERS, RECEIVE_ORDER } from '../action-creators/orders.jsx'

const DEFAULT_STATE = []

const ordersReducer = (state = DEFAULT_STATE, action) => {

  const newState = Object.assign([], state)
  switch(action.type) {
    case RECEIVE_ORDERS:
      return action.orders
      break
    case RECEIVE_ORDER:
      return action.order
      break;
    default:
      return state
  }
  return newState
}

export default ordersReducer
