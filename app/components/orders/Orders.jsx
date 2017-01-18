import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux'

import Order from './Order'

export const Orders = (props) => {
  const orders = props.orders.map(order => {
    return (
      <Order key={order.id} order={order} />
    )
  })

	return (
    <div>
			<div className="cart-items">
				<div className="container">
					<h3 className="tittle">My orders</h3>
            { orders }
					<div className="clearfix"></div>
				</div>
			</div>
		</div>
	)
}

import {
	changeQuantityOfProduct,
	removeProductFromOrder,
} from 'APP/app/action-creators/orders'

const mapStateToProps = function (state, ownProps) {
  return {
    orders: state.ordersReducer.allOrders
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)