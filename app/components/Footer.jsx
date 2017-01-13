import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';


export default function footer() {
	return (

		<div>
			 <div className="footer">
		   <div className="container">
			<div className="footer-top">
				<div className="col-md-2 footer-left">
					<h3>About Us</h3>
					<ul>
						<li><a href="contact.html">Contact Us</a></li>				 
					</ul>
				</div>
				<div className="col-md-2 footer-left">
					<h3>Your Account</h3>
					<ul>
						<li><Link to="/signup">Your Account</Link></li>
						<li><a href="#">Personal Information</a></li>
						<li><a href="contact.html">Addresses</a></li>
						<li><a href="#">Discount</a></li>
						<li><a href="#">Track your order</a></li>					 					 
					</ul>
				</div>
				<div className="clearfix"> </div>
			</div>
				
		</div>
	</div>
	<ul className="socials">
				    <li><a className="soc1" href="#"></a></li>
				    <li><a className="soc2" href="#"></a></li>
				    <li><a className="soc3" href="#"></a></li>
				</ul>
		</div>

	)
}