import React, { Component } from 'react';
import '../styles/components/Review.css'

class Review3 extends Component {
    render() {
        return(
            <div>
                <h1 className="name">Dan Dan</h1>
                <h2 className="rating">Rating: 3</h2>
                <h2 className="review">It's alright. Just a normal ice cream shop.</h2>
                <hr/>
            </div>
        );
    }
}

export default Review3;