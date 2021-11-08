import React, { Component } from 'react';
import '../styles/components/SearchListing.css';
import { Link } from 'react-router-dom';

class SearchListing extends Component {
    render() {
        return(
            <Link 
                className="searchListingLink"
                to={{
                    pathname: `/${this.props.storeInfo.path}`
                }}>
                <div className="listingDiv">                   
                    <h1 id="name">{this.props.storeInfo.store}</h1>
                    <h2 id="rating">{this.props.storeInfo.location}</h2>
                    <h2 id="rating">Rating: {this.props.storeInfo.averageRating}</h2>
                </div>
            </Link>
        );
    }
}

export default SearchListing;