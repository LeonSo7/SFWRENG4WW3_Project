import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/SearchListing.css';

class SearchListing extends Component {
    render() {
        return(
            <div className="listingDiv">
                <Link
                    to={{
                        pathname: "/business",
                    }}
                    tabIndex="-1">
                    <h1 id="name">Emily's Ice Cream Parlour</h1>
                </Link>
                <h2 id="rating">200 Sixteenth Street, L2C4H5 Hamilton Ontario</h2>
                <h2 id="rating">Rating: 4</h2>
            </div>
        );
    }
}

export default SearchListing;