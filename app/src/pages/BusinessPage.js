import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/BusinessPage.css'
import CommonHeader from '../components/CommonHeader';
import Review from '../components/Review';
import Footer from '../components/Footer';
import map from '../assets/images/map.jpg';

class BusinessPage extends Component {

    render() {

        return (
            <div className="wrapper">
                <CommonHeader/>
                <div id="storeInfo">
                    <div>
                        <p id="storeName">Emily's Ice Cream Parlor</p>
                        <p id="location">200 Sixteenth Street, L2C4H5 Hamilton Ontario</p>
                        <div>
                            <p className="hours">Sunday: 12:00pm-10:00pm</p>
                            <p className="hours">Monday: Closed</p>
                            <p className="hours">Tuesday: 12:00pm-10:00pm</p>
                            <p className="hours">Wednesday: 12:00pm-10:00pm</p>
                            <p className="hours">Thursday: 12:00pm-10:00pm</p>
                            <p className="hours">Friday: 12:00pm-11:00pm</p>
                            <p className="hours">Saturday: 12:00pm-11:00pm</p>
                        </div>
                    </div>

                    <div>
                        <img src={map} alt="Map"/>
                    </div>
                </div>

                <div id="reviews">
                   <Review />
                </div>

                <Footer/>
            </div>
        );
    }
}

export default BusinessPage;