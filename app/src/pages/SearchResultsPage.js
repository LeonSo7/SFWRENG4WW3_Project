import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/SearchResultsPage.css';
import CommonHeader from '../components/CommonHeader';
import SearchBar from '../components/SearchBar';
import Restaurant from '../components/Restaurant';
import Footer from '../components/Footer';
import map from '../assets/images/map.jpg';

class SearchResultsPage extends Component {
  render() {
    return (
      <div class="wrapper">
        <CommonHeader/>
        <div id="searchPageSearchBarDiv">
          <SearchBar/>
        </div>

        <div id="searchResults">
            <div id="results">
                <h1>Results</h1>
                <Restaurant />
                <Restaurant />
                <Restaurant />
            </div>
           
            <img id="mainMap" src={map} alt="Map"/>
        </div>

        <Footer/>
    </div>
    );
  }
}

export default SearchResultsPage;