import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export class NavBar extends Component {

	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(evt) {
		evt.preventDefault()
		let event = Object.assign({}, evt)
		this.props.setCategory(evt.target.dataset.value)
	}

	render () {
		const user = this.props.user
		return (
			<ul className="megamenu skyblue">
				<li className="active grid"><Link to="/" onClick={this.handleClick} data-value = "" className="color1">Home</Link></li>
				<li className="grid" ><a className="color2" data-value="dog" href="#" onClick={this.handleClick}>Puppies</a></li>
				<li className="grid" onClick={this.handleClick}><a className="color2" data-value="cat"  href="#">Kittens</a></li>
				<li className="grid"  onClick={this.handleClick}><a className="color2" data-value="rodent" href="#">Other Pets</a></li>
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
			dispatch(setCategory(category))
		}
	}
}

export default connect(({auth}) => ({
  user: auth
}), mapDispatchToProps)(NavBar)
