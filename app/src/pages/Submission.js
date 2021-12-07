import React, { Component } from 'react';
import { Button, Col, Form, Row, Modal } from 'react-bootstrap';
import '../styles/App.css';
import '../styles/pages/Submission.css'
import { TiLocationArrowOutline } from 'react-icons/ti';
import { Animated } from "react-animated-css";
import axios from 'axios';

// Form to add a new business to the site
class Submission extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            latitude: null,
            longitude: null,
            geolocationStatus: "Locate me",
            imagePath: null,
            businessNameInputValue: "",
            show: false, // Show model after successful submission
            description: ""
        };
    }

    // Handle for submission and validation state
    handleSubmit(e) {

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            e.stopPropagation();
            // Upload image to s3
            const formData = new FormData();
            formData.append("image", this.state.image);
    
            // Send photo to DB
            axios({
                method: "post",
                url: process.env.REACT_APP_SERVER_URL + '/images',
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*",
                }
            }).then(res => {
                if (res.status === 200) {
                    // Save the picture key in the db                    
                    this.setState({
                        imagePath: res.data.imagePath
                    })
                    // res.data.imagePath is the path /images/{image key in s3}

                    let body = {
                        storeName: this.state.businessNameInputValue,
                        description: this.state.description,
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        imagePath: this.state.imagePath
                    };
    
                    // HTTP POST request to add bussiness to database
                    axios({
                        method: 'post',
                        url: process.env.REACT_APP_SERVER_URL + '/business',
                        data: JSON.stringify(body),
                        headers: {
                            'Content-Type': 'application/json',
                            "Access-Control-Allow-Origin": "*",
                        }
                    }).then((res) => {
                        if (res.status === 200) {
                            this.setState({
                                show: true
                            });
                        }
                    });

                }
            }).catch((e) => {
                console.log(e);
            });

        
        }

        this.setState({
            validated: true
        });
    };

    // Redirect to home page after successful submission
    navigateToHome() {
        this.setState({
            show: false
        });
        window.location.href = '/'
    }

    handleBusinessNameInput(e) {
        this.setState({
            businessNameInputValue: e.target.value
        });
    };

    handleDescriptionInput(e) {
        this.setState({
            description: e.target.value
        });
    };

    fileSelectedHandler(e) {
        this.setState({
            image: e.target.files[0]
        });
    };

    // Get geolocation (if possible) and update coordinates in state
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
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            }, () => {
                this.setState({
                    geolocationStatus: "Unable to retrieve your location"
                });
            });
        }
    };

    // Update longitude value in state
    handleLongitudeInput(e) {
        this.setState({
            longitude: e.target.value
        });
    };

    // Update latitude value in state
    handleLatitudeInput(e) {
        this.setState({
            latitude: e.target.value,
        });
    };

    render() {
        return (
            <div className="wrapper">
                <div id="addBusinessPageTitleDiv">
                    <Animated animationIn="bounceIn" isVisible={true}>
                        <h1>Add a business!</h1>
                    </Animated>
                </div>

                {/* Object submission for for adding a business (ice cream shop) */}
                <div id="addBusinessFormDiv">
                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Group className="mb-3" controlId="formBusinessName">
                            <Form.Label>Business Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Business name"
                                required
                                onChange={(e) => this.handleBusinessNameInput(e)}
                                value={this.state.businessNameInputValue}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBusinessDescription">
                            <Form.Label>Business Description</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Description of business" 
                                required 
                                onChange={(e) => this.handleDescriptionInput(e)}
                                value={this.state.description}
                            />
                        </Form.Group>
                        <Form.Group controlId="formReviewPhotoUpload" className="mb-3">
                            <Form.Label>Add a photo of the business</Form.Label>
                            <Form.Control type="file" accept=".jpg,.jpeg,.png" multiple={false} onChange={this.fileSelectedHandler.bind(this)} />
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
                                        value={this.state.latitude}
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
                                        value={this.state.longitude}
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
                <Modal
                    show={this.state.show}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Thank you for adding a business!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.businessNameInputValue} has been added!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={e => this.navigateToHome(e)}>Return to Home Page</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Submission;