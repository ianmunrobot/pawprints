import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

const Products = (props) => {

  // split products array into rows of 3 products each
  const splitProducts = []
  let count = 0
  let rowCount = -1
  let products = props.selectedCategory !== '' ?
    props.products.filter(product => {
      return product.categories.some(individualCategory => {
        return individualCategory.name === props.selectedCategory
      })
    }) :
    props.products


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
                                  <p><i className="glyphicon glyphicon-shopping-cart"></i> <span className=" item_price valsa">${product.price}</span></p>
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
    products: state.productsReducer.allProducts,
    selectedCategory: state.selectedCategory
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)