import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/BusinessPage.css'
import Review from '../components/Review';
import Map from '../components/Map';
import { Animated } from "react-animated-css";
import axios from 'axios';
import ResultsSample from './ResultsSample';

// Business page
class BusinessPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            storeName: "",
            averageRating: null,
            // reviews: ["The ice cream here is the best! I've been coming here multiple times a week because it's just that good!", "My favourite flavour here is peach. Soooo good!!"],
            latitude: null,
            longitude: null,
            activeMarkers: {},
            showInfo: false,
            reviews: {},
            storeId: this.props.match.params.id,
            description: null
        }

        axios.get('http://localhost:3001/business/' + this.state.storeId)
            .then((res) => {
                if (res.status === 200) {
                    var data = res.data;
                    this.setState({
                        storeName: data.storeName,
                        latitude: data.latitude,
                        longitude: data.longitude,
                        description: data.description,
                        storeId: data.storeId,
                        averageRating: data.rating
                    })
                }
            })

        axios.get('http://localhost:3001/review?storeId=' + this.state.storeId)
            .then((res) => {
                if (res.status === 200) {
                    console.log("Review data", res.data);
                    this.setState({
                        reviews: res.data
                    })
                }
            });

    }

    componentDidMount() {

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
                            {
                                /* Search results from user query */
                                Object.keys(this.state.reviews).map(key => (
                                    <Review 
                                        title={this.state.reviews[key].title}
                                        reviewerName={this.state.reviews[key].reviewerName} 
                                        data={this.state.reviews[key].reviewContent}
                                        rating={this.state.reviews[key].rating}
                                    />
                                ))
                            }
                    </div>
                </Animated>
            </div>
        );
    }
}

export default BusinessPage;