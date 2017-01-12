import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';


export default function app(props) {
	return (
<div id="main">
		<div className="top_bg" id="home">
		<div className="container">
			<div className="header_top">
				<div className="top_right">
					<ul>
						<li><a href="#">help</a></li>
						<li><a href="contact.html">Contact</a></li>
						<li><a href="#">Delivery information</a></li>
					</ul>
				</div>
				<div className="top_left">
					<h6><span></span> Call us : 032 2352 782</h6>
				</div>
					<div className="clearfix"> </div>
			</div>
		</div>
	</div>
</div>);
}