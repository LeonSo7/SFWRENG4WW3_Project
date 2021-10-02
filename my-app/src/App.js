import React, { Component } from 'react';
import './styles/App.css';
import SearchPage from './pages/SearchPage'
import SignUpPage from './pages/SignUpPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <main className="App" >
        <BrowserRouter>
          <Switch>
            {/* Routes */}
            <Route path='/' component={SearchPage} exact/>
            <Route path='/signup' component={SignUpPage}/>
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
