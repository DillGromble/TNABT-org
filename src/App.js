import React, { Component } from 'react'

import Navbar from './components/Navbar/Navbar'
import Home from './views/Home/Home'

import './grid.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App
