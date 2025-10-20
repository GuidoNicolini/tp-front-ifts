import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function NavScrollExample() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand>Guido Nicolini</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <LinkContainer to="/sobre-mi"><Nav.Link>Sobre mí</Nav.Link></LinkContainer>
                        <LinkContainer to="/experiencia"><Nav.Link>Experiencia</Nav.Link></LinkContainer>
                        <LinkContainer to="/educacion"><Nav.Link>Educación</Nav.Link></LinkContainer>
                        <LinkContainer to="/contacto"><Nav.Link>Contacto</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;