import React, { Component } from 'react';
import { Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import '../styles/App.css';
import '../styles/pages/ReviewSubmissionPage.css'
import {Animated} from "react-animated-css";

// Form to submit a review for a business 
class ReviewSubmissionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            searchByRatingDropdownText: "Select a store",
            // Replace with all of the stores queried from the db
            allBusinesses: ["Emily's", "Fruit"]
        };
    }

    // Handle user rating selection for search by rating dropdown
    handleRatingSelect(e) {
        this.setState({
            searchByRatingDropdownText: e.target.textContent
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
            validated: true
        });
    };

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
                        <div>Select a store to review</div>
                        <DropdownButton id="filterRatingDropDown" size="med" title={this.state.searchByRatingDropdownText}>
                        {this.state.allBusinesses.length > 0 ?
                            Object.values(this.state.allBusinesses).map(info => (
                                <Dropdown.Item href="#">
                                    <div onClick={(e) => this.handleRatingSelect(e)}>{info}</div>
                                </Dropdown.Item>
                            ))
                          :
                          <div>
                          </div>
                        }
                        </DropdownButton>
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
                            <Form.Control type="text" placeholder="Review title" required/>
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
                        <Form.Group controlId="formReviewPhotoUpload" className="mb-3">
                            <Form.Label>Add photos to your review</Form.Label>
                            <Form.Control type="file" multiple accept=".jpg,.jpeg,.png"/>
                        </Form.Group>
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