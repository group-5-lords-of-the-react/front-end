
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Home() {


  const [fiveStarRestaurants, setfiveStarRestaurants] = useState([]);

  const [trendingRestaurants, settrendingRestaurants] = useState([]);
  const [showRes, setshowRes] = useState([]);




  const [RestaurantData, setRestaurantData] = useState([]);
  const [RestaurantData2, setRestaurantData2] = useState([]);
  
  useEffect(() => {
    const idArr = ['12909961', '1181235', '11772898', '4359069', '12434409', '2287470', '2406112', '1135125'];
const idArrall = [];
for (let i = 0; i < idArr.length; i++) {
  setTimeout(() => {
    const serverURL = `http://localhost:3026/getResturauntById?location=${idArr[i]}`;
    fetch(serverURL)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          idArrall.push(data);
          if (idArrall.length === idArr.length) {
            setRestaurantData(idArrall);
          }
        });
      });
  }, 250 * i);
}

  }, []);





  useEffect(() => {
    const idArr = ['1371269', '15079947', '5863643', '2221012', '2386844', '7594311', '18956821', '2429468'];
    const idArrall = [];
    for (let i = 0; i < idArr.length; i++) {
      setTimeout(() => {
        const serverURL = `http://localhost:3026/getResturauntById?location=${idArr[i]}`;
        fetch(serverURL)
          .then((response) => {
            response.json().then((data) => {
              console.log(data);
              idArrall.push(data);
              if (idArrall.length === idArr.length) {
                setRestaurantData2(idArrall);
              }
            });
          });
      }, 250 * i);
    }
  }, []);






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


  const [getYouData, setgetYouData] = useState([]);
  const getYou = () =>{

    const serverURLyou = `http://localhost:3025/?lat=${latitude}&long=${longitude}`;
    
    fetch(serverURLyou)
    .then(response=>{
      response.json().then(data=>{
        console.log(data)
        setgetYouData(data)
      })
    
    })};

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
{/* 
        {getYouData.data.map((item) => {
          if (item.data !== null) {
               
                  return (
                    <>
                      <Link  to={`/TheRestaurant/${item.location_id}`}>
                        <section key={item.name + 1} className='Movie1'>
                          < Card className='card1' key={item.name + 1} >
                            <Card.Img width="200px" className='image1' variant="top" src={item.photo} />
                            <Card.Body>
                              <Card.Title className='text1'>{item.name}</Card.Title>
                             
                            </Card.Body>
                          </Card >
                        </section>
                        
                      </Link>
                    </>
                  )
        
              }
              })} */}
            
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
        <h1>Five star restaurants around the kingdom</h1>
        {RestaurantData.map(item => {
     
          return (
            <>
            <Link  to={`/TheRestaurant/${item.location_id}`}>
              <section key={item.name + 1} className='Movie1'>
                < Card className='card1' key={item.name + 1} >
                  <Card.Img width="200px" className='image1' variant="top" src={item.photo} />
                  <Card.Body>
                    <Card.Title className='text1'>{item.name}</Card.Title>
                   
                  </Card.Body>
                </Card >
              </section>
              
            </Link>
          </>
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
          {RestaurantData2.map(item => {
            return (
              <Link  to={`/TheRestaurant/${item.location_id}`}>
              <section key={item.name + 1} className='Movie1'>
                < Card className='card1' key={item.name + 1} >
                  <Card.Img width="200px" className='image1' variant="top" src={item.photo} />
                  <Card.Body>
                    <Card.Title className='text1'>{item.name}</Card.Title>
                   
                  </Card.Body>
                </Card >
              </section>
              
            </Link>
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