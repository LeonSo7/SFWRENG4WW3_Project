import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Select from 'react-select';
import '../styles/App.css';
import '../styles/pages/ReviewSubmissionPage.css'
import { Animated } from "react-animated-css";
import axios from 'axios';
import { connect } from "react-redux";

// Form to submit a review for a business 
class ReviewSubmissionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            validated: false,
            businessOptions: [],
            selectedBusinessOption: null, // id of selected business,
            submitted: false, // for form validation
            selectedRating: null,
            user: this.props.user.user ? this.props.user.user : {},
            title: "",
            review: "",
            show: false // for successful submission modal
        };

        // Make a fetch/get request using axios (an ajax framework) to get list of businesses
        axios.get("http://localhost:3001/business")
            .then((res) => {
                var businesses = res.data;
                // Populate select business dropdown options
                var dropdownOptions = []
                for (var i = 0; i < businesses.length; i++) {
                    var business = businesses[i];
                    dropdownOptions.push(
                        {
                            label: business.storeName,
                            value: business.storeId
                        }
                    )
                }
                this.setState({
                    businessOptions: dropdownOptions
                })
            });

    }

    // Handle user rating selection for search by rating dropdown
    handleBusinessSelection(option) {
        this.setState({
            // Update state with id of selected business
            selectedBusinessOption: option
        });
    };

    // Handle input for review title
    handleTitleInput(e) {
        this.setState({
            title: e.target.value
        });
    };

    // Handle input for review content
    handleReview(e) {
        this.setState({
            review: e.target.value
        });
    };

    // Handle submission button click and validation state
    handleSubmit(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            e.stopPropagation();

            let body = {
                name: this.state.user.firstName + " " + this.state.user.lastName,
                title: this.state.title,
                review: this.state.review,
                rating: this.state.selectedRating,
                storeId: this.state.selectedBusinessOption.value,
                userId: this.state.user.userId
            };
            // HTTP POST request to add user to database
            axios({
                method: 'post',
                url: 'http://localhost:3001/review',
                data: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                }
            }).then((res) => {
                if (res.status == "200") {
                    console.log("Successfully added review");
                    this.setState({
                        show: true
                    });
                }
            });
        }

        this.setState({
            validated: true,
            submitted: true
        });
    };

    // Redirect to home page after successful submission
    navigateToHome() {
        this.setState({
            show: false
        });
        window.location.href = '/'
    }

    // Custom (invalid) styling for form validation of business dropdown
    noBusinessOptionSelected = {
        control: (provided) => ({
            ...provided,
            borderColor: '#dc3545',
        }),
    }

    // Custom (valid) styling for form validation of business dropdown
    businessOptionSelected = {
        control: (provided) => ({
            ...provided,
            borderColor: '#198754',
        }),
    }

    render() {
        return (
            <div className="wrapper">
                <div id="reviewSubmissionPageTitleDiv">
                    <Animated animationIn="bounceIn" isVisible={true}>
                        <h1>Write your review!</h1>
                    </Animated>
                </div>

                {/* Review submission form */}
                <div id="reviewFormDiv">
                    <div id="reviewDropdown">
                        {/* Search dropdown for businesses to review*/}
                        {this.state.businessOptions.length > 0 ?
                            <div>
                                <div>Select a store to review</div>
                                <Select
                                    value={this.state.selectedBusinessOption}
                                    onChange={this.handleBusinessSelection.bind(this)}
                                    options={this.state.businessOptions}
                                    // Validation styling
                                    styles={(!this.state.selectedBusinessOption & this.state.submitted)
                                        ? this.noBusinessOptionSelected
                                        : (!!this.state.selectedBusinessOption & this.state.submitted)
                                            ? this.businessOptionSelected : {}}
                                />
                            </div>
                            :
                            <div>
                            </div>
                        }
                    </div>
                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Group className="mb-3" controlId="formReviewRating">
                            <Form.Label>Select Rating</Form.Label>
                            <div key={`inline-radio`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="1"
                                    name="ratingRadioGroup"
                                    id={`inline-radio-1`}
                                    type={'radio'}
                                    required
                                    value={1}
                                    onChange={(e) => this.setState({ selectedRating: e.currentTarget.value })}
                                />
                                <Form.Check
                                    inline
                                    label="2"
                                    name="ratingRadioGroup"
                                    id={`inline-radio-2`}
                                    type={'radio'}
                                    value={2}
                                    onChange={(e) => this.setState({ selectedRating: e.currentTarget.value })}
                                />
                                <Form.Check
                                    inline
                                    label="3"
                                    name="ratingRadioGroup"
                                    id={`inline-radio-3`}
                                    type={'radio'}
                                    value={3}
                                    onChange={(e) => this.setState({ selectedRating: e.currentTarget.value })}
                                />
                                <Form.Check
                                    inline
                                    label="4"
                                    name="ratingRadioGroup"
                                    id={`inline-radio-4`}
                                    type={'radio'}
                                    value={4}
                                    onChange={(e) => this.setState({ selectedRating: e.currentTarget.value })}
                                />
                                <Form.Check
                                    inline
                                    label="5"
                                    name="ratingRadioGroup"
                                    id={`inline-radio-5`}
                                    type={'radio'}
                                    value={5}
                                    onChange={(e) => this.setState({ selectedRating: e.currentTarget.value })}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formReviewTitle">
                            <Form.Label>Add a title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Review title"
                                required
                                onChange={(e) => this.handleTitleInput(e)}
                                value={this.state.title}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formReviewBody">
                            <Form.Label>Add a written review</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="What did you like or dislike? How did it taste?"
                                required
                                onChange={(e) => this.handleReview(e)}
                                value={this.state.review}
                            />
                        </Form.Group>
                        {/* <Form.Group controlId="formReviewPhotoUpload" className="mb-3">
                            <Form.Label>Add photos to your review</Form.Label>
                            <Form.Control type="file" multiple accept=".jpg,.jpeg,.png"/>
                        </Form.Group> */}
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
                        <Modal.Title>Thank you for adding a review!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Your review has been added!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={e => this.navigateToHome(e)}>Return to Home Page</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(
    mapStateToProps
)(ReviewSubmissionPage);
