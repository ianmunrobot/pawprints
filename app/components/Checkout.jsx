import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';


export default function checkOut() {
	return (
		<div>
			<div className="cart-items">
				<div className="container">
			 <h3 className="tittle">My shopping(3)</h3>
			 <div className="cart-header">
				 <div className="close1"> </div>
				 <div className="cart-sec simpleCart_shelfItem">
						<div className="cart-item cyc">
							 <img src="images/f4.jpg" className="img-responsive" alt="" />
						</div>
					   <div className="cart-item-info">
						<h3><a href="#"> Lorem Ipsum is not simply </a><span>Pickup time:</span></h3>
						<ul className="qty">
							<li><p>Min. order value:</p></li>
							<li><p>FREE delivery</p></li>
						</ul>
							 <div className="delivery">
							 <p>Service Charges : $10.00</p>
							 <span>Delivered in 1-1:30 hours</span>
							 <div className="clearfix"></div>
				        </div>	
					   </div>
					   <div className="clearfix"></div>
											
				  </div>
			 </div>
					   <div className="clearfix"></div>				
				  </div>
			  </div>		
		 </div>
		)
}