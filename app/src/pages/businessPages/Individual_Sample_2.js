import React, { Component } from 'react';
import '../../styles/App.css';
import '../../styles/pages/Individual_Sample.css'
import Review from '../../components/reviews/Review';
import Map from '../../components/Map';

//Business page showing info for Coco Gelato
class Individual_Sample_2 extends Component {

    state = {
        storeName: "Coco Gelato",
        location: "81 Nineth Street, Hamilton, ON L9H2B1",
        hours: { Sun: "12:00pm-10:00pm", Mon: "Closed", Tues: "12:00pm-10:00pm", Wed: "12:00pm-10:00pm", Thurs: "12:00pm-10:00pm", Fri: "12:00pm-11:00pm", Sat: "12:00pm-11:00pm"},
        reviewerName: ["Lannie King"],
        rating: [3.5],
        averageRating: 3.5,
        reviews: ["Pretty good."],
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
                        <p id="storeName">{this.state.storeName}</p>
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
                        <Map param={this.state}/>
                    </div>
                </div>

                {/* Business reviews */}
                <div id="reviews">
                   <Review data={this.state.reviews[0]} reviewerName={this.state.reviewerName[0]} rating={this.state.rating[0]}/>
                </div>

            </div>
        );
    }
}

export default Individual_Sample_2;