import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export function NavBar({user}) {
	return (
	<ul className="megamenu skyblue">
				<li className="active grid"><Link to="/" className="color1">Home</Link></li>
				<li className="grid"><a className="color2" href="#">Puppies</a></li>
				<li className="grid"><a className="color2" href="#">Kittens</a></li>
				<li className="grid"><a className="color2" href="#">Other Pets</a></li>
				{ user ? 

				<li><Link to='/profile'>Your Account</Link></li> :
				<li><Link to="/signup">Sign Up</Link></li>

				}
				<li><a href="#">Track your order</a></li>
	</ul> 
		   );
}

import { connect } from 'react-redux'

export default connect(({auth}) => ({
  user: auth
}))(NavBar)
