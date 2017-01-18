import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Address from './Address';

export function Checkout({user, placeOrder}) {
  const orderSubmit = function(evt) {
    evt.preventDefault();
    if (user.billingAddress) {
      placeOrder()
    } else {
      alert('Please fill in an address')
    }
  }
  if (!user) return (<div>Please sign in!</div>)
  return (
    <div>
      { /**<OrderDetails/>**/ }
      <Address/>
      { /**shipping options**/ }
      { /**<Stripe/>**/ }
      <button onClick={ orderSubmit } className="button oauth-button google-oauth-button">
        <span className="button-text">Submit Order</span>
      </button>
    </div>
  )
}

import { connect } from 'react-redux'
import { placeOrder as placeOrderThunk } from '../action-creators/orders'

const mapDispatchToProps = dispatch => {
  return {
    placeOrder: function(id) {
      dispatch(placeOrderThunk())
    }
  }
}


export default connect(({auth}) => ({
  user: auth
}), mapDispatchToProps)(Checkout)
