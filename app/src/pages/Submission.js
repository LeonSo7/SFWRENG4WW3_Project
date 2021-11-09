import React, { Component } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../styles/App.css';
import '../styles/pages/Submission.css'
import { TiLocationArrowOutline } from 'react-icons/ti';

// Form to add a new business to the site
class Submission extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            coordinates: {
                latitude: "",
                longitude: ""
            },
            geolocationStatus: "Locate me"
        };
    }

    // Handle for submission and validation state
    handleSubmit(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        this.setState({
            validated: true
        });
    };

    getLocation() {
        if (!navigator.geolocation) {
            this.setState({
                geolocationStatus: "Geolocation is not supported by your browser"
            });
        } else {
            this.setState({
                geolocationStatus: "Retrieving location..."
            });
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    geolocationStatus: "Locate me",
                    coordinates: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                })
                console.log(position.coords);
            }, () => {
                this.setState({
                    geolocationStatus: "Unable to retrieve your location"
                });
            });
        }
    };

    handleLongitudeInput(e) {
        this.setState({
            coordinates: {
                longitude: e.target.value
            }
        });
    };

    handleLatitudeInput(e) {
        this.setState({
            coordinates: {
                latitude: e.target.value
            }
        });
    };

    render() {
        return (
            <div className="wrapper">
                <div id="addBusinessPageTitleDiv">
                    <h1>Add a business!</h1>
                </div>

                {/* Object submission for for adding a business (ice cream shop) */}
                <div id="addBusinessFormDiv">
                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Group className="mb-3" controlId="formBusinessName">
                            <Form.Label>Business Name</Form.Label>
                            <Form.Control type="text" placeholder="Business name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBusinessDescription">
                            <Form.Label>Business Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Description of business" required />
                        </Form.Group>
                        <Form.Group controlId="formReviewPhotoUpload" className="mb-3">
                            <Form.Label>Add photos of business</Form.Label>
                            <Form.Control type="file" multiple accept=".jpg,.jpeg,.png" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formLatitude">
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control
                                        type="number"
                                        step="any"
                                        placeholder="Latitude"
                                        required
                                        onChange={(e) => this.handleLatitudeInput(e)}
                                        value={this.state.coordinates.latitude}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formLongitude">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control
                                        type="number"
                                        step="any"
                                        placeholder="Longitude"
                                        required
                                        onChange={(e) => this.handleLongitudeInput(e)}
                                        value={this.state.coordinates.longitude}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div id="geoLocationDiv" onClick={this.getLocation.bind(this)}>
                                    <TiLocationArrowOutline size={20} /> {this.state.geolocationStatus}
                        </div>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Submission;