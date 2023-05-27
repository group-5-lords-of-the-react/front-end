import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav"  >
                    <Nav className="me-auto" bg="rad" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', fontSize:'1.2rem' }}>
                            <Nav.Link href="/" >LOGO</Nav.Link>
                            <Nav.Link href="/Restaurants">Restaurants</Nav.Link>
                            <Nav.Link href="FRestaurants">FRestaurants</Nav.Link>

                            
                           

                            <Nav.Link href="Booking">Booking</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;