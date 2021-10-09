import React, { Component } from 'react';
import '../../styles/App.css';
import '../../styles/pages/Individual_Sample.css'
import Review5 from '../../components/reviews/Review5';
import map from '../../assets/images/map.jpg';

//Business page showing info for Coco Gelato
class Individual_Sample_2 extends Component {

    render() {
        return (
            <div className="wrapper">
                <div id="storeInfoDiv">
                    <div id="info">
                        <p id="storeName">Coco Gelato</p>
                        <p id="location">81 Nineth Street, Hamilton, ON L9H2B1</p>
                        <p id="averageRating">Average Rating: 3.5</p>
                        <div>
                            <p className="hours"><b>Sunday:</b> 1:00pm-9:00pm</p>
                            <p className="hours"><b>Monday:</b> Closed</p>
                            <p className="hours"><b>Tuesday:</b> 1:00pm-9:00pm</p>
                            <p className="hours"><b>Wednesday:</b> 1:00pm-9:00pm</p>
                            <p className="hours"><b>Thursday:</b> 1:00pm-9:00pm</p>
                            <p className="hours"><b>Friday:</b> 1:00pm-9:00pm</p>
                            <p className="hours"><b>Saturday:</b> 12:00pm-9:00pm</p>
                        </div>
                    </div>
                    {/* Map showing location of business */}
                    <div>
                        <img id="businessMap" src={map} alt="Map" width="410px" height="360px"/>
                    </div>
                </div>

                {/* Business Reviews */}
                <div id="reviews">
                   <Review5/>
                </div>
            </div>
        );
    }
}

export default Individual_Sample_2;