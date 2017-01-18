import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Address from './Address';

export function Checkout({user, placeOrder}) {
  const orderSubmit = function(evt) {
    if (user.billingAddress) {
      placeOrder()
    } else {
      evt.preventDefault();
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
      <Link to="/orders">
        <button onClick={ orderSubmit } className="btn btn-submit">
          <span className="button-text">Submit Order</span>
        </button>
      </Link>
    </div>
  )
}

import { connect } from 'react-redux'
import { placeOrder as placeOrder } from '../action-creators/orders'

const mapDispatchToProps = dispatch => {
  return {
    placeOrder: function(id) {
      dispatch(placeOrder())
    }
  }
}


export default connect(({auth}) => ({
  user: auth
}), mapDispatchToProps)(Checkout)
