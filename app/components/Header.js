import React, { Component } from 'react';

export default function header() {
	return (
	<div className="header_bg">
	   <div className="container">
		<div className="header">
		  <div className="head-t">
			 <div className="logo">
				  <a href="index.html"><h1>Nuevo <span>Shop</span></h1> </a>
			  </div>
			  <div className="header_right">
				<div className="cart box_1">
					<a href="checkout.html">
					<div className="total">
						<span className="simpleCart_total"></span> (<span id="simpleCart_quantity" className="simpleCart_quantity"></span> items)</div>
						<i className="glyphicon glyphicon-shopping-cart"></i></a>
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