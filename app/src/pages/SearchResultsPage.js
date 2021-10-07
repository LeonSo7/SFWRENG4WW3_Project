import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/SearchResultsPage.css';
import SearchBar from '../components/SearchBar';
import SearchListing from '../components/SearchListing';
import map from '../assets/images/map.jpg';

class SearchResultsPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div id="searchPageSearchBarDiv">
          <SearchBar/>
        </div>

        <div id="searchResultsDiv">
            <div id="resultsDiv">
                <h1>Results</h1>
                <SearchListing/>
                <SearchListing/>
                <SearchListing/>
            </div>
           
            <img id="mainMap" src={map} alt="Map"/>
        </div>
    </div>
    );
  }
}

export default SearchResultsPage;