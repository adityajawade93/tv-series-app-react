import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch'
import Main from '../Main'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><Link to={'/'}>TV Series List</Link></h1>
        </header>
        <Main />
      </div>    
    );
  }
}

export default App;
