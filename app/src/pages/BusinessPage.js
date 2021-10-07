import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/BusinessPage.css'
import Review from '../components/Review';
import map from '../assets/images/map.jpg';

class BusinessPage extends Component {

    render() {
        return (
            <div className="wrapper">
                <div id="storeInfo">
                    <div id="info">
                        <p id="storeName">Emily's Ice Cream Parlor</p>
                        <p id="location">200 Sixteenth Street, L2C4H5 Hamilton Ontario</p>
                        <div>
                            <p className="hours"><b>Sunday:</b> 12:00pm-10:00pm</p>
                            <p className="hours"><b>Monday:</b> Closed</p>
                            <p className="hours"><b>Tuesday:</b> 12:00pm-10:00pm</p>
                            <p className="hours"><b>Wednesday:</b> 12:00pm-10:00pm</p>
                            <p className="hours"><b>Thursday:</b> 12:00pm-10:00pm</p>
                            <p className="hours"><b>Friday:</b> 12:00pm-11:00pm</p>
                            <p className="hours"><b>Saturday:</b> 12:00pm-11:00pm</p>
                        </div>
                    </div>

                    <div>
                        <img src={map} alt="Map"/>
                    </div>
                </div>

                <div id="reviews">
                   <Review />
                </div>
            </div>
        );
    }
}

export default BusinessPage;