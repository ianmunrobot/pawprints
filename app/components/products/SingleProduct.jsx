import React, { Component } from 'react'
import {connect} from 'react-redux';

const SingleProduct = (props) => {
  const product = props.product

  const max = Math.min(10, product.inventory)
  const quantities = product.inventory ?
      new Array(max).fill(0).map((item, index) => {
        return (<option key={index + 1}>{index + 1}</option>)
      }) :
      (<option></option>)


  return (
    <div className="products">
      <div className="container">
        <div className="products-grids">
          <div className="col-md-12 products-single">
            <div className="col-md-5 col-sm-12 col-xs-12 grid-single">

                <div className="thumb-image"> <img src={product.imgUrl} data-imagezoom="true" className="img-responsive" alt=""/>
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
                    <select>
                      { quantities }
                    </select>
                  </div>
                </div>
              <div className="clearfix"> </div>
            </div>
            <div className="single-but item_add">
              <input type="submit" value="add to cart"/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = function (state, ownProps) {
  return {
    product: state.productsReducer.selectedProduct
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return ({})
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)