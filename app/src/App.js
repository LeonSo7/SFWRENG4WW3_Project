import React, { Component } from 'react';
import './styles/App.css';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import ReviewSubmissionPage from './pages/ReviewSubmissionPage';
import AddBusinessPage from './pages/AddBusinessPage';
import SearchResultsPage from './pages/SearchResultsPage';
import BusinessPage from './pages/BusinessPage';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <main className="App" >
        <Switch>
          {/* Routes */}
          <Route path='/' component={HomePage} exact/>
          <Route path='/signup' component={SignUpPage}/>
          <Route path='/review' component={ReviewSubmissionPage}/>
          <Route path='/add-business' component={AddBusinessPage}/>
          <Route path='/search-results' component={SearchResultsPage}/>
          <Route path='/business' component={BusinessPage}/>
        </Switch>
      </main>
    );
  }
}

export default App;
