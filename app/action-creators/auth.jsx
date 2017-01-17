import axios from 'axios'

import { AUTHENTICATED } from 'APP/app/constants'

import { receiveOrders } from './orders'

// sync
export const authenticated = user => ({
  type: AUTHENTICATED,
  user,
})

// thunks
export const login = (username, password) => dispatch => axios.post('/api/auth/local/login',
  {
    username,
    password
  })
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))

export const signUp = (firstName, lastName, email, password) => dispatch => {
  return axios.post('/api/users/',
    {
      firstName,
      lastName,
      email,
      password
    })
    .then((res) => {
      dispatch(login(res.data.email, res.data.password))
    })
}

export const loginWithGoogle = () => dispatch => axios.post('/api/auth/google-oauth/login', {
  scope: 'email'
})
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))

export const loginWithFacebook = () => dispatch => axios.post('/api/auth/facebook/login')
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))

export const loginWithGithub = () => dispatch => axios.post('/api/auth/github2/login')
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))

export const logout = () => dispatch => axios.post('/api/auth/logout')
  .then(res => {
    dispatch(whoami());
    res.redirect('/');
  })
  .catch(res => {
    dispatch(whoami());
    res.redirect('/');
  })

export const whoami = () => dispatch => axios.get('/api/auth/whoami')
  .then(response => {
    const user = response.data
    dispatch(authenticated(user))
    return axios.get(`/api/users/${user.id}/orders`)
  })
  .then(response => response.data)
  .then(orders => {
    dispatch(receiveOrders(orders))
  })
  .catch(failed => dispatch(authenticated(null)))
