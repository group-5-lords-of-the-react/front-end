import { Link, useParams } from 'react-router-dom'
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Reviews from '../Reviews/Reviews';
import './TheRestaurant.css';




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
    fetch(serverURL)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setRestaurantData(data);
        });
      });


    const serverURL2 = `${process.env.REACT_APP_serverURL}/getImageId?location=${id}`;
    fetch(serverURL2)
      .then((response2) => {
        response2.json().then((data) => {
          console.log(data);
          setRestaurantImageData(data);
        });
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
      <section id="favourite-button">
        {clickedFav ? <Button className='bigger-heart bigger-heart-clicked' onClick={() => deleteRestourant(LocationID)}>&#x2764;</Button> :
          <Button className='bigger-heart ' variant="primary" onClick={() => { addFavorite() }}  >&#x2661;</Button>
        }
      </section>
      </div>
      <section className="section1">
        {RestaurantImageData.map((item) => {
          if (item !== null) {
            return (
              <>

                <section key={item.photo + 1} >
                  < Card id='restaurant-information'  key={item.name + 1} >
                    <Card.Img width="200px" variant="top" src={item.photo} />
                  </Card >
                </section>


              </>
            )
          }

        })}

      </section>

      <section id="section2">
        <Card>

          <Card.Img width="1000px" className='image1' variant="top" src={RestaurantData.photo} />

          <Card.Body>
            <Card.Title>{RestaurantData.name}</Card.Title>
            <Card.Text>
              {RestaurantData.address}
            </Card.Text>
          </Card.Body>
        </Card>

      </section>


      <section id="section3">

        <Card >
          <Card.Body>
            <Card.Text>
              <a className='restaurant-website' href={restWebsite}>OUR WEBSITE</a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card >
          <Card.Body>
            <Card.Text>
              Description: {RestaurantData.description}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card >
          <Card.Body>
            <Card.Text>
              Rating: {RestaurantData.rating}
            </Card.Text>
          </Card.Body>
        </Card>
      </section>

      <div>
        {booked ? (
          <div>
            <p>Reservation confirmed!</p>
            <p>go to favorite page to see your Resrvation details</p>
           
            <Button onClick={() => fundeleteBook(LocationID)}>Delete booking</Button>
          </div>
        ) : (
          <div className='form-review-div'>
          <div className='form-div'>
          <form onSubmit={booking}>
            <label className='form-label'>
              Date:   
              <input type="date" value={date} className='form-input form-input-date' onChange={(event) => setDate(event.target.value)} />
            </label>
            <br />
            <label className='form-label'>
              Time:   
              <input type="time" value={time} className='form-input-time form-input' onChange={(event) => setTime(event.target.value)} />
            </label>
            <br />
            <label className='form-label'>
              No.of people:
              <input type="number" className='form-input-peopleNo form-input' value={numberOfPeople} onChange={(event) => setNumberOfPeople(event.target.value)} />
            </label>
            <br />
            <Button type="submit" className='form-button'>Book Now</Button>
          </form>
          </div>
          <div className="review-div">
        <Reviews location_id={id} />
      </div>
          </div>
        )}
      </div>
    </>
  )
}

export default TheRestaurant;



