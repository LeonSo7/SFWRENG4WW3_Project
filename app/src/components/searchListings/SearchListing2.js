import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/SearchListing.css';

class SearchListing2 extends Component {
    render() {
        return(
            <div className="listingDiv">
                <Link
                    to={{
                        pathname: "/business",
                    }}
                    tabIndex="-1">
                    <h1 id="name">Coco Gelato</h1>
                </Link>
                <h2 id="rating">81 Nineth Street, L9H2B1 Hamilton Ontario</h2>
                <h2 id="rating">Rating: 3.5</h2>
            </div>
        );
    }
}

export default SearchListing2;