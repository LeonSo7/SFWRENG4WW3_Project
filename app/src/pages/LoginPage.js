import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../styles/App.css';
import '../styles/pages/SignUpPage.css'
import axios from 'axios';

// Login page
class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            emailInputValue: "",
            passWordInputValue: "",
        };
    }

    // Redirect to home page after successful login
    navigateToLogin() {
        window.location.href = '/'
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

            // HTTP POST request to add user to database
            let body = {
                email: this.state.emailInputValue.toLowerCase(),
                password: this.state.passwordInputValue
            }
            axios({
                method: 'post',
                url: 'http://localhost:3001/user/auth',
                data: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                }
            }).then((res) => {
                if (res.status == "200") {
                    console.log(res.data);
                    // TODO Store user data here to state
                    this.navigateToLogin();
                }
            });
        }

        this.setState({
            validated: true
        });
    };

    handleEmailInput(e) {
        this.setState({
            emailInputValue: e.target.value
        });
    };

    handlePasswordInput(e) {
        this.setState({
            passwordInputValue: e.target.value
        });
    };

    render() {
        return (
            <div class="wrapper">
                <div id="signUpPageTitleDiv">
                    <h1>Login</h1>
                </div>

                {/* Login Page */}
                <div id="signUpFormDiv">
                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                onChange={(e) => this.handleEmailInput(e)}
                                value={this.state.emailInputValue}
                            />
                        </Form.Group>
                        <Form.Group noValidate className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                required
                                onChange={(e) => this.handlePasswordInput(e)}
                                value={this.state.passwordInputValue}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default LoginPage;
