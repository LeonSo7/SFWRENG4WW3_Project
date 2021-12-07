import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/BusinessPage.css'
import Review from '../components/Review';
import Map from '../components/Map';
import { Animated } from "react-animated-css";
import axios from 'axios';

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
            description: null,
            imagePath: null,
            showMap: false
        }

        axios.get(process.env.REACT_APP_SERVER_URL + '/business/' + this.state.storeId)
            .then((res) => {
                if (res.status === 200) {
                    var data = res.data;

                    this.setState({
                        storeName: data.storeName,
                        latitude: data.latitude,
                        longitude: data.longitude,
                        description: data.description,
                        storeId: data.storeId,
                        averageRating: data.rating,
                        imagePath: data.imagePath
                    })
                }
            })

        axios.get(process.env.REACT_APP_SERVER_URL + '/review?storeId=' + this.state.storeId)
            .then((res) => {
                if (res.status === 200) {
                    this.setState({
                        reviews: res.data
                    })
                }
            });

    }

    componentDidUpdate() {
        if (this.state.longitude && this.state.latitude && !this.state.showMap) {
            this.setState({
                showMap: true
            });
        }
    };

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
                        { this.state.imagePath != null 
                            ? 
                            <img id="businessImg" src={process.env.REACT_APP_SERVER_URL + this.state.imagePath} alt="Photograph of business"></img>
                            :
                            <div/>
                        }
                    </div>

                    {/* Map showing location of business */}
                    <div id="businessMap">
                        {/* Show map with business shown with markers */}
                        { this.state.showMap ?
                            <Map param={this.state} />
                            :
                            <div/>
                        }
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