import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


function Header() {
    const [location, setLocation] = useState(sessionStorage.getItem('location'));

    const updateLocation = (location) => {
        sessionStorage.setItem('location', location);
        setLocation(location);
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <Link to="/" className='remove-decoration'>
                    <Navbar.Brand>
                        BTS Store
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link color={location == 'LA' ? '#800080' : ''} className={location === 'LA' ? 'active-city' : ''} onClick={() => updateLocation('LA')}>Los Angeles</Nav.Link>
                        <Nav.Link className={location === 'Mex' ? 'active-city' : ''} onClick={() => updateLocation('Mex')}>Mexico</Nav.Link>
                        <Nav.Link className={location === 'NYC' ? 'active-city' : ''} onClick={() => updateLocation('NYC')}>NYC</Nav.Link>
                        <Nav.Link className={location === 'Canada' ? 'active-city' : ''} onClick={() => updateLocation('Canada')}>Canada</Nav.Link>
                    </Nav>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Link to="/cart">
                            <FontAwesomeIcon icon="cart-shopping" color="purple" />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;