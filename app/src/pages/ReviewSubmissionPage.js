import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../styles/App.css';
import '../styles/pages/ReviewSubmissionPage.css'
import CommonHeader from '../components/CommonHeader';
import Footer from '../components/Footer';

class ReviewSubmissionPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <CommonHeader/>
        
        <div id="reviewSubmissionPageTitleDiv">
          <h1>Write your review!</h1>
        </div>

        <div id="reviewFormDiv">
            <Form>
                <Form.Group className="mb-3" controlId="formReviewRating">
                    <Form.Label>Select Rating</Form.Label>
                    <div key={`inline-radio`} className="mb-3">
                        <Form.Check
                            inline
                            label="1"
                            name="ratingRadioGroup"
                            id={`inline-radio-1`}
                            type={'radio'}
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
                    <Form.Control type="text" placeholder="Review title"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formReviewBody">
                <Form.Label>Add a written review</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="What did you like or dislike? How did it taste?"/>
                </Form.Group>
                <Form.Group controlId="formReviewPhotoUpload" className="mb-3">
                    <Form.Label>Add photos to your review</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        <Footer/>
    </div>
    );
  }
}

export default ReviewSubmissionPage;