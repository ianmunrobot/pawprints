import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux'


class Cart extends Component{
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleChange(evt) {
		let productId = +evt.target.name
		this.props.changeQuantityOfProduct(productId, +evt.target.value)
	}

	handleClick(evt) {
		let productId = +evt.target.dataset.id
		this.props.removeProductFromOrder(productId)
	}

	render() {
		// map and create cart items
		const cartItems = this.props.currentCart.products.map((lineItem, index) => {
			const product = lineItem.product
			return (
				<div className="cart-header" key={product.id} >
					<div className="close1" data-id={product.id} onClick={(e) => this.handleClick(e)}>
					</div>
					<div className="cart-sec simpleCart_shelfItem">
						<div className="cart-item cyc">
							<img src={product.imgUrl} className="img-responsive" alt="" />
						</div>
						<div className="cart-item-info">
							<h3><a href="#"> {product.title} </a><span>Pickup time:</span></h3>
								<ul className="qty">
									<li><h4>Quantity : {product.quantity} </h4>
										<div className="input-group">
											<input type="number" name={product.id} onChange={this.handleChange} className="form-control input-number" defaultValue={lineItem.quantity} min="1" max="100" />
									</div>
									</li>
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
}

import {
	changeQuantityOfProduct,
	removeProductFromOrder,
} from 'APP/app/action-creators/orders'

const mapStateToProps = function (state, ownProps) {
  return {
    currentCart: state.ordersReducer.currentOrder,
		// this is hacky to trigger connect() to re-render the component
		// should be refactored into another React LineItem element which
		// could be passed additional props
		currentProducts: state.ordersReducer.currentOrder.products,
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    changeQuantityOfProduct: (productId, quantity) => {
      dispatch(changeQuantityOfProduct(productId, quantity))
    },
		removeProductFromOrder: (productId) => {
			dispatch(removeProductFromOrder(productId))
		}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)