import React, { Component } from 'react';

export default function homeDisplay() {
	return (

<div className="fashion-section">
		 <div className="container"> 
		     <h3 className="title">Paw Prints</h3>

		   <div className="fashion-info">
				<div className="col-md-4 fashion-grids">
					<figure className="effect-bubba">
						<img src="images/f1.jpg" alt=""/>
						<figcaption>
							<h4>Puppies</h4>
							<p className="cart"><a href="single.html">Shop</a></p>				
						</figcaption>			
					</figure>		
				</div>
				<div className="col-md-4 fashion-grids">
					<figure className="effect-bubba">
						<img src="images/f2.jpg" alt=""/>
						<figcaption>
							<h4>Kittens</h4>
								<p className="cart"><a href="single.html">Shop</a></p>				
						</figcaption>			
					</figure>		
				</div>
				<div className="col-md-4 fashion-grids">
					<figure className="effect-bubba">
						<img src="images/f3.jpg" alt=""/>
						<figcaption>
							<h4>Other House Pets</h4>
							<p className="cart"><a href="single.html">Shop</a></p>							
						</figcaption>			
					</figure>		
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
	</div>
	);
}