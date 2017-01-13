'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import App from './components/App'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import SignUp from './components/SignUp'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Checkout from './components/Checkout'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
        <App />
        <Header />
        <NavBar />
      </nav> 
      {children}
      <div>
      <Footer />
      </div>
    </div>
)

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/jokes" component={ExampleApp}>
        <IndexRedirect to="/" />
        <Route path="/" component={Homepage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Footer} />
        <Route path="/checkout" component={Checkout} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)