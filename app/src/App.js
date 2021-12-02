import React, { Component } from 'react';
import './styles/App.css';
import Search from './pages/Search';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ReviewSubmissionPage from './pages/ReviewSubmissionPage';
import AddBusinessPage from './pages/Submission';
import ResultsSample from './pages/ResultsSample';
import BusinessPage from './pages/businessPages/IndividualSample1';
import BusinessPage2 from './pages/businessPages/IndividualSample2';
import BusinessPage3 from './pages/businessPages/IndividualSample3';
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
          {/* Temporary routes for hard-coded business object pages */}
          <Route path='/emilys-ice-cream-parlour' component={BusinessPage}/>
          <Route path='/coco-gelato' component={BusinessPage2}/>
          <Route path='/fruityoyo' component={BusinessPage3}/>
        </Switch>
        <Footer/>
      </main>
    );
  }
}

export default App;
