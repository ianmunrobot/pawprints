import { RECEIVE_USERS } from 'APP/app/constants'

import axios from 'axios'

import { whoami, logout } from './auth'

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

export const deleteMe = function(id) {

  return dispatch => {
    axios.delete(`/api/users/${id}`)
      .then(response => {
        dispatch(logout())
      })
  }
}

export const updateUser = function(userId, firstName, lastName, email, password) {
  let body = {};
  if (firstName)
    body.firstName = firstName;
  if (lastName)
    body.lastName = lastName;
  if (email)
    body.email = email;
  if (password)
    body.password = password;
  console.log('I AM IN UPDATEUSER THUNK', body)
  return dispatch => {
    console.log('I AM SENDING PUT REQUEST')
    axios.put(`/api/users/${userId}`, body)
      .then(() => {
        dispatch(whoami())
      })
      .catch(() => {
        dispatch(whoami())
      })
  }
}
