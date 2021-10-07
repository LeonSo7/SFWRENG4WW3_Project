import React, { Component } from 'react';
import '../styles/components/Review.css'

class Review extends Component {
    render() {
        return(
            <div>
                <h1 className="name">Lee Ming</h1>
                <h2 className="rating">Rating: 5</h2>
                <h2 className="review">Emily's Ice Cream Parlour has the best ice cream I've ever had!</h2>
                <hr/>
            </div>
        );
    }
}

export default Review;