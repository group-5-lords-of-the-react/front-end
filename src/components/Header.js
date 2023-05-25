import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link href="/" >LOGO</Nav.Link>
                            <Nav.Link href="/Restaurants">Restaurants</Nav.Link>
                            <Nav.Link href="FRestaurants">FRestaurants</Nav.Link>

                            
                           

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;