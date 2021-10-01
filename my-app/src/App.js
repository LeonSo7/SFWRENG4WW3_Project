import React, { Component } from 'react';
import './styles/App.css';
import Home from './components/Home'

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    }
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
