import React, { Component } from 'react'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import './index.css'
import './grid.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default App
