import React, { Component } from 'react';
import '../../styles/components/SearchListing.css';

class SearchListing3 extends Component {
    render() {
        return(
            <a href="/fruityoyo">
                <div className="listingDiv">
                    <h1 id="name">FruitYoyo</h1>
                    <h2 id="rating">1 Sixth Street, Hamilton, Ontario L2C1H3</h2>
                    <h2 id="rating">Rating: 4</h2>
                </div>
            </a>
        );
    }
}

export default SearchListing3;