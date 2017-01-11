import React, { Component } from 'react';
import {connect} from 'react-redux';

export default function app(props) {
	return (
<div id="main">
		<div class="top_bg" id="home">
		<div class="container">
			<div class="header_top">
				<div class="top_right">
					<ul>
						<li><a href="#">help</a></li>
						<li><a href="contact.html">Contact</a></li>
						<li><a href="#">Delivery information</a></li>
					</ul>
				</div>
				<div class="top_left">
					<h6><span></span> Call us : 032 2352 782</h6>
				</div>
					<div class="clearfix"> </div>
			</div>
		</div>
	</div>
	<div class="header_bg">
	   <div class="container">
		<div class="header">
		  <div class="head-t">
			 <div class="logo">
				  <a href="index.html"><h1>Nuevo <span>Shop</span></h1> </a>
			  </div>
			  <div class="header_right">
				<div class="cart box_1">
					<a href="checkout.html">
					<div class="total">
						<span class="simpleCart_total"></span> (<span id="simpleCart_quantity" class="simpleCart_quantity"></span> items)</div>
						<i class="glyphicon glyphicon-shopping-cart"></i></a>
					<p><a href="javascript:;" class="simpleCart_empty">Empty Cart</a></p>
					<div class="clearfix"> </div>
				</div>				 
			</div>
			<div class="clearfix"></div>	
		    </div>
			<ul class="megamenu skyblue">
				<li class="active grid"><a class="color1" href="index.html">Home</a></li>
				<li class="grid"><a class="color2" href="#">new arrivals</a>
					<div class="megapanel">
						<div class="row">
							<div class="col1">
								<div class="h_nav">
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
							<div class="col1">
								<div class="h_nav">
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
							<div class="col1">
								<div class="h_nav">
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
						<div class="row">
							<div class="col2"></div>
							<div class="col1"></div>
							<div class="col1"></div>
							<div class="col1"></div>
							<div class="col1"></div>
						</div>
	    				</div>
					</li>
			 </ul> 
		</div>
	</div>
</div>
</div>);
}