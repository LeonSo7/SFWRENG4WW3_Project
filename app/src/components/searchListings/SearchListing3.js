import React, { Component } from 'react';
import '../../styles/components/SearchListing.css';
import { Link } from 'react-router-dom';

class SearchListing3 extends Component {
    render() {
        return(
            <Link 
                className="searchListingLink"
                to={{
                    pathname: "/fruityoyo",
                }}>
                <div className="listingDiv">
                    <h1 id="name">FruitYoyo</h1>
                    <h2 id="rating">1 Sixth Street, Hamilton, Ontario L2C1H3</h2>
                    <h2 id="rating">Rating: 4</h2>
                </div>
            </Link>
        );
    }
}

export default SearchListing3;