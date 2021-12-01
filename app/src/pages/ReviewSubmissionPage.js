import React, { Component } from 'react';
// import { Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import { Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import '../styles/App.css';
import '../styles/pages/ReviewSubmissionPage.css'
import { Animated } from "react-animated-css";
import axios from 'axios';
import { FiBluetooth } from 'react-icons/fi';

// Form to submit a review for a business 
class ReviewSubmissionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            validated: false,
            businessOptions: [],
            selectedBusinessOption: null, // id of selected business,
            submitted: false
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

    // Handle submission button click and validation state
    handleSubmit(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        this.setState({
            validated: true,
            submitted: true
        });
    };

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
                                />
                                <Form.Check
                                    inline
                                    label="2"
                                    name="ratingRadioGroup"
                                    id={`inline-radio-2`}
                                    type={'radio'}
                                />
                                <Form.Check
                                    inline
                                    label="3"
                                    name="ratingRadioGroup"
                                    id={`inline-radio-3`}
                                    type={'radio'}
                                />
                                <Form.Check
                                    inline
                                    label="4"
                                    name="ratingRadioGroup"
                                    id={`inline-radio-4`}
                                    type={'radio'}
                                />
                                <Form.Check
                                    inline
                                    label="5"
                                    name="ratingRadioGroup"
                                    id={`inline-radio-5`}
                                    type={'radio'}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formReviewTitle">
                            <Form.Label>Add a title</Form.Label>
                            <Form.Control type="text" placeholder="Review title" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formReviewBody">
                            <Form.Label>Add a written review</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="What did you like or dislike? How did it taste?"
                                required
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
            </div>
        );
    }
}

export default ReviewSubmissionPage;