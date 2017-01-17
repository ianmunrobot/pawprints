import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export class NavBar extends Component {

	constructor(props) {
		super(props)
		console.log(props);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(evt) {
		console.log('HANDLE CLICK',evt.target);
		this.props.setCategory(evt.target.value)
	}

	render () {
		const user = this.props.user
		return (
			<ul className="megamenu skyblue">
				<li className="active grid"><Link to="/" className="color1">Home</Link></li>
				<li className="grid" ><a className="color2" value="dog" href="#" onClick={(e) => this.handleClick(e)}>Puppies</a></li>
				<li className="grid" value="cat" onClick={(e) => this.handleClick(e)}><a className="color2" href="#">Kittens</a></li>
				<li className="grid" value="rodent" onClick={this.handleClick}><a className="color2" href="#">Other Pets</a></li>
					{ user ?

					<li><Link to={`users/${user.id}`}>Your Account</Link></li> :
					<li><Link to="/signup">Sign Up</Link></li>

					}
				<li><a href="#">Track your order</a></li>
			</ul>
		);
	}
}

import { connect } from 'react-redux'
import { setCategory } from 'APP/app/action-creators/categories'

const mapDispatchToProps = function (dispatch, ownProps) {
	return {
		setCategory: (category) => {
			console.log('MAP DISPATCH', category);
			dispatch(setCategory(category))
		}
	}
}

export default connect(({auth}) => ({
  user: auth
}), mapDispatchToProps)(NavBar)
