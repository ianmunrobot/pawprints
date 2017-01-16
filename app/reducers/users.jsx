import {
  RECEIVE_USERS
} from 'APP/app/constants'

const initialState = {
  allUsers: [],
}

const usersReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch(action.type) {
    case RECEIVE_USERS:
      newState.allUsers = action.users
      break

    default:
      return state

  }
  return newState
}

export default usersReducer