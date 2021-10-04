import React, { Component } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../styles/App.css';
import '../styles/pages/SignUpPage.css'
import CommonHeader from '../components/CommonHeader';
import Footer from '../components/Footer';

class SignUpPage extends Component {
  render() {
    return (
      <div class="wrapper">
        <CommonHeader/>
        <div id="signUpPageTitleDiv">
          <h1>Sign up today!</h1>
        </div>

        <div id="signUpFormDiv">
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First name"/>
                        </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last name"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number"/>
                    <Form.Text className="text-muted">
                        Don't worry! We'll never share your phone number with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        Don't worry! We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter postal code"/>
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

export default SignUpPage;