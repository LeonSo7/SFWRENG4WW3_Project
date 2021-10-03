import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/SearchResults.css';
import CommonHeader from '../components/CommonHeader';
import SearchBar from '../components/SearchBar';
import Table from 'react-bootstrap/Table';
import Restaurant from '../components/Restaurant';

class SearchResults extends Component {
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
                <Table>
                    <tbody>
                        <tr>
                            <td><Restaurant /></td>
                        </tr>
                        <tr>
                            <td><Restaurant /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
           
            <img src="../assets/images/map.jpg" alt="Map"></img>
        </div>

    </div>
    );
  }
}

export default SearchResults;