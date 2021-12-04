import React, { Component } from 'react';
import '../styles/components/Review.css'

//A Sample review for Emily's Ice Cream Parlour
class Review extends Component {
    render() {
        return(
            <div>
                <h1 className="title">{this.props.title}</h1>
                <h1 className="name">{this.props.reviewerName}</h1>
                <h2 className="rating">Rating: {this.props.rating}</h2>
                <h2 className="review">{this.props.data}</h2>
                <hr/>
            </div>
        );
    }
}

export default Review;