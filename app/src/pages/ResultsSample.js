import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/ResultsSample.css';
import SearchBar from '../components/SearchBar';
import SearchListing from '../components/SearchListing';
import Map from '../components/Map';
import {Animated} from 'react-animated-css';
import axios from 'axios';

// Sample search results page
class ResultsSample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeMarkers: {},
            showInfo: false,
            // The user's geolocation or null if not searching by geolocation
            coordinates: {
                latitude: this.props.location.state ? 
                    (this.props.location.state.latitude ? this.props.location.state.latitude : null) 
                    : null,
                longitude: this.props.location.state ? 
                    (this.props.location.state.longitude ? this.props.location.state.longitude : null) 
                    : null,
            },
            searchResults: [],
            rating: this.props.location.state.rating ? this.props.location.state.rating : null,
            searchStr: this.props.location.state.searchStr ? this.props.location.state.searchStr: null,
            showMap: false
        }

        // Construct GET url to get businesses with url query parameters for search filtering
        var reqUrl = "http://localhost:3001/business"
        var queryParams = ""

        // Filter search by search string
        if (this.state.searchStr) {
            if (queryParams == "") {
                queryParams += "?";
            } else {
                queryParams += "&";
            }
            queryParams += "searchStr=" + this.state.searchStr;
        }

        // Filter search by rating
        if (this.state.rating) {
            if (queryParams == "") {
                queryParams += "?";
            } else {
                queryParams += "&";
            }
            queryParams += "rating=" + this.state.rating;
        }

        // Filter search by latitude and longitude -- 'Search Nearby' option selected on search page
        if (this.state.coordinates.latitude && this.state.coordinates.longitude) {
            if (queryParams == "") {
                queryParams += "?";
            } else {
                queryParams += "&";
            }
            queryParams += "latitude=" + this.state.coordinates.latitude + "&longitude=" + this.state.coordinates.longitude;
        }

        // Make axios call to retrieve filtered search results
        axios({
            method: 'get',
            url: reqUrl+queryParams,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }).then((res) => {
            if (res.status == "200") {
                this.setState({
                    searchResults: res.data,
                    showMap: true
                });
            }
        });
    }

    render() {
        return (
            <div className="wrapper">
                {/* <div id="searchPageSearchBarDiv">
                    <SearchBar />
                </div> */}

                {/* Display the geolocation value if it is searched using geolocation */}
                {this.state.coordinates.latitude != null && this.state.coordinates.longitude != null ?
                    <div id="latitudeLongitudeDiv">
                        <h1 className="mainHeading">Current Location:</h1>
                        <p className="latitudeLongitude">Latitude: {this.state.coordinates.latitude}</p>
                        <p className="latitudeLongitude">Longitude: {this.state.coordinates.longitude}</p>
                    </div>
                    : <div/>
                }

                <h1 className="mainHeading">Results</h1>

                <div id="searchResultsDiv">
                    <div>
                        {/* Show map with business shown with markers */}
                        {this.state.showMap ?
                            <Map param={this.state} />
                            :
                            <></>
                        }
                    </div>
                    <Animated animationIn="slideInUp" isVisible={true}>
                        <div id="listingsDiv">
                            {
                                /* Search results from user query */
                                this.state.searchResults.map(info => (
                                    <SearchListing storeInfo={info} />
                                ))
                            }
                        </div>
                    </Animated>
                </div>
            </div>
        );
    }
}

export default ResultsSample;

