import { Container, Navbar, Nav } from 'react-bootstrap';
import '../styles/components/CommonHeader.css'
import { IoIceCreamOutline } from 'react-icons/io5';

const CommonHeader = () => (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/"><IoIceCreamOutline size={35}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {/* Collapsible navigation menu items */}
            <Navbar.Collapse id="basic-navbar-nav">
            {/* Menu items aligned to the left-hand side of the navigation bar */}
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/review">Write a Review</Nav.Link>
                <Nav.Link href="/add-business">Add an Icecream Spot</Nav.Link>
            </Nav>
            {/* Menu items aligned to the right-hand side of the navigation bar */}
            <Nav className="justify-content-end"> 
                {/* TODO: Currently a broken link -- page to be implemented. */}
                <Nav.Link href="#">Log In</Nav.Link>
            </Nav>
            <Nav className="justify-content-end"> 
                <Nav.Link id="signUpLink" href="signup">Sign Up</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default CommonHeader;