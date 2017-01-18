import React, { Component } from 'react'
import {connect} from 'react-redux';

import AddReview from '../reviews/AddReview'

import { addProductToOrder } from 'APP/app/action-creators/orders'

class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      productId: +props.params.productId,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    const value = evt.target.value
    this.setState({
      quantity: value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addProductToOrder(this.state.productId, this.state.quantity)
    this.setState({
      quantity: 1,
      productId: this.props.product.id
    })
  }

  render () {
    const product = this.props.product

    const max = Math.min(10, product.inventory)
    const quantities = product.inventory ?
        new Array(max).fill(0).map((item, index) => {
          return (<option value={index + 1} key={index + 1}>{index + 1} </option>)
        }) :
        (<option></option>)

    const reviews = product.reviews
      ? product.reviews.map((review, index) => {
        return (
          <li key={index}>
            <h3>{review.title}</h3>
            <p className="lead">Rating: {review.rating} / 5 </p>
            <p>
              {review.message}
            </p>
          </li>
        )
      })
      : (<li></li>)

    return (
      <div className="products">
        <div className="container">
          <div className="products-grids">
            <div className="col-md-12 products-single">
              <div className="col-md-5 col-sm-12 col-xs-12 grid-single">
                <div className="thumb-image">
                  <img src={product.imgUrl} data-imagezoom="true" className="img-responsive" alt=""/>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12 single-text">
                <div className="details-left-info simpleCart_shelfItem">
                  <h3>{product.title}</h3>
                  <p className="availability">Availability: <span className="color">
                  {product.inventory > 0 ? `In stock` : `Out of Stock`}
                    </span></p>
                  <div className="price_single">
                    <span className="actual item_price">${product.price}</span>
                  </div>
                  <h2 className="quick">Quick Overview</h2>
                  <p className="quick_desc">{product.description}</p>
                  <h3>Dimensions:</h3>
                  <h4>{product.size}</h4>
                  <div className="quantity_box">
                      <span>Quantity:</span>
                    <div className="product-qty">
                      <select value={this.state.quantity} onChange={this.handleChange}>
                        { quantities }
                      </select>
                    </div>
                  </div>
                <div className="clearfix"> </div>
              </div>
              <div className="single-but item_add" onClick={this.handleSubmit}>
                <input type="submit" value="add to cart"/>
              </div>
            </div>
            <h2>Reviews</h2>
              {
                this.props.user &&
                <AddReview productId={product.id}/>
              }
              <ul className="list-unstyled">
                {reviews}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    product: state.productsReducer.selectedProduct,
    user: state.auth,
    reviews: state.productsReducer.selectedProduct.reviews,
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    addProductToOrder: (productId, quantity) => {
      dispatch(addProductToOrder(productId, quantity))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)