import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Containers from './containers'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Containers />
      </BrowserRouter>
    )
  }
}

export default App