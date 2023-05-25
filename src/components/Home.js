
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


{/* <link path="/clicedresturant" path={<Resturant}> */}

function Home() {


  const [fiveStarRestaurants, setfiveStarRestaurants] = useState([]);

  const [trendingRestaurants, settrendingRestaurants] = useState([]);
  const [showRes, setshowRes] = useState([]);



  //Sidebar-start------------------------------------------------------------------------------------
  const [email, setEmail] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };
  //Sidebar-end------------------------------------------------------------------------------------




  return (
    <>


      <h1>Home</h1>
      <section class="section0">
        <div className="sidebar">
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />

            <button type="button" onClick={getLocation}>Get Location</button>

            {latitude && longitude && (
              <p>Latitude: {latitude}, Longitude: {longitude}</p>
            )}
          </form>
        </div>

      </section>


      <section class="section1">
        <Card class="Card1" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Link to="./Restaurants">
              <Button type="submit">Button</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card class="Card2" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Link to="./Restaurants">
              <Button type="submit">Button</Button>
            </Link>
          </Card.Body>
        </Card>
        <div>
          <Card class="Card3" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Link to="./Restaurants">
              <Button type="submit">Button</Button>
            </Link>
            </Card.Body>
          </Card>
          <Card class="Card4" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Link to="./Restaurants">
              <Button type="submit">Button</Button>
            </Link>
            </Card.Body>
          </Card>
        </div>
      </section>

      <section class="section2">

        {fiveStarRestaurants.map(item => {
          return (
            <link onClick={() => { showRes(item) }}>
              <Col>
                <Card>
                  <Card.Img variant="top" src={item.images[0]} height="250px" width="250px" />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </link>
          )
        })}
      </section>

      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="holder.js/171x180"
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>

      <section class="section3">
        <Row xs={1} md={3} className="g-4">
          {trendingRestaurants.map(item => {
            return (
              <link onClick={() => { showRes(item) }}>
                <Col>
                  <Card>
                    <Card.Img variant="top" src={item.images[0]} height="250px" width="250px" />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </link>
            )
          })}
        </Row>
      </section>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="holder.js/171x180"
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>

      <section class="section4">
        <Button href="#" type="submit">About</Button>{' '}
        <Button href="#" type="submit">News</Button>{' '}
        <Button href="#" type="submit">Contact Us</Button>
      </section>
    </>
  )
}

export default Home;