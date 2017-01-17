import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux'


const Cart = (props) => {
	const cartItems = props.currentCart.products.map((lineItem, index) => {
		const product = lineItem.product
		return (
			<div className="cart-header" key={index}>
			<div className="close1">
			</div>
			<div className="cart-sec simpleCart_shelfItem">
				<div className="cart-item cyc">
					<img src={product.imgUrl} className="img-responsive" alt="" />
				</div>
				<div className="cart-item-info">
					<h3><a href="#"> {product.title} </a><span>Pickup time:</span></h3>
						<ul className="qty">
							<li><p>Quantity : {lineItem.quantity}</p></li>
							<li><p>FREE delivery</p></li>
						</ul>
					<div className="delivery">
						<p>Price per unit : ${product.price}</p>
						<span>Total: ${lineItem.quantity * product.price}</span>
						<div className="clearfix">
						</div>
					</div> {/*delivery*/}
				</div> {/*cart-item-info*/}
				<div className="clearfix">
				</div>
			</div>{/*cart-sec*/}
		</div>
		)
	})

	return (
		<div>
			<div className="cart-items">
				<div className="container">
					<h3 className="tittle">My shopping cart({ cartItems.length })</h3>
						{ cartItems }
					<div className="clearfix">
					</div>
				</div>{/*container*/}
			</div>{/*cart=items*/}
		</div>
	)
}

import { changeQuantityOfProduct } from 'APP/app/action-creators/orders'

const mapStateToProps = function (state, ownProps) {
  return {
    currentCart: state.ordersReducer.currentOrder
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    changeQuantityOfProduct: (productId, quantity) => {
      dispatch(changeQuantityOfProduct(productId, quantity))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)