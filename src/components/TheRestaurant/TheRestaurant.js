import { Link, useParams } from 'react-router-dom'
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Reviews from '../Reviews/Reviews';
import './TheRestaurant.css';
import { Col, Container, Row } from 'react-bootstrap';
import { GiConfirmed } from 'react-icons/gi';
import FRestaurants from '../FRestaurants/FRestaurants';





function TheRestaurant(props) {


  const [RestaurantData, setRestaurantData] = useState([]);
  const [RestaurantImageData, setRestaurantImageData] = useState([]);
  ///////////
  const [clickedFav, setClickedFav] = useState();
  const [booked, setBooked] = useState();
  //////////
  const { id } = useParams()

  const allData = RestaurantData;
  const rName = RestaurantData.name;
  const rImage = RestaurantData.photo;
  const rAddress = RestaurantData.address;
  const LocationID = RestaurantData.location_id;

  useEffect(() => {
    const serverURL = `${process.env.REACT_APP_serverURL}/getResturauntById?location=${id}`;
    axios.get(serverURL)
      .then((response) => {
        console.log(response.data);
        setRestaurantData(response.data);
      });
  }, []);
  

  const restWebsite = RestaurantData.website;
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [reservation, setReservation] = useState('');

  const booking = (event) => {
    event.preventDefault();
    const maxRes = Math.floor(Math.random() * 10) + 1;
    axios.post(`${process.env.REACT_APP_serverURL}/addBooking`, {
      r_location_id: LocationID,
      r_image: rImage,
      r_name: rName,
      r_address: rAddress,
      r_max_reservation: maxRes,
      r_reservation_cost: 20 * maxRes,
      r_reservation_count: 1,
      location_id: LocationID,
      r_reservation_date: date,
      r_reservation_time: time,
      no_people_reservation: numberOfPeople,


    })

      .then((response) => {
        console.log(response);
        setReservation(response.data);
        setDate(response.data.r_reservation_date);
        setTime(response.data.r_reservation_time);
        setNumberOfPeople(response.data.no_people_reservation);
        setBooked(true)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fundeleteBook = (item) => {

    const serverURL = `${process.env.REACT_APP_serverURL}/deleteBooking/${item}`;
    axios.delete(serverURL)
      .then(response => {
        console.log(response.data)
        setBooked(false)

      })
      .catch((error) => {
        console.log(error)
      })

  }



  const addFavorite = () => {

    console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
    console.log(RestaurantData.photo, "wwwwwwwwwwwwwwwwww");

    const maxRes = Math.floor(Math.random() * 10) + 1;
    axios.post(`${process.env.REACT_APP_serverURL}/addFavourite`, {
      r_location_id: LocationID,
      r_image: RestaurantData.photo,

      r_name: rName,
      r_address: rAddress,
      r_max_reservation: maxRes,
      r_reservation_cost: 20 * maxRes,
      r_reservation_count: 1,
      location_id: LocationID,

    })
      .then((response) => {
        console.log(response);
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        setClickedFav(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteRestourant = async (LocationID) => {
    const serverURL = `${process.env.REACT_APP_serverURL}/deleteFavourite/${LocationID}`;

    await axios.delete(serverURL)
      .then(response => {
        setClickedFav(false);

      })
      .catch(error => {
        console.log(error);
      });
  };
  //////////////check if it exist in fav or not
  const checkFavExist = async () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/checkFavExist/${id}`
    await axios.get(serverURL)
      .then(response => {
        console.log(response.data, "favvvvvvv");
        if (response.data)
          setClickedFav(response.data)

      })
      .catch(error => {
        console.log(error);
      });


  }
  useEffect(() => {
    checkFavExist();
  }, []);



  //////////////check if it exist in booking list
  const checkBookExist = async () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/checkBookExist/${id}`
    await axios.get(serverURL)
      .then(response => {
        console.log(response.data, "boooooking");
        if (response.data)
          setBooked(response.data)

      })
      .catch(error => {
        console.log(error);
      });


  }
  useEffect(() => {
    checkBookExist();
  }, []);


  return (
    <>
    
    
            <div className='restaurant-header'>
            <div className='restaurant-title'>
              <h1> {rName}</h1>
            </div>
            <div className='fav-button-div'>
              {clickedFav ? <button className='bigger-heart bigger-heart-clicked' onClick={() => deleteRestourant(LocationID)}> <span className='change-red-to-gold'>&#x2665;</span></button> :
                <button className='bigger-heart ' variant="primary" onClick={() => { addFavorite() }}  >&#x2661;</button>
              }
            </div>
          </div>
      <div className='main-div'>
      
        <div className="page-left-side">
          
          <div className='restaurant-img-website-rating'>
            {RestaurantImageData.map((item) => {
              if (item !== null) {
                return (
                  <>
                    < Card id='restaurant-information' key={item.name + 1} >
                      <Card.Img width="200px" variant="top" src={item.photo} />
                    </Card >

                  </>
                )
              }
            })}
            <div className='left-side-details'>
              <div className='restaurant-img-name'>
                <Card>
                  <Card.Img className='image1' variant="top" src={RestaurantData.photo} />
                  <Card.Body>
                    <Card.Title className='r-name'>{RestaurantData.name}</Card.Title>
                    <Card.Text>
                      {RestaurantData.address}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className='restaurant-website-rating'>
                <Card className='restaurant-website-card'>
                  <Card.Body>
                    <Card.Text>
                      <a className='restaurant-website' href={restWebsite}  target="_blank">OUR WEBSITE</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className='restaurant-rating-card'>
                  <Card.Body>
                    <Card.Text>
                      Rating: {RestaurantData.rating}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <Card className='restaurant-description'>
                <Card.Body>
                  <Card.Text>
                    Description: {RestaurantData.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div>
          </div>
          <hr className='lineInaftermain' />
        </div>
        
        <div className='page-right-side'>
          <Container fluid md={4}  >
            {booked ? (
              <Row>
                <Col md={12}>
                  <Row>
                    <Col>
                      <p className='bookCof'>Reservation confirmed!   <GiConfirmed /></p>
                      <p className='bookCof2'>please go to <Link to="/FRestaurants" id='fav-reserve-link'>Favorites & Reservations</Link> page to see your Resrvation details </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                  <Button onClick={() => fundeleteBook(LocationID)} className="deleteRes" >Delete booking</Button>
                  </Col>
                  </Row>
                 
                </Col>
              </Row>
            ) : (
              <Row>
              <Col md={12} className='resBackground'>
                <Row>
                  <Col className='Resfirst'>RESERVATION ___________</Col>
                </Row>
                <Row>
                  <Col className='ResHeader  '>Book a Table</Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                  <Col>
                    <form onSubmit={booking} className="text-center">
                      <Row>
                        <Col md={12}>
                          <input type="date" value={date} className='resInput' onChange={(event) => setDate(event.target.value)} />
                        </Col>
                      </Row>
                      <input type="time" value={time} className='resInput' onChange={(event) => setTime(event.target.value)} />
                      <Row>
                        <Col md={12}>
                          <input type="number" placeholder="Enter the number of guests" className='resInput' value={numberOfPeople} onChange={(event) => setNumberOfPeople(event.target.value)} />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={10} className="mx-auto">
                          <Button type="submit" id='custom-button1'>Book Now</Button>
                        </Col>
                      </Row>
                    </form>
                  </Col>
                </Row>
              </Col>
            </Row>
            
            )}
             <hr className='lineIn' />
            <div className="review-div">
              <Reviews location_id={id} />
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default TheRestaurant;



