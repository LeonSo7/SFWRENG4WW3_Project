import { Container, Navbar, Nav } from 'react-bootstrap';
import '../styles/components/CommonHeader.css'
import { IoIceCreamOutline } from 'react-icons/io5';
import {Animated} from "react-animated-css";
import { connect } from "react-redux";
import React, { Component } from 'react';

//Common Header
class CommonHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user.user ? this.props.user.user : {}
        }
    }

    render() {
        return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <Animated animationIn="swing" isVisible={true}>
                        <IoIceCreamOutline size={35}/>
                    </Animated>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Collapsible navigation menu items */}
                <Navbar.Collapse id="basic-navbar-nav">
                {/* Menu items aligned to the left-hand side of the navigation bar */}
            
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* Only allow writing a review and adding a business when user is logged in */}
                    {Object.keys(this.state.user).length !== 0 ?
                        <>
                            <Nav.Link href="/review">Write a Review</Nav.Link>
                            <Nav.Link href="/add-business">Add an Ice Cream Spot</Nav.Link>
                        </>
                        :
                        <div>
                        </div>
                    }      
                </Nav>

                {/* Show login and sign up when the user is not logged in */}
                {Object.keys(this.state.user).length === 0 ?
                    <>
                        <Nav className="justify-content-end"> 
                            <Nav.Link href="login">Log In</Nav.Link>
                        </Nav>

                        <Nav className="justify-content-end"> 
                            <Nav.Link id="signUpLink" href="signup">Sign Up</Nav.Link>
                        </Nav>
                    </>
                :
                <div>

                    <Nav className="justify-content-end"> 
                        <Nav.Link onClick={() => {
                            // Reset the user data to nothing
                            this.setState({
                                user: {}
                            })
                            window.localStorage.clear();
                            this.props.logout()
                        }}
                        >
                            Log Out
                        </Nav.Link>
                    </Nav>
                </div>
                }
                </Navbar.Collapse>
            </Container>
        </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

// Logs out the user
const mapDispatchToProps = dispatch => {
    return {
      logout: () => {
        dispatch({ type: "LOGOUT_USER" });
      }
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommonHeader);