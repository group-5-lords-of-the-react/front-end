import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
    <>
    <nav class="navbar navbar-expand-lg">
  <div class="container">
    <div id="basic-navbar-nav">
      <ul class="NavCont" >
        <li class="nav-item">
          <a href="/" class="nav-link logo">LOGO</a>
        </li>
        <li class="nav-item">
          <a href="/Restaurants" class="nav-link">Restaurants</a>
        </li>
        <li class="nav-item">
          <a href="/FRestaurants" class="nav-link">FRestaurants</a>
        </li>
        <li class="nav-item">
          <a href="/AboutUs" class="nav-link">AboutUs</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}

export default Header;
