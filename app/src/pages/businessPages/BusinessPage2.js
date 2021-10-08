import React, { Component } from 'react';
import '../../styles/App.css';
import '../../styles/pages/BusinessPage.css'
import Review5 from '../../components/reviews/Review5';
import map from '../../assets/images/map.jpg';

class BusinessPage2 extends Component {

    render() {
        return (
            <div className="wrapper">
                <div id="storeInfo">
                    <div id="info">
                        <p id="storeName">Coco Gelato</p>
                        <p id="location">81 Nineth Street, Hamilton, ON L9H2B1</p>
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

                    <div>
                        <img src={map} alt="Map"/>
                    </div>
                </div>

                <div id="reviews">
                   <Review5/>
                </div>
            </div>
        );
    }
}

export default BusinessPage2;