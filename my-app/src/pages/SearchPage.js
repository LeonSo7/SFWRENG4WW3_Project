import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/SearchPage.css';
import CommonHeader from '../components/CommonHeader';
import SearchBar from '../components/SearchBar';


class SearchPage extends Component {
  render() {
    return (
      <div class="wrapper">
        <CommonHeader/>
        <div class="searchPageTitleDiv">
          <h1 class="searchPageTitleTxt">Find your next dessert!</h1>
        </div>
        <div id="searchPageSearchBarDiv">
          <SearchBar/>
        </div>
    </div>
    );
  }
}

export default SearchPage;