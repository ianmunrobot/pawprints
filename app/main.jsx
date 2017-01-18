'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import axios from 'axios'

import store from './store'
import App from './components/App'
import SignUp from './components/SignUp'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Homepage from './components/HomePage'
import Checkout from './components/Checkout'
import AllProducts from './components/products/AllProducts'
import SingleProduct from './components/products/SingleProduct'
import UserPanel from './components/UserPanel'
import Cart from './components/Cart'
import Orders from './components/orders/Orders'


import { fetchProducts, receiveProduct } from './action-creators/products'
import { receiveOrders, receiveCurrentOrder } from './action-creators/orders'


const onAppEnter = function() {
  // add cart from session if it exists
  let cart = JSON.parse(sessionStorage.getItem('cart'))
  if (cart.products.length > 0) {
    store.dispatch(receiveCurrentOrder(cart))
  }
  store.dispatch(fetchProducts())
}

const onProductEnter = function(nextRouterState) {
  const productId = nextRouterState.params.productId;
  axios.get(`/api/products/${productId}`)
    .then(response => response.data)
    .then(product => {
      store.dispatch(receiveProduct(product))
    })
}

// const onOrdersEnter = function(nextRouterState) {
//   const userId = 4
//   axios.get(`/api/users/${userId}/orders`)
//     .then(response => response.data)
//     .then(orders => {
//       store.dispatch(receiveOrders(orders))
//     })
// }

export const FrameComponent = ({user, children}) => {
  return (
    <div>
      <nav>
        { /*<App />*/ }
        <Header />
        <NavBar />
      </nav>
      { children }
      <div>
        <Footer />
      </div>
    </div>
  )
}

export const Frame = connect(({auth}) => ({
  user: auth
}))(FrameComponent)

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ Frame } onEnter={ onAppEnter }>
        <IndexRoute component={ AllProducts } />
        <Route path="/products" component={ AllProducts } />
        <Route path="/products/:productId" component={ SingleProduct } onEnter={ onProductEnter } />
        <Route path="/signup" component={ SignUp } />
        <Route path="/cart" component={ Cart } />
        <Route path="/profile" component={ UserPanel } />
        <Route path="/checkout" component={ Checkout } />
        <Route path="/orders" component={ Orders } />
        <IndexRedirect to="/products" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
