import React from 'react'

export const Login = ({login, loginWithGoogle, loginWithFacebook, loginWithGithub}) => (
<div>
  <div>
    <form onSubmit={ evt => {
                       evt.preventDefault()
                       login(evt.target.username.value, evt.target.password.value)
                     } }>
      <input name="username" />
      <br/>
      <input name="password" type="password" />
      <br/>
      <input type="submit" value="Login" />
    </form>
    <button onClick={ evt => {
                        evt.preventDefault()
                        loginWithGoogle()
                      } } id="google-oauth-button-login-modal" className="button oauth-button google-oauth-button">
      <i className="icon sprite-icon"></i>
      <span className="button-text">Log in with Google</span>
    </button>
    <button onClick={ evt => {
                        evt.preventDefault()
                        loginWithFacebook()
                      } } id="facebook-oauth-button-login-modal" className="button oauth-button facebook-oauth-button">
      <i className="icon sprite-icon"></i>
      <span className="button-text">Log in with Facebook</span>
    </button>
    <button onClick={ evt => {
                        evt.preventDefault()
                        loginWithGithub()
                      } } id="github-oauth-button-login-modal" className="button oauth-button github-oauth-button">
      <i className="icon sprite-icon"></i>
      <span className="button-text">Log in with Github</span>
    </button>
  </div>
</div>
)

import { login, loginWithGoogle, loginWithFacebook, loginWithGithub } from 'APP/app/action-creators/auth'
import { connect } from 'react-redux'

export default connect(
  state => ({}),
  {
    login,
    loginWithGoogle,
    loginWithFacebook,
    loginWithGithub
  })(Login)
