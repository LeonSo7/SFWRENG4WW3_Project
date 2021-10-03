import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/HomePage.css';
import CommonHeader from '../components/CommonHeader';
import SearchBar from '../components/SearchBar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class HomePage extends Component {
  render() {
    return (
      <div class="wrapper">
        <CommonHeader/>

        {/* Home page title */}
        <div id="homePageTitleDiv">
          <h1>Find your next dessert!</h1>
        </div>

        {/* Search Bar */}
        <div id="homePageSearchBarDiv">
          <SearchBar/>
        </div>

        {/* Submit a review button */}
        <div id="submitReviewBtnDiv" class="minorSectionDiv">
          <h2 class="minorSectionTitle">Help others decide on what to eat next!</h2>
          <Link
              to={{
                pathname: "/review",
              }}>
            <Button variant="primary" id="submitReviewBtn">Submit a review</Button>
          </Link>
        </div>

        {/* Add dessert place */}
        <div id="submitNewDessertPlaceBtnDiv" class="minorSectionDiv">
          <h2 class="minorSectionTitle">Are we missing a dessert spot?</h2>
          <Link
              to={{
                pathname: "/add-business",
              }}>
            <Button variant="primary" id="submitLocationBtn">Add a dessert spot</Button>
          </Link>
        </div>
    </div>
    );
  }
}

export default HomePage;