import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchListing extends Component {
    render() {
        return(
            <div>
                <h1>1</h1>
                <Link
                    to={{
                        pathname: "/business",
                    }}
                    tabIndex="-1">
                    <h1 id="name">Emily's Ice Cream Parlour</h1>
                </Link>
                <h2 id="rating">Rating: 4</h2>
                <hr/>
            </div>
        );
    }
}

export default SearchListing;