import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export class NavBar extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.setFilter = this.setFilter.bind(this)
    this.state = {
      selected: ''
    }
  }

  handleClick(evt) {
    let event = Object.assign({}, evt)
    this.setState({
      selected: evt.target.dataset.value
    })
    this.props.setCategory(evt.target.dataset.value)
  }

  setFilter(filter) {}

  isActive(value) {
    return 'color1 ' + ((value === this.state.selected) ? 'active' : '');
  }

  render() {
    const user = this.props.user
    return (
      <ul className="megamenu skyblue">
        <li className="grid">
          <Link to="/" onClick={ this.handleClick } data-value="" className={ this.isActive('') }>Home</Link>
        </li>
        <li className="grid">
          <Link to="/" className={ this.isActive('dog') } data-value="dog" onClick={ this.handleClick }>Puppies</Link>
        </li>
        <li className="grid" onClick={ this.handleClick }>
          <Link to="/" className={ this.isActive('cat') } data-value="cat">Kittens</Link>
        </li>
        <li className="grid" onClick={ this.handleClick }>
          <Link to="/" className={ this.isActive('rodent') } data-value="rodent">Other Pets</Link>
        </li>
        { user ?
          <li onClick={ this.handleClick }>
            <Link to="/profile" className={ this.isActive('account') } data-value="account">Your Account</Link>
          </li> :
          <li onClick={ this.handleClick }>
            <Link to="/signup" className={ this.isActive('register') } data-value="register">Sign Up</Link>
          </li> }
        { /*<li><a>Track your order</a></li>*/ }
      </ul>
      );
  }
}

import { connect } from 'react-redux'
import { setCategory } from 'APP/app/action-creators/categories'

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    setCategory: (category) => {
      dispatch(setCategory(category))
    }
  }
}

export default connect(({auth}) => ({
  user: auth
}), mapDispatchToProps)(NavBar)
