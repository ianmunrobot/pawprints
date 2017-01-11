import React, { Component } from 'react';
import {connect} from 'react-redux';

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
			<ul className="megamenu skyblue">
				<li className="active grid"><a className="color1" href="index.html">Home</a></li>
				<li className="grid"><a className="color2" href="#">new arrivals</a>
					<div className="megapanel">
						<div className="row">
							<div className="col1">
								<div className="h_nav">
									<h4>Clothing</h4>
									<ul>
										<li><a href="product.html">new arrivals</a></li>
										<li><a href="product.html">men</a></li>
										<li><a href="product.html">women</a></li>
										<li><a href="product.html">accessories</a></li>
										<li><a href="product.html">kids</a></li>
										<li><a href="product.html">brands</a></li>
									</ul>	
								</div>							
							</div>
							<div className="col1">
								<div className="h_nav">
									<h4>kids</h4>
									<ul>
										<li><a href="product.html">Pools &amp; Tees</a></li>
										<li><a href="product.html">shirts</a></li>
										<li><a href="product.html">shorts</a></li>
										<li><a href="product.html">twinsets</a></li>
										<li><a href="product.html">kurts</a></li>
										<li><a href="product.html">jackets</a></li>
									</ul>	
								</div>							
							</div>
							<div className="col1">
								<div className="h_nav">
									<h4>Bags</h4>
									<ul>
										<li><a href="product.html">Handbag</a></li>
										<li><a href="product.html">Slingbags</a></li>
										<li><a href="product.html">Clutches</a></li>
										<li><a href="product.html">Totes</a></li>
										<li><a href="product.html">Wallets</a></li>
										<li><a href="product.html">Laptopbags</a></li>
									</ul>	
								</div>												
							</div>
						</div>
						<div className="row">
							<div className="col2"></div>
							<div className="col1"></div>
							<div className="col1"></div>
							<div className="col1"></div>
							<div className="col1"></div>
						</div>
	    				</div>
					</li>
			 </ul> 
		</div>
	</div>
</div>
</div>);
}