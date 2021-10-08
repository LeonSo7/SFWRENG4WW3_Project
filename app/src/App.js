import React, { Component } from 'react';
import './styles/App.css';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import ReviewSubmissionPage from './pages/ReviewSubmissionPage';
import AddBusinessPage from './pages/AddBusinessPage';
import SearchResultsPage from './pages/SearchResultsPage';
import BusinessPage from './pages/businessPages/BusinessPage';
import BusinessPage2 from './pages/businessPages/BusinessPage2';
import BusinessPage3 from './pages/businessPages/BusinessPage3';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommonHeader from './components/CommonHeader';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <main className="App">
        <CommonHeader/>
        <Switch>        
          {/* Routes */}
          <Route path='/' component={HomePage} exact/>
          <Route path='/signup' component={SignUpPage}/>
          <Route path='/review' component={ReviewSubmissionPage}/>
          <Route path='/add-business' component={AddBusinessPage}/>
          <Route path='/search-results' component={SearchResultsPage}/>
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
