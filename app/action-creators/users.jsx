import {
  RECEIVE_USERS,
} from 'APP/app/constants'

import axios from 'axios'

// sync
export const receiveUsers = users => (
  {
    type: RECEIVE_USERS,
    users
  }
)

// thunks
export const fetchUsers = function() {
  return dispatch => {
    axios.get('/api/users')
    .then(response => {
      dispatch(receiveUsers(response.data))
    })
  }
}
