import React, { Component } from 'react';
import '../../styles/components/SearchListing.css';
import { Link } from 'react-router-dom';

class SearchListing2 extends Component {
    render() {
        return(
            <Link 
                className="searchListingLink"
                to={{
                    pathname: "/coco-gelato",
                }}>
                <div className="listingDiv">
                    <h1 id="name">Coco Gelato</h1>
                    <h2 id="rating">81 Nineth Street, Hamilton, ON L9H2B1</h2>
                    <h2 id="rating">Rating: 3.5</h2>
                </div>
            </Link>
        );
    }
}

export default SearchListing2;