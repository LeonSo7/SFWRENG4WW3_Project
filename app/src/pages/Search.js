import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/Search.css';
import SearchBar from '../components/SearchBar';
import { Button, Dropdown, DropdownButton, Spinner } from 'react-bootstrap';
import ScoopsSloganImg from '../assets/images/scoops.png';
import ThreeConesImg from '../assets/images/three-cones.png';
import { withRouter } from 'react-router-dom';
import {Animated} from "react-animated-css";

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
            geoSearching: false,
            searchByRatingDropdownText: "Search By Rating"
        };
    }

    // Handle user rating selection for search by rating dropdown
    handleRatingSelect(e) {
        this.setState({
            searchByRatingDropdownText: e.target.textContent
        });
    };

    searchByLocation() {
        const { history } = this.props;

        if (!navigator.geolocation) {
            /* If browser does not support HTML5 geolocation api, disable geolocation search button
             * and show an alert.
             */
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
                /* Show an alert and disable geolocation button if location cannot be retrieved.
                 * e.g., location services not enables/permissions not granted
                 */
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
                    <Animated animationIn="bounceIn" isVisible={true}>
                        <div id="bannerImgDiv" >
                            <img
                                id="bannerImg"
                                srcSet={ScoopsSloganImg + " 1x"}
                                src={ScoopsSloganImg}
                                alt="Scoops logo and slogan graphic"
                                width="732px"
                                height="296px"
                            />
                        </div>
                    </Animated>
                </div>

                {/* Search */}
                <div id="homePageSearchDiv">
                    <SearchBar />
                    <div id="searchOptionsDiv">
                        {/* Search by rating dropdown */}
                        <div className="searchOption">
                            <DropdownButton id="filterRatingDropDown" size="med" title={this.state.searchByRatingDropdownText}>
                                <Dropdown.Item href="#">
                                    <div onClick={(e) => this.handleRatingSelect(e)}>5 Star</div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <div onClick={(e) => this.handleRatingSelect(e)}>4+ Star</div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <div onClick={(e) => this.handleRatingSelect(e)}>3+ Star</div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <div onClick={(e) => this.handleRatingSelect(e)}>2+ Star</div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <div onClick={(e) => this.handleRatingSelect(e)}>1+ Star</div>
                                </Dropdown.Item>
                            </DropdownButton>
                        </div>
                        {/* Button for searching by current geolocation */}
                        <Button className="searchOption" onClick={this.searchByLocation.bind(this)} disabled={this.state.geoSearchDisabled}>
                            {this.state.geoSearching ? <Spinner animation="border" size="sm" /> : null} {this.state.geoSearchLabel}
                        </Button>
                    </div>

                    {/* Bottom banner graphic */}
                    <div id="bottomBannerDiv">
                        <Animated animationIn="bounce" isVisible={true}>
                            <div id="bannerImgDiv">
                                <img
                                    id="bannerImg"
                                    srcSet={ThreeConesImg + " 1x"}
                                    src={ThreeConesImg}
                                    alt="Three ice cream cones graphic"
                                    width="686px"
                                    height="353px" 
                                />
                            </div>
                        </Animated>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Search);