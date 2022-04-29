import React, { Component } from 'react'
import './App.css';
import ForwardRefsParent from './advanced/ForwardRefsParent'
import HigherOrderComp from './advanced/HigherOrderComp'
import RefsDemo from './advanced/RefsDemo'

class App extends Component {
  render() {
    return(
      <div className="App">
        <ForwardRefsParent />

      </div>
    )
  }
} 

export default App;
