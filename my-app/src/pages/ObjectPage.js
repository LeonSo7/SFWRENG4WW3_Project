import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/ObjectPage.css'
import CommonHeader from '../components/CommonHeader';
import Review from '../components/Review';
import Table from 'react-bootstrap/Table';

class ObjectPage extends Component {

    render() {

        return (
            <div className="wrapper">
                <CommonHeader/>
                <div id="storeInfo">
                    <div>
                        <p id="storeName">Emily's Ice Cream Parlor</p>
                        <p id="location">200 Sixteenth Street, L2C4H5 Hamilton Ontario</p>
                        <div>
                            <p id="hours">Sunday: 12:00pm-10:00pm</p>
                            <p id="hours">Monday: Closed</p>
                            <p id="hours">Tuesday: 12:00pm-10:00pm</p>
                            <p id="hours">Wednesday: 12:00pm-10:00pm</p>
                            <p id="hours">Thursday: 12:00pm-10:00pm</p>
                            <p id="hours">Friday: 12:00pm-11:00pm</p>
                            <p id="hours">Saturday: 12:00pm-11:00pm</p>
                        </div>
                    </div>

                    <div>
                        <img src="./map.jpg" alt="Map"/>
                    </div>
                </div>

                <div id="reviews">
                    <Table>
                        <tbody>
                            <tr>
                                <td><Review /></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default ObjectPage;