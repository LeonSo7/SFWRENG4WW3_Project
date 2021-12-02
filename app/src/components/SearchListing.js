import React, { Component } from 'react';
import '../styles/components/SearchListing.css';
import { Link } from 'react-router-dom';

class SearchListing extends Component {
    render() {
        console.log(this.props.storeInfo.storeId)
        return(
            <Link 
                className="searchListingLink"
                to={{
                    pathname: `/business/${this.props.storeInfo.storeId}`
                }}>
                <div className="listingDiv">                   
                    <h1 id="name">{this.props.storeInfo.store}</h1>
                    <h2 id="loc">Location: {this.props.storeInfo.lat + ", " + this.props.storeInfo.lng}</h2>
                    <h2 id="rating">Rating: {this.props.storeInfo.averageRating}</h2>
                </div>
            </Link>
        );
    }
}

export default SearchListing;