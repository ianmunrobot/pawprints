import { expect } from 'chai'
import { receiveUsers } from './users'

describe('Review actions', () => {
  const testUsers = [
    {
      email: 'god@example.com',
      password: 'password'
    },
    {
      email: 'me@me.me',
      password: 'password'
    },
  ]

  it('recieves all users', () => {
    expect(receiveUsers(testUsers)).to.be.deep.equal({
      type: 'RECEIVE_USERS',
      users: testUsers,
    })
  })

})