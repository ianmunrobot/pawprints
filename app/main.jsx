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


import { fetchProducts, receiveProduct } from './action-creators/products'


const onAppEnter = function() {
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
        <IndexRedirect to="/products" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
