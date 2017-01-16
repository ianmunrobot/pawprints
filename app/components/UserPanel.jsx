import React, { Component } from 'react';

export function UserPanel({user}) {
	return (
		<div>
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
                <div className="address new">
                  <input type="submit" value="submit" />
                </div>
              </form>
		</div>
		)
}


import { connect } from 'react-redux'

export default connect(({auth}) => ({
  user: auth
}))(UserPanel)
