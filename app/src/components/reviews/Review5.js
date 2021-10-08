import React, { Component } from 'react';
import '../../styles/components/Review.css'

//A Sample review for FruitYoyo
class Review5 extends Component {
    render() {
        return(
            <div>
                <h1 className="name">Lannie King</h1>
                <h2 className="rating">Rating: 3.5</h2>
                <h2 className="review">Pretty good.</h2>
                <hr/>
            </div>
        );
    }
}

export default Review5;