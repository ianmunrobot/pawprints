import {
  SET_CURRENT_CATEGORY
} from 'APP/app/constants'

// sync
export const setCategory = category => (
  {
    type: SET_CURRENT_CATEGORY,
    category
  }
)