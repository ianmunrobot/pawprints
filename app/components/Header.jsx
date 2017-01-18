import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Login from './Login';
import WhoAmI from './WhoAmI';

export const Header = ({user, count, subtotal, setCategory}) => {
  return (
    <div className="header_bg">
      <div className="container">
        <div className="header">
          <div className="head-t">
            <div className="logo">
              <Link to="/">
                <h1 onClick={() => setCategory('')}>Paw<span>Prints</span></h1>
              </Link>
            </div>
            <div className="header_right">
              { user ? <WhoAmI/> : <Login/> }
              <div className="cart box_1">
                <Link to="/cart">
                <div className="total">
                  <span className="simpleCart_total">{'$' + subtotal.toFixed(2)}</span><span className="simpleCart_quantity"></span> | {count} items
                </div>
                <i className="glyphicon glyphicon-shopping-cart"></i></Link>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    );
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

export default connect(({auth, ordersReducer}) => ({
  user: auth,
  subtotal: ordersReducer.currentOrder.products.reduce((accum, curr) => {
    return accum + curr.quantity * curr.product.price
  }, 0.00),
  count: ordersReducer.currentOrder.products.length
}), mapDispatchToProps
)(Header)
