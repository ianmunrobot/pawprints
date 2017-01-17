import React from 'react';

export function signUpComponent({signUp}) {
  const onSignUpSubmit = function(evt) {
    evt.preventDefault()
    let firstName = evt.target.firstName.value;
    let lastName = evt.target.lastName.value;
    let email = evt.target.email.value;
    let password = evt.target.password.value;
    let reenter = evt.target.reenter.value;
    console.log('SUBMIT BUTTON PRESSED')
    if (password === reenter) {
      signUp(firstName, lastName, email, password); document.getElementById("userInfo").reset();
    } else {
      alert('passwords do not match')
    }
  }

  return (
    <div>
      <div className="account account-left">
        <div className="container">
          <div className="account-bottom">
            <div className="col-md-6 account-left">
              <form id="userInfo" onSubmit={ onSignUpSubmit }>
                <div className="account-top heading">
                  <h3>NEW CUSTOMERS</h3>
                </div>
                <div className="address">
                  <span>First Name</span>
                  <input type="text" name="firstName" />
                </div>
                <div className="address">
                  <span>Last Name</span>
                  <input type="text" name="lastName" />
                </div>
                <div className="address">
                  <span>Email Address</span>
                  <input type="text" name="email" />
                </div>
                <div className="address">
                  <span>Password</span>
                  <input type="password" name="password" />
                </div>
                <div className="address">
                  <span>Re-enter Password</span>
                  <input type="password" name="reenter" />
                </div>
                <div className="address new">
                  <input type="submit" value="submit" />
                </div>
              </form>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  )
}

//---------------Login Container --------------------//
import { signUp } from 'APP/app/action-creators/auth'
import { connect } from 'react-redux'

export default connect(
  state => ({}),
  {
    signUp
  })(signUpComponent)


