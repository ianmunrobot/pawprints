import axios from 'axios'

// thunks
export const updateBillingAddress = (addressObj) => dispatch => axios.post('/api/addresses/',
  addressObj)
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))

export const updateShippingAddress = (addressObj) => dispatch => axios.post('/api/addresses/',
  addressObj)
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))


