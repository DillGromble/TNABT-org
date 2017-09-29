import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'



import App from './App.js'
import Home from './views/Home/Home'


ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={App}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={Home} />
    </Route>
  </Router>
  , document.getElementById('root')
)
