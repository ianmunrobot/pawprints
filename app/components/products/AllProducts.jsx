import React, { Component } from 'react';

import {connect} from 'react-redux';
import { Link } from 'react-router';
import { addProductToOrder } from 'APP/app/action-creators/orders'

class AllProducts extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt) {
    const value = evt.target.value
    // console.log(Object.assign({}, evt));
    evt.preventDefault();
    this.props.addProductToOrder(+evt.currentTarget.dataset.productid)
  }

  render() {
    // split products array into rows of 3 products each
    const splitProducts = []
    let count = 0
    let rowCount = -1
    let products = this.props.selectedCategory !== '' ?
      this.props.products.filter(product => {
        return product.categories.some(individualCategory => {
          return individualCategory.name === this.props.selectedCategory
        })
      }) :
      this.props.products


    // TODO: this is hacky and should be refactored/dealth with
    // with proper styling we can avoid this division into subarrays
    // return value of the component will also need to be refactored
    products.forEach(product => {
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

                                      <span className=" item_price valsa">${product.price} </span>
                                      <button data-productId={product.id} data-product-price={product.price} onClick={this.handleClick}><i className="glyphicon glyphicon-shopping-cart"></i></button>
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
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.productsReducer.allProducts,
    selectedCategory: state.selectedCategory
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addProductToOrder: (productId, quantity) => {
      dispatch(addProductToOrder(productId, quantity))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
