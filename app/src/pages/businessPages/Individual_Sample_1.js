import React, { Component } from 'react';
import '../../styles/App.css';
import '../../styles/pages/Individual_Sample.css'
import Review1 from '../../components/reviews/Review';
import Review2 from '../../components/reviews/Review2';
import Review3 from '../../components/reviews/Review3';
import map from '../../assets/images/map.jpg';

//Business page showing info for Emily's Ice Cream Parlor
class Individual_Sample_1 extends Component {

    render() {
        return (
            <div className="wrapper">
                <div id="storeInfoDiv">
                    <div id="info">
                        <p id="storeName">Emily's Ice Cream Parlor</p>
                        <p id="location">200 Sixteenth Street, L2C4H5 Hamilton Ontario</p>
                        <p id="averageRating">Average Rating: 4</p>
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
                    {/* Map showing location of business */}
                    <div>
                        <img id="businessMap" srcSet={map + " 1x"} src={map} alt="Map" width="410px" height="360px"/>
                    </div>
                </div>

                {/* Business reviews */}
                <div id="reviews">
                   <Review1/>
                   <Review2/>
                   <Review3/>
                </div>
            </div>
        );
    }
}

export default Individual_Sample_1;