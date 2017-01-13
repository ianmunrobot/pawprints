import React from 'react';

export default function signUp() {
	return (
		<div>
			<div className="account account-left" >
	  <div className="container" >
	       <div className="account-bottom">
				<div className="col-md-6 account-left">
					<form>
					<div className="account-top heading" >
						<h3>NEW CUSTOMERS</h3>
					</div>
					<div className="address">
						<span>First Name</span>
						<input type="text" />
					</div>
					<div className="address">
						<span>Last Name</span>
						<input type="text" />
					</div>
					<div className="address">
						<span>Email Address</span>
						<input type="text" />
					</div>
					<div className="address">
						<span>Password</span>
						<input type="password" />
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