import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/Results_Sample.css';
import SearchBar from '../components/SearchBar';
import SearchListing from '../components/searchListings/SearchListing';
import SearchListing2 from '../components/searchListings/SearchListing2';
import SearchListing3 from '../components/searchListings/SearchListing3';
import map from '../assets/images/map.jpg';

//A Sample search results page
class Results_Sample extends Component {
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
            {/* Map Image */}
            <img id="mainMap" srcSet={map + " 1x"} src={map} alt="Map" width="410px" height="360px"/>
        </div>
    </div>
    );
  }
}

export default Results_Sample;