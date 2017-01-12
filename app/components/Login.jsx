import React from 'react'

export const Login = ({ login }) => (
  <div>
    <div>
      <form onSubmit={evt => {
        evt.preventDefault()
        login(evt.target.username.value, evt.target.password.value)
      } }>
        <input name="username" />
        <input name="password" type="password" />
        <input type="submit" value="Login" />
      </form>
    </div>

          <div>
          <h4> Hello, User </h4>
          </div>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login})(Login)
