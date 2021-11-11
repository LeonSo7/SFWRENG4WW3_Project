import React, { Component } from 'react';
import '../../styles/App.css';
import '../../styles/pages/IndividualSample.css'
import Review from '../../components/Review';
import Map from '../../components/Map';
import {Animated} from "react-animated-css";

// Business page showing info for FruitYoyo
class IndividualSample3 extends Component {

    state = {
        storeName: "FruitYoyo",
        hours: {
            Sun: "12:00pm-10:00pm",
            Mon: "Closed",
            Tues: "12:00pm-10:00pm",
            Wed: "12:00pm-10:00pm",
            Thurs: "12:00pm-10:00pm",
            Fri: "12:00pm-11:00pm",
            Sat: "12:00pm-11:00pm"
        },
        reviewerName: ["Jenneth Pan"],
        rating: [4],
        averageRating: 4,
        reviews: ["BEST ICE CREAM EVER!"],
        initialLat: 43.2612,
        initialLng: -79.92,
        activeMarkers: {},
        showInfo: false
    }

    render() {
        return (
            <div className="wrapper">
                <div id="storeInfoDiv">
                    <div id="info">
                        <Animated animationIn="bounceIn" isVisible={true}>
                            <p id="storeName">{this.state.storeName}</p>
                        </Animated>
                        <p id="location">{this.state.location}</p>
                        <p id="averageRating">Average Rating: {this.state.averageRating}</p>
                        <div>
                            <p className="hours"><b>Sunday:</b> {this.state.hours.Sun}</p>
                            <p className="hours"><b>Monday:</b> {this.state.hours.Mon}</p>
                            <p className="hours"><b>Tuesday:</b> {this.state.hours.Tues}</p>
                            <p className="hours"><b>Wednesday:</b> {this.state.hours.Wed}</p>
                            <p className="hours"><b>Thursday:</b> {this.state.hours.Thurs}</p>
                            <p className="hours"><b>Friday:</b> {this.state.hours.Fri}</p>
                            <p className="hours"><b>Saturday:</b> {this.state.hours.Sat}</p>
                        </div>
                    </div>

                    {/* Map showing location of business */}
                    <div id="businessMap">
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
                    </div>
                </Animated>

            </div>
        );
    }
}

export default IndividualSample3;