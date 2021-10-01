import React, { Component } from 'react';
import '../styles/pages/SearchPage.css';
import CommonHeader from '../components/CommonHeader';
import SearchBar from '../components/SearchBar';


class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    }
  }

  render() {
    return (
      <div>
        <CommonHeader/>
        <div class="SearchPage">
          <SearchBar/>
        </div>
    </div>
    );
  }
}

export default SearchPage;