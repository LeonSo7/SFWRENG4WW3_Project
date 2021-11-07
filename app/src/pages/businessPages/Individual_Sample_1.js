import React, { Component } from 'react';
import '../../styles/App.css';
import '../../styles/pages/Individual_Sample.css'
import Review from '../../components/reviews/Review';
import map from '../../assets/images/map.jpg';

//Business page showing info for Emily's Ice Cream Parlor
class Individual_Sample_1 extends Component {

    state = {
        storeName: "Emily's Ice Cream Parlour",
        storeAddress: "200 Sixteenth Street, L2C4H5 Hamilton Ontario",
        hours: { Sun: "12:00pm-10:00pm", Mon: "Closed", Tues: "12:00pm-10:00pm", Wed: "12:00pm-10:00pm", Thurs: "12:00pm-10:00pm", Fri: "12:00pm-11:00pm", Sat: "12:00pm-11:00pm"},
        reviewerName: ["Hanna", "Lin"],
        rating: [4, 5],
        averageRating: 4,
        reviews: ["The ice cream here is the best! I've been coming here multiple times a week because it's just that good!", "My favourite flavour here is peach. Soooo good!!"]
    }

    render() {
        return (
            <div className="wrapper">
                <div id="storeInfoDiv">
                    <div id="info">
                        <p id="storeName">{this.state.storeName}</p>
                        <p id="location">{this.state.storeAddress}</p>
                        <p id="averageRating">Average Rating: {this.state.averageRating}</p>
                        <div>
                            <p className="hours"><b>Sunday:</b>{this.state.hours.Sun}</p>
                            <p className="hours"><b>Monday:</b>{this.state.hours.Mon}</p>
                            <p className="hours"><b>Tuesday:</b>{this.state.hours.Tues}</p>
                            <p className="hours"><b>Wednesday:</b>{this.state.hours.Wed}</p>
                            <p className="hours"><b>Thursday:</b>{this.state.hours.Thurs}</p>
                            <p className="hours"><b>Friday:</b>{this.state.hours.Fri}</p>
                            <p className="hours"><b>Saturday:</b>{this.state.hours.Sat}</p>
                        </div>
                    </div>
                    {/* Map showing location of business */}
                    <div>
                        <img id="businessMap" srcSet={map + " 1x"} src={map} alt="Map" width="410px" height="360px"/>
                    </div>
                </div>

                {/* Business reviews */}
                <div id="reviews">
                   <Review data={this.state.reviews[0]} reviewerName={this.state.reviewerName[0]} rating={this.state.rating[0]}/>
                   <Review data={this.state.reviews[1]} reviewerName={this.state.reviewerName[1]} rating={this.state.rating[1]}/>
                </div>
            </div>
        );
    }
}

export default Individual_Sample_1;