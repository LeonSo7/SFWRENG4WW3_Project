import React, { Component } from 'react';
import '../styles/components/Review.css'

class Review extends Component {
    render() {
        return(
            <div>
                <h1 className="name">Hanna Jenkins</h1>
                <h2 className="rating">Rating: 4</h2>
                <h2 className="review">I love this ice cream shop! It is my favourite!</h2>
                <hr/>
            </div>
        );
    }
}

export default Review;