import { Container, Navbar, Nav } from 'react-bootstrap';
import '../styles/components/CommonHeader.css'
import IoIceCreamOutline from 'react-icons/io5';

const CommonHeader = () => (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/"><IoIceCreamOutline size={35}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/review">Write a Review</Nav.Link>
            </Nav>
            <Nav className="justify-content-end"> 
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