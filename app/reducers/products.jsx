import {
  RECEIVE_PRODUCT,
  RECEIVE_PRODUCTS,
} from 'APP/app/constants'

const initialState = {
  allProducts: [],
  selectedProduct: {},
}

const productsReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch(action.type) {
    case RECEIVE_PRODUCT:
      newState.selectedProduct = action.product
      break;

    case RECEIVE_PRODUCTS:
      newState.allProducts = action.products
      break;

    default:
      return state
  }
  return newState
}

export default productsReducer