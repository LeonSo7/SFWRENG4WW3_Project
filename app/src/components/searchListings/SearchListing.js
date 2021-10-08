import React, { Component } from 'react';
import '../../styles/components/SearchListing.css';

class SearchListing extends Component {
    render() {
        return(
            <a href="/emilys-ice-cream-parlour">
                <div className="listingDiv">                   
                    <h1 id="name">Emily's Ice Cream Parlour</h1>
                    <h2 id="rating">200 Sixteenth Street, Hamilton, ON L2C4H5</h2>
                    <h2 id="rating">Rating: 4</h2>
                </div>
            </a>
        );
    }
}

export default SearchListing;