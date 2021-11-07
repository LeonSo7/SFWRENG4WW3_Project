import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/Results_Sample.css';
import SearchBar from '../components/SearchBar';
import SearchListing from '../components/searchListings/SearchListing';
import SearchListing2 from '../components/searchListings/SearchListing2';
import SearchListing3 from '../components/searchListings/SearchListing3';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const containerStyle = {
  position: 'relative',  
  width: '100%',
  height: '100%'
}

const style = {
  width: '100%',
  height: '100%'
}

//A Sample search results page
class Results_Sample extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initialLat: 43.261,
      initialLng: -79.9225,
      activeMarkers: {},
      showInfo: false,
      //the user's geolocation or null if not searching by geolocation
      geoLocation: {
        lat: props.location.state.currentLat,
        lng: props.location.state.currentLng
      }
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      showInfo: true, 
      activeMarkers: marker,
      selected: props
    })
  }

  onMarkerClose = () => {
    this.setState({
      showInfo: false, 
      activeMarkers: {}
    })
  }

  render() {

    return (
      
      <div className="wrapper">
        <div id="searchPageSearchBarDiv">
          <SearchBar/>
        </div>
        { this.state.geoLocation.lat != null && this.state.geoLocation.lng != null ?
        <h1 id="results"> Current Location: Latitude {this.state.geoLocation.lat}, Longitude {this.state.geoLocation.lng} </h1>
         :
        <div/>
        }
        <h1 id="results">Results</h1>
        <div id="searchResultsDiv">
            <div id="listingsDiv">
                {/* Search results from user query */}
                <SearchListing/>
                <SearchListing2/>
                <SearchListing3/>
            </div>
            {/* Map */}
            <Map
              id="mainMap"
              containerStyle={containerStyle}
              style={style}
              google={window.google}
              zoom={15}
              initialCenter={{
                  lat: this.state.initialLat,
                  lng: this.state.initialLng
              }}
            >
              <Marker 
                position = {{
                  lat: this.state.initialLat,
                  lng: this.state.initialLng
                }} 
                onClick={this.onMarkerClick.bind(this)}
              />
              {/* <Marker 
                lat = {43.77714113246414}
                lng = {-80}
                onClick={this.onMarkerClick.bind(this)}
              /> */}
              {/* <Marker 
                position = {{
                  lat: 43.77714113246414,
                  lng: -79.9225
                }} 
                // lat = {43.77714113246414}
                // lng = {-79.9225}
                onClick={this.onMarkerClick.bind(this)}
              /> */}
              <InfoWindow
                marker={this.state.activeMarkers}
                visible={this.state.showInfo}
                onClose={this.onMarkerClose.bind(this)}
                >
                <div>
                  <strong>Ice cream shop</strong>
                  <div>
                  Click for more info
                  </div>
                </div>
              </InfoWindow>
            </Map>
        </div>
    </div>
    );
  }
}

export default GoogleApiWrapper({
  // apiKey: ("")
}) (Results_Sample);

