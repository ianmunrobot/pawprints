'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'

import store from './store'
import App from './components/App'
import SignUp from './components/SignUp'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Homepage from './components/HomePage'
import Checkout from './components/Checkout'

export const FrameComponent = ({user, children}) => (<div>
                                                       <nav>
                                                         <App />
                                                         <Header />
                                                         <NavBar />
                                                       </nav>
                                                       { children }
                                                       <div>
                                                         <Footer />
                                                       </div>
                                                     </div>
)

export const Frame = connect(({auth}) => ({
  user: auth
}))(FrameComponent)

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ Frame }>
        <IndexRedirect to="/home" />
        <Route path="/home" component={ Homepage } />
        <Route path="/signup" component={ SignUp } />
        <Route path="/checkout" component={ Checkout } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
