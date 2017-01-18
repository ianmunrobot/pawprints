import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux'

export default (props) => {
  let orderTotal = 0
  let order = props.order
  let dateString = new Date(+order.date)
  const products = order.lineItems.map(lineItem => {
    orderTotal += +lineItem.price * lineItem.quantity
    const currentProd = lineItem.product
    return (
      <tr key={lineItem.id}>
        <td><img className="img-responsive" style={{maxWidth: '150px'}} src={currentProd.imgUrl} /></td>
        <td>{currentProd.title}</td>
        <td>{lineItem.quantity}</td>
        <td>${lineItem.price}</td>
        <td>${(lineItem.price * lineItem.quantity).toFixed(2)}</td>
      </tr>
    )
  })

  return (
    <div className="cart-header" >
      <div className="panel panel-default">
        <div className="panel-heading">Order Created: {dateString.toDateString()}</div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th />
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              { products }
              <tr>
                <td />
                <td />
                <td />
                <td><strong>TOTAL</strong></td>
                <td>${orderTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        <div className="delivery">
          <div className="clearfix">
          </div>
        </div> {/*delivery*/}
        <div className="clearfix">
        </div>
      </div>{/*cart-sec*/}
    </div>
  )
}