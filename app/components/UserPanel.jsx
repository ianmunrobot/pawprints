import React, { Component } from 'react';

export function UserPanel({user}) {


	if (!user) return (<div></div>)
		else return (
		<div>
		 <div className="account account-left">
       	 <div className="container">
          <div className="account-bottom">
			<div className="col-md-6 account-left">
			<form>
                <div className="account-top heading">
                  <h3>My Information</h3>
                </div>
                <div className="address">
                  <span>First Name: {user.firstName}</span>
                </div>
                <div className="address">
                  <span>Last Name: {user.lastName}</span>
                </div>
                <div className="address">
                  <span>Email Address: {user.email}</span>
                </div>
              </form>
              <div className="account-top heading">
              <br/>
              <br/>
              <br/>
              <h3>Delete Profile</h3>
                </div>
                <button onClick={ evt => {
                        evt.preventDefault()
                      } } className="button oauth-button google-oauth-button">
      <span className="button-text">Delete Account</span>
    </button>
              </div>
              <div className="col-md-6 account-left">
              <form id="userInfo" onSubmit={ function(evt){
					evt.preventDefault()
					let firstName= evt.target.firstName.value;
					let lastName= evt.target.lastName.value;
					let email= evt.target.email.value;
					let password= evt.target.password.value;
					console.log('SUBMIT BUTTON PRESSED')
					signUp(firstName, lastName, email , password)
							document.getElementById("userInfo").reset()}}>
                <div className="account-top heading">
                  <h3>Update Information</h3>
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
                  <input type="password" />
                </div>
                <div className="address new">
                  <input type="submit" value="update" />
                </div>
                </form>
              </div> 
              </div>
              </div>
              </div>

		</div>
		)
}


import { connect } from 'react-redux'

export default connect(({auth}) => ({
  user: auth
}))(UserPanel)
