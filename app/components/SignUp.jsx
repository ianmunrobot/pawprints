import React from 'react';
import Login from './Login';

export function signUp() {
	return (
		<div>
			<div className="account account-left" >
	  <div className="container" >
	       <div className="account-bottom">
				<div className="col-md-6 account-left">
					<form onSubmit={function(evt){
						evt.preventDefault()
						let email= evt.target.email.value; 
						console.log(email)
						let password= evt.target.password.value;
						console.log(password)
						login(email , password)}}>
					<div className="account-top heading" >
						<h3>NEW CUSTOMERS</h3>
					</div>
					<div className="address" >
						<span>First Name</span>
						<input type="text" name="firstName"/>
					</div>
					<div className="address" >
						<span>Last Name</span>
						<input type="text" name="lastName"/>
					</div>
					<div className="address" >
						<span>Email Address</span>
						<input type="text" name="email"/>
					</div>
					<div className="address" >
						<span>Password</span>
						<input type="password" name="password"/>
					</div>
					<div className="address">
						<span>Re-enter Password</span>
						<input type="password" />
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
import {login} from 'APP/app/action-creators/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login})(signUp)


