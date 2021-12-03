import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/IndividualSample.css'
import Review from '../components/Review';
import Map from '../components/Map';
import {Animated} from "react-animated-css";
import axios from 'axios';

// Business page
class IndividualSample extends Component {

    state = {
        storeName: "",
        reviewerName: ["Hanna", "Lin"],
        rating: [4, 5],
        averageRating: null,
        reviews: ["The ice cream here is the best! I've been coming here multiple times a week because it's just that good!", "My favourite flavour here is peach. Soooo good!!"],
        latitude: null,
        longitude: null,
        activeMarkers: {},
        showInfo: false
    }

    componentDidMount() {
        console.log("storeId", this.props.match.params.id)
        axios.get('http://localhost:3001/business/' + this.props.match.params.id)
        .then((res) => {
            var data = res.data;
            console.log(data)
            this.setState({
                storeName: data.storeName,
                latitude: data.latitude,
                longitude: data.longitude,
                description: data.description
            })
        });

        // TODO: get the review data from db using store id: this.props.match.params.id

        // TODO: get the image key
    }

    render() {
        return (
            <div className="wrapper">
                <div id="storeInfoDiv">
                    <div id="info">
                        <Animated animationIn="bounceIn" isVisible={true}>
                            <p id="storeName">{this.state.storeName}</p>
                        </Animated>
                        <p>Description: {this.state.description}</p>
                        <p>Location: {this.state.latitude + ", " + this.state.longitude}</p>
                        <p>Average Rating: {this.state.averageRating}</p>
                        
                        {/* Image uploaded by the user */}
                        <img src="/images/{put the key here}"></img>

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