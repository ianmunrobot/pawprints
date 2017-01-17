import {
  SET_CURRENT_CATEGORY
} from 'APP/app/constants'

const categoriesReducer = (state = "", action) => {
  console.log('ACTION', action);
  switch(action.type) {
    case SET_CURRENT_CATEGORY:
      return action.category
    default:
      return state
  }
}

export default categoriesReducer