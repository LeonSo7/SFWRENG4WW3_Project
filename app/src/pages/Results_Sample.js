import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/Results_Sample.css';
import SearchBar from '../components/SearchBar';
import SearchListing from '../components/SearchListing';

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
      initialLat: 43.263,
      initialLng: -79.921,
      activeMarkers: {},
      showInfo: false,
      //the user's geolocation or null if not searching by geolocation
      geoLocation: {
        lat: props.location.state.currentLat,
        lng: props.location.state.currentLng
      },
      searchResults: {
        0: {
          store: "FruitYoyo",
          location: "1 Sixth Street, Hamilton, Ontario L2C1H3",
          averageRating: 4,
          path: "fruityoyo",
          lat: 43.262342,
          lng: -79.9234,
        },
        1: {
          store: "Coco Gelato",
          location: "81 Nineth Street, Hamilton, ON L9H2B1",
          averageRating: 3.5,
          path: "coco-gelato",
          lat: 43.2658,
          lng: -79.92545
        },
        2: {
          store: "Emily's Ice Cream Parlour",
          location: "200 Sixteenth Street, L2C4H5 Hamilton Ontario",
          averageRating: 4,
          path: "emilys-ice-cream-parlour",
          lat: 43.2612,
          lng: -79.92
        }
      }
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      showInfo: true, 
      activeMarkers: marker,
      selected: props
    })
    console.log(this.state.activeMarkers)

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
                {
                Object.values(this.state.searchResults).map(info => (
                  <SearchListing storeInfo={info}/>
                ))
              }
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
              {
                Object.values(this.state.searchResults).map(info => (
                  <Marker 
                    name={info.store}
                    position = {{
                      lat: info.lat,
                      lng: info.lng
                    }} 
                    onClick={this.onMarkerClick.bind(this)}
                  />
                ))
                
              }
              <InfoWindow
                marker={this.state.activeMarkers}
                visible={this.state.showInfo}
                onClose={this.onMarkerClose.bind(this)}
                >
                <div>
                  <strong>{this.state.activeMarkers.name}</strong>
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

