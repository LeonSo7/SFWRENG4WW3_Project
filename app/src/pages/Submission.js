import React, { Component } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../styles/App.css';
import '../styles/pages/Submission.css'

// Form to add a new business to the site
class Submission extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validated: false
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
                            <Form.Control type="file" multiple className="preventValidation" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formLatitude">
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control type="number" step="any" placeholder="Latitude" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formLongitude">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control type="number" step="any" placeholder="Longitude" required />
                                </Form.Group>
                            </Col>
                        </Row>
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