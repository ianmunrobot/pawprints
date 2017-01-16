import axios from 'axios'

import { AUTHENTICATED } from 'APP/app/constants'

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

export const loginWithGoogle = () => dispatch => axios.post('/api/auth/google-oauth/login')
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))

export const loginWithFacebook = () => dispatch => axios.post('/api/auth/facebook/login')
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))

export const loginWithGithub = () => dispatch => axios.post('/api/auth/github2/login')
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))

export const logout = () => dispatch => axios.post('/api/auth/logout')
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))

export const whoami = () => dispatch => axios.get('/api/auth/whoami')
  .then(response => {
    const user = response.data
    dispatch(authenticated(user))
  })
  .catch(failed => dispatch(authenticated(null)))
