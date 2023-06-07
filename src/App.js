import './App.css';

import React, { Component } from 'react'

function Navbar() {
  return(
    <>
      <nav>Home Login</nav>
    </>
  )
}

class App extends Component {
  state = {
    name: "Bizzy Banks",
    age: 28,
    occupation: "Rapper"
  }
  updateOcc() {
    this.setState({ occupation: "Singer"})
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
        <h2>Occupation: {this.state.occupation}</h2>
        <button onClick={() => this.updateOcc()}>Change Occupation</button>
      </div>
    )
  }
}


export default App;
