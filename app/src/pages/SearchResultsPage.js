import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/SearchResultsPage.css';
import SearchBar from '../components/SearchBar';
import SearchListing from '../components/searchListings/SearchListing';
import SearchListing2 from '../components/searchListings/SearchListing2';
import SearchListing3 from '../components/searchListings/SearchListing3';
import map from '../assets/images/map.jpg';

class SearchResultsPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div id="searchPageSearchBarDiv">
          <SearchBar/>
        </div>
        <h1 id="results">Results</h1>
        <div id="searchResultsDiv">
            <div id="listingsDiv">
                {/* Search results from user query */}
                <SearchListing/>
                <SearchListing2/>
                <SearchListing3/>
            </div>
            <img id="mainMap" src={map} alt="Map" width="410px" height="360px"/>
        </div>
    </div>
    );
  }
}

export default SearchResultsPage;