import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';
import Home from "../Home/Home"

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <div id="basic-navbar-nav">
            <ul class="NavCont" >
              <li class="nav-item">
                <Link to="/" class="nav-link logo">HOME</Link>
              </li>
              <li class="nav-item">
              <Link to="/Restaurants"  class="nav-link">Restaurants</Link>
              </li>
              <li class="nav-item">
              <Link to="/FRestaurants"  class="nav-link">Favorites & Reservations</Link>
              </li>
              <li class="nav-item">
              <Link to="/AboutUs"  class="nav-link">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Header;