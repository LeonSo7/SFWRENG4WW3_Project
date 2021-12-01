import { Container, Navbar, Nav } from 'react-bootstrap';
import '../styles/components/CommonHeader.css'
import { IoIceCreamOutline } from 'react-icons/io5';
import {Animated} from "react-animated-css";
import { connect } from "react-redux";

//Common Header
const CommonHeader = () => (
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
                <Nav.Link href="/review">Write a Review</Nav.Link>
                <Nav.Link href="/add-business">Add an Ice Cream Spot</Nav.Link>
            </Nav>
            {/* Menu items aligned to the right-hand side of the navigation bar */}
            <Nav className="justify-content-end"> 
                <Nav.Link href="login">Log In</Nav.Link>
            </Nav>
            <Nav className="justify-content-end"> 
                <Nav.Link id="signUpLink" href="signup">Sign Up</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

const mapStateToProps = state => {
    console.log("Header", state)
    return {
        user: state.user
    };
};

export default connect(
    mapStateToProps,
)(CommonHeader);