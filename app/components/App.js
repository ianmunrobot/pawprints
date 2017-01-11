import React, { Component } from 'react';
import {connect} from 'react-redux';

export default connect(null)(({children}) =>
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
)