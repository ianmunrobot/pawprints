import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

class AllProducts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedProduct: {}
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt) {
    const value = evt.target.value
    this.setState({
      setState: value
    })
  }

  // split products array into rows of 3 products each
  const splitProducts = []
  let count = 0
  let rowCount = -1
  props.products.forEach(product => {
    if (count % 3 === 0) {
      splitProducts.push([])
      rowCount++;
    }
    splitProducts[rowCount].push(product)
    count++
  })

  return (
    <div className="products">
      <div className="container">
        <div className="products-grids">
          <div className="col-md-12 products-grid-left">
              {
                splitProducts.map((row, index) => {
                  return (
                    <div className="products-grid-lft" key={index}>
                      {
                        row.map(product => {
                          return (
                            <div className="products-grd" key={product.id}>
                              <div className="p-one simpleCart_shelfItem prd">
                                <Link to={`/products/${product.id}`}>
                                  <img src={product.imgUrl} alt="" className="img-responsive" />
                                  <h4>{product.title}</h4>
                                  <p>
                                    <i className="glyphicon glyphicon-shopping-cart" onClick={this.handleClick}></i>
                                    <span className=" item_price valsa">${product.price}</span>
                                  </p>
                                </Link>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
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
