import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/SearchListing.css';

class SearchListing3 extends Component {
    render() {
        return(
            <div className="listingDiv">
                <Link
                    to={{
                        pathname: "/business",
                    }}
                    tabIndex="-1">
                    <h1 id="name">FruitYoyo</h1>
                </Link>
                <h2 id="rating">1 Sixth Street, L2C1H3 Hamilton Ontario</h2>
                <h2 id="rating">Rating: 4.2</h2>
            </div>
        );
    }
}

export default SearchListing3;