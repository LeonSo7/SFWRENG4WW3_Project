import React, { Component } from 'react';
import '../styles/components/Review.css'

class Review extends Component {

    render() {
        return(
            <div>
                <h1 id="name">Hanna</h1>
                <h2 id="rating">Rating: 4</h2>
                <h2 id="review">I love this ice cream shop! It is my favourite</h2>
            </div>
        );
    }
}

export default Review;