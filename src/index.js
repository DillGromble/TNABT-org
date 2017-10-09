import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'


import App from './App.js'
import Home from './views/Home/Home'
import About from './views/About/About'
import Membership from './views/Membership/Membership'
import Awards from './views/Awards-Service/Awards'


ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory} >
    <Route path="/" component={App}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/membership" component={Membership} />
      <Route path="/awards-service" component={Awards} />
    </Route>
  </Router>
  , document.getElementById('root')
)
