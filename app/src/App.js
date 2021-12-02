import React, { Component } from 'react';
import './styles/App.css';
import Search from './pages/Search';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ReviewSubmissionPage from './pages/ReviewSubmissionPage';
import AddBusinessPage from './pages/Submission';
import ResultsSample from './pages/ResultsSample';
import BusinessPage from './pages/IndividualSample';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommonHeader from './components/CommonHeader';
import Footer from './components/CommonFooter';

require('dotenv').config();

class App extends Component {

  render() {
    return (
      <main className="App">
        <CommonHeader/>
        <Switch>        
          {/* Routes */}
          <Route path='/' component={Search} exact/>
          <Route path='/signup' component={SignUpPage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/review' component={ReviewSubmissionPage}/>
          <Route path='/add-business' component={AddBusinessPage}/>
          <Route path='/search-results' component={ResultsSample}/>
          {/* business object pages */}
          <Route path='/business/:id' component={BusinessPage}/>
        </Switch>
        <Footer/>
      </main>
    );
  }
}

export default App;
