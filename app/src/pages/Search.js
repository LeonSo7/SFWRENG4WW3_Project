import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/Search.css';
import SearchBar from '../components/SearchBar';
import { Button, Dropdown, Spinner } from 'react-bootstrap';
import ScoopsSloganImg from '../assets/images/scoops.png';
import ThreeConesImg from '../assets/images/three-cones.png';
import { withRouter } from 'react-router-dom';

// The search page with search bar
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coordinates: {
                latitude: "",
                longitude: ""
            },
            geoSearchDisabled: false,
            geoSearchLabel: "Search Nearby",
            geoSearching: false
        };
    }

    searchByLocation() {
        const { history } = this.props;

        if (!navigator.geolocation) {
            this.setState({
                geoSearchDisabled: true
            });
            alert("Geolocation is not supported by your browser.");
        } else {
            this.setState({
                geoSearchLabel: "Searching...",
                geoSearching: true
            })
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    coordinates: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    },
                })
                /* Navigate to search results and pass in coordinates */
                history.push("/search-results", this.state.coordinates);
            }, () => {
                alert("Unable to retrieve your location... Please enable location services and refresh to search nearby.");
                this.setState({
                    geoSearchDisabled: true,
                    geoSearching: false,
                    geoSearchLabel: "Search Nearby"
                });
            });
        }
    };

    render() {
        return (
            <div className="wrapper">
                {/* Home page title & cover */}
                <div id="homePageTitleDiv">
                    <div id="bannerImgDiv" >
                        <img
                            id="bannerImg"
                            srcSet={ScoopsSloganImg + " 1x"}
                            src={ScoopsSloganImg}
                            alt="Scoops logo and slogan graphic"
                            width="732px"
                            height="296px" />
                    </div>
                </div>

                {/* Search */}
                <div id="homePageSearchDiv">
                    <SearchBar />
                    <div id="searchOptionsDiv">
                        {/* Search by rating dropdown */}
                        <Dropdown className="searchOption">
                            <Dropdown.Toggle id="dropdown-autoclose-true">
                                Search By Rating
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">5 Star</Dropdown.Item>
                                <Dropdown.Item href="#">4+ Star</Dropdown.Item>
                                <Dropdown.Item href="#">3+ Star</Dropdown.Item>
                                <Dropdown.Item href="#">2+ Star</Dropdown.Item>
                                <Dropdown.Item href="#">1+ Star</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        {/* Button for searching by current geolocation */}
                        <Button className="searchOption" onClick={this.searchByLocation.bind(this)} disabled={this.state.geoSearchDisabled}>
                            {this.state.geoSearching ? <Spinner animation="border" size="sm"/> : null} {this.state.geoSearchLabel}
                        </Button>
                    </div>

                    {/* Bottom banner graphic */}
                    <div id="bottomBannerDiv">
                        <div id="bannerImgDiv" >
                            <img
                                id="bannerImg"
                                srcSet={ThreeConesImg + " 1x"}
                                src={ThreeConesImg}
                                alt="Three ice cream cones graphic"
                                width="686px"
                                height="353px" />
                        </div>
                    </div>
                </div>ß
            </div>
        );
    }
}

export default withRouter(Search);