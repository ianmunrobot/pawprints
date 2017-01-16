import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

const Products = (props) => {
  return (
    <div class="products">
      <div class="container">
        <div class="products-grids">
          <div class="col-md-8 products-grid-left">
            <div class="products-grid-lft">
              {
                this.props.products.map(product => {
                  return (
                    <div class="products-grd" key={product.id}>
                      <div class="p-one simpleCart_shelfItem prd">
                        <Link to={`/products/${product.id}`}>
                          <img src="product.imgUrl" alt="" class="img-responsive" />
                          <h4>{product.name}</h4>
                          <p><a class="item_add" href="#"><i class="glyphicon glyphicon-shopping-cart"></i> <span class=" item_price valsa">${product.price}</span></a></p>
                        </Link>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.productsReducer.allProducts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)