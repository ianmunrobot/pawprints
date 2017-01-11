import React, { Component } from 'react';

export default function navBar() {
	return (
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
		   );
}