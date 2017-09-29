import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'


import App from './App.js'
import Home from './views/Home/Home'
import About from './views/About/About'

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
  , document.getElementById('root')
)
