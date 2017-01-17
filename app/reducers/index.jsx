import { combineReducers } from 'redux'

import authReducer from './auth'
import reviewsReducer from './reviews'
import ordersReducer from './orders'
import productsReducer from './products'
import usersReducer from './users'
import categoriesReducer from './categories'


const rootReducer = combineReducers({
  auth: authReducer,
  // reviewsReducer,
  ordersReducer,
  productsReducer,
  // usersReducer,
  selectedCategory: categoriesReducer
})

export default rootReducer
