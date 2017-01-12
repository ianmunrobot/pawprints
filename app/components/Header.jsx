import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default function header() {
	return (
	<div className="header_bg">
	   <div className="container">
		<div className="header">
		  <div className="head-t">
			 <div className="logo">
				  <a href="index.html"><h1>Paw <span>Prints</span></h1> </a>
			  </div>
			  <div className="header_right">
				<div className="cart box_1">
					<Link to="/checkout">
					<div className="total">
						<span className="simpleCart_total"></span> (<span id="simpleCart_quantity" className="simpleCart_quantity"></span> items)</div>
						<i className="glyphicon glyphicon-shopping-cart"></i></Link> 
					<div className="clearfix"> </div>
				</div>				 
			</div>
			<div className="clearfix"></div>	
		    </div>
		</div>
	  </div>
	</div>
		   );
}