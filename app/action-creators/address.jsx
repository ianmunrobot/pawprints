import axios from 'axios'
import { whoami } from './auth'

// thunks
export const updateBillingAddress = (addressObj) => dispatch => axios.post('/api/addresses/',
  addressObj)
  .then((res) => {
    return axios.put(`/api/users/${addressObj.userId}`, {
      billing_address_id: res.data.id
    })
  })
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))

export const updateShippingAddress = (addressObj) => dispatch => axios.post('/api/addresses/',
  addressObj)
  .then((res) => axios.put(`/api/users/${addressObj.userId}`, {
    shipping_address_id: res.data.id
  }))
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))


