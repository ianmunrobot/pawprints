import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Login from './Login';
import WhoAmI from './WhoAmI';

export const Header = ({user}) => {
  return (
    <div className="header_bg">
      <div className="container">
        <div className="header">
          <div className="head-t">
            <div className="logo">
              <Link to="/">
              <h1>Paw <span>Prints</span></h1> </Link>
            </div>
            <div className="header_right">
              { user ? <WhoAmI/> : <Login/> }
              <div className="cart box_1">
                <Link to="/checkout">
                <div className="total">
                  <span className="simpleCart_total"></span> (<span id="simpleCart_quantity" className="simpleCart_quantity"></span> items)</div>
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

export default connect(({auth}) => ({
  user: auth
}))(Header)
