import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default function navBar() {
	return (
	<ul className="megamenu skyblue">
				<li className="active grid"><a className="color1" href="index.html">Home</a></li>
				<li className="grid"><a className="color2" href="#">Categories</a>
					</li>
				<li><Link to="/signup">Your Account</Link></li>
				<li><a href="#">Track your order</a></li>				
			 </ul> 
		   );
}