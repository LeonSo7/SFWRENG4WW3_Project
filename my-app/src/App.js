import React, { Component } from 'react';
import './styles/App.css';
import SearchPage from './pages/SearchPage'

/* Import Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>        
        <SearchPage/>
      </div>
    );
  }
}

export default App;
