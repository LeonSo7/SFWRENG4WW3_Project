import { Container, Navbar, Nav } from 'react-bootstrap';

const CommonHeader = () => (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
                <Nav.Link href="signup">Sign Up</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default CommonHeader;