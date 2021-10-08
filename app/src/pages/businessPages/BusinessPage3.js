import React, { Component } from 'react';
import '../../styles/App.css';
import '../../styles/pages/BusinessPage.css'
import Review4 from '../../components/reviews/Review4';
import map from '../../assets/images/map.jpg';

//Business page showing info for FruitYoyo
class BusinessPage3 extends Component {

    render() {
        return (
            <div className="wrapper">
                <div id="storeInfoDiv">
                    <div id="info">
                        <p id="storeName">FruitYoyo</p>
                        <p id="location">1 Sixth Street, Hamilton, Ontario L2C1H3</p>
                        <p id="averageRating">Average Rating: 4</p>
                        <div>
                            <p className="hours"><b>Sunday:</b> 1:00pm-9:00pm</p>
                            <p className="hours"><b>Monday:</b> 3:00pm-8:00pm</p>
                            <p className="hours"><b>Tuesday:</b> 1:00pm-9:00pm</p>
                            <p className="hours"><b>Wednesday:</b> 1:00pm-9:00pm</p>
                            <p className="hours"><b>Thursday:</b> 1:00pm-9:00pm</p>
                            <p className="hours"><b>Friday:</b> 1:00pm-9:00pm</p>
                            <p className="hours"><b>Saturday:</b> 1:00pm-9:00pm</p>
                        </div>
                    </div>
                    {/* Map showing location of business */}
                    <div>
                        <img id="businessMap" src={map} alt="Map" width="410px" height="360px"/>
                    </div>
                </div>
                {/* Business Reviews */}
                <div id="reviews">
                   <Review4/>
                </div>
            </div>
        );
    }
}

export default BusinessPage3;