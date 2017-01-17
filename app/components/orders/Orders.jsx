import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux'


export const Orders = (props) => {
  const cartItems = props.orders.map((lineItem, index) => {
    const product = lineItem.product
    return (
      <div className="cart-header" key={product.id} >
        <div className="close1" >
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
                    <input type="number" className="form-control input-number" min="1" max="100" />
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

					<div className="clearfix">
					</div>
				</div>{/*container*/}
			</div>{/*cart=items*/}
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