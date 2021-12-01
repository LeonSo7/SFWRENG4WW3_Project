import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../styles/App.css';
import '../styles/pages/SignUpPage.css'
import { connect } from "react-redux";

// Login page
class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            email: "",
            passWord: "",
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

        if (this.state.validated) {
            this.props.updateUser
        }

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
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                required
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

const mapDispatchToProps = dispatch => {
    return {
      updateUser: () => {
        dispatch({ type: "UPDATE_USER", user: user });
      }
    };
  };

  export default connect(
    mapDispatchToProps,
)(LoginPage);
