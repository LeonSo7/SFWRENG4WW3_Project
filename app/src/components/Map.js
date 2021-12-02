import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// Map to be used
class MapComponent extends Component {
    constructor(props) {
        super(props)

        //Set state to values passed in or set to default values
        this.state = {
            initialLat: this.props.param.initialLat ? this.props.param.initialLat : 43.263,
            initialLng: this.props.param.initialLng ? this.props.param.initialLng : -79.921,
            activeMarkers: this.props.param.activeMarkers ? this.props.param.activeMarkers : {},
            showInfo: this.props.param.showInfo ? this.props.param.showInfo : false,
            searchResults: this.props.param.searchResults ? this.props.param.searchResults : null,
            storeName: this.props.param.storeName ? this.props.param.storeName : null,
            storeId: this.props.param.storeId ? this.props.param.searchResults : null
        }
    }

    /* Method to change the state when the marker on the map is clicked */
    onMarkerClick = (props, marker, e) => {
        this.setState({
            showInfo: true,
            activeMarkers: marker,
            selected: props
        })
    }

    /* Method to change the state when the marker info is closed */
    onMarkerClose = () => {
        this.setState({
            showInfo: false,
            activeMarkers: {}
        })
    }

    render() {
        return (
            <div>
                {/* Map */}
                <Map
                    containerStyle={containerStyle}
                    google={window.google}
                    zoom={14}
                    initialCenter={{
                        lat: this.state.initialLat,
                        lng: this.state.initialLng
                    }}
                >
                    {

                        this.state.searchResults != null ?
                            // Display multiple markers for search results page
                            Object.values(this.state.searchResults).map(info => (
                                <Marker
                                    name={info.store}
                                    averageRating={info.averageRating}
                                    location={info.lat + ", " + info.lng}
                                    path={`business/${info.storeId}`}
                                    position={{
                                        lat: info.lat,
                                        lng: info.lng
                                    }}
                                    storeId={info.storeId}
                                    onClick={this.onMarkerClick.bind(this)}
                                />
                            ))
                            :
                            // Display single marker for business page
                            <Marker
                                name={this.state.storeName}
                                position={{
                                    lat: this.state.initialLat,
                                    lng: this.state.initialLng
                                }}
                                storeId={this.state.storeId}
                                onClick={this.onMarkerClick.bind(this)}
                            />
                    }
                    {/* Information window when the marker is clicked */}
                    <InfoWindow
                        marker={this.state.activeMarkers}
                        visible={this.state.showInfo}
                        onClose={this.onMarkerClose.bind(this)}
                    >
                        <div>
                            {/* Display the store name */}
                            <strong>{this.state.activeMarkers.name}</strong>
                            {
                                // Only show this information for the search results page
                                this.state.activeMarkers.averageRating != null && this.state.activeMarkers.location != null
                                    && this.state.activeMarkers.path != null ?
                                    <div>
                                        <div>
                                            Average Rating: {this.state.activeMarkers.averageRating}
                                        </div>
                                        <div>
                                            Location: {this.state.activeMarkers.location}
                                        </div>
                                        { /* Link to corresponding business */}
                                        <a href={"./business/" + this.state.activeMarkers.storeId}> Store Details</a>
                                    </div>
                                    :
                                    <div />
                            }
                        </div>

                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

// Container style for map
const containerStyle = {
    position: "relative",
    padding: '.5rem .5rem',
    marginRight: '15%',
    width: '70vw',
    height: '50vh'
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapComponent);