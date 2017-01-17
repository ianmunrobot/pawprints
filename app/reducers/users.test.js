import { expect } from 'chai'
import { createStore } from 'redux'

import usersReducer from './users'

describe('Users Reducer', () => {
  let testStore
  beforeEach('create testing store', () => {
    testStore = createStore(usersReducer)
  })

  it('has the proper intial state', () => {
    expect(testStore.getState()).to.be.deep.equal({
      allUsers: [],
    })
  })

  it('sets an array of users', () => {
    let testAction = {
      type: 'RECEIVE_USERS',
      users: [
        {
          email: 'god@example.com',
          password: 'password'
        },
        {
          email: 'me@me.me',
          password: 'password'
        },
      ]
    }
    testStore.dispatch(testAction)
    let newState = testStore.getState()
    expect(newState.allUsers).to.be.deep.equal(testAction.users)
  })

})