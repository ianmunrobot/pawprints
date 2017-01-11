import React, { Component } from 'react';

export default function homeDisplay() {
	return (

<div class="fashion-section">
		 <div class="container"> 
		     <h3 class="tittle">Fashions</h3>

		   <div class="fashion-info">
				<div class="col-md-4 fashion-grids">
					<figure class="effect-bubba">
						<img src="images/f1.jpg" alt=""/>
						<figcaption>
							<h4>Nuevo Shop</h4>
							<p class="cart"><a href="single.html">Shop</a></p>				
						</figcaption>			
					</figure>		
				</div>
				<div class="col-md-4 fashion-grids">
					<figure class="effect-bubba">
						<img src="images/f2.jpg" alt=""/>
						<figcaption>
							<h4>Nuevo Shop</h4>
								<p class="cart"><a href="single.html">Shop</a></p>				
						</figcaption>			
					</figure>		
				</div>
				<div class="col-md-4 fashion-grids">
					<figure class="effect-bubba">
						<img src="images/f3.jpg" alt=""/>
						<figcaption>
							<h4>Nuevo Shop</h4>
							<p class="cart"><a href="single.html">Shop</a></p>							
						</figcaption>			
					</figure>		
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
	);
}