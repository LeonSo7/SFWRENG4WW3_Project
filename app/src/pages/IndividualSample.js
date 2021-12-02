import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/IndividualSample.css'
import Review from '../components/Review';
import Map from '../components/Map';
import {Animated} from "react-animated-css";

// Business page showing info for Emily's Ice Cream Parlor
class IndividualSample extends Component {

    state = {
        storeName: "Emily's Ice Cream Parlour",
        reviewerName: ["Hanna", "Lin"],
        rating: [4, 5],
        averageRating: 4,
        reviews: ["The ice cream here is the best! I've been coming here multiple times a week because it's just that good!", "My favourite flavour here is peach. Soooo good!!"],
        initialLat: 43.2612,
        initialLng: -79.92,
        activeMarkers: {},
        showInfo: false
    }

    componentDidMount() {
        // TODO: Set all the states with the values from db
        // get the store data from db using store id: this.props.match.params.id
        console.log("storeId", this.props.match.params.id)
    }

    render() {
        return (
            <div className="wrapper">
                <div id="storeInfoDiv">
                    <div id="info">
                        <Animated animationIn="bounceIn" isVisible={true}>
                            <p id="storeName">{this.state.storeName}</p>
                        </Animated>
                        <p id="location">Location: {this.state.initialLat + ", " + this.state.initialLng}</p>
                        <p id="averageRating">Average Rating: {this.state.averageRating}</p>
                    </div>

                    {/* Map showing location of business */}
                    <div id="businessMap">
                        {/* Show map with business shown with markers */}
                        <Map param={this.state} />
                    </div>
                </div>

                {/* Business reviews */}
                <Animated animationIn="slideInUp" isVisible={true}>
                    <div id="reviews">
                        <Review
                            data={this.state.reviews[0]}
                            reviewerName={this.state.reviewerName[0]}
                            rating={this.state.rating[0]}
                        />
                        <Review
                            data={this.state.reviews[1]}
                            reviewerName={this.state.reviewerName[1]}
                            rating={this.state.rating[1]}
                        />
                    </div>
                </Animated>
            </div>
        );
    }
}

export default IndividualSample;