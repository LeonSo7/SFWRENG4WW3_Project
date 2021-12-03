import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/ResultsSample.css';
import SearchBar from '../components/SearchBar';
import SearchListing from '../components/SearchListing';
import Map from '../components/Map';
import {Animated} from "react-animated-css";

// Sample search results page
class ResultsSample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initialLat: 43.263,
            initialLng: -79.921,
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
            searchResults: {
                0: {
                    storeId: 0,
                    store: "FruitYoyo",
                    averageRating: 4,
                    lat: 43.262342,
                    lng: -79.9234,
                },
                1: {
                    storeId: 1,
                    store: "Coco Gelato",
                    averageRating: 3.5,
                    lat: 43.2658,
                    lng: -79.92545
                },
                2: {
                    storeId: 2,
                    store: "Emily's Ice Cream Parlour",
                    averageRating: 4,
                    lat: 43.2612,
                    lng: -79.92
                }
            }
        }

        // Construct GET url to get businesses with url query parameters for search filtering
        // Search by latitude and longitude -- 'Search Nearby' option selected on search page
        if (this.state.coordinates.latitude && this.state.coordinates.longitude) {
            // TODO
        }
    }

    componentDidMount() {
        //TODO: replace searchResults state variable above with the businesses returned in search results
    }

    render() {
        return (
            <div className="wrapper">
                <div id="searchPageSearchBarDiv">
                    <SearchBar />
                </div>

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
                        <Map param={this.state} />
                    </div>
                    <Animated animationIn="slideInUp" isVisible={true}>
                        <div id="listingsDiv">
                            {
                                /* Search results from user query */
                                Object.values(this.state.searchResults).map(info => (
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

