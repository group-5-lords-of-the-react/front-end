

import { Link, useParams } from 'react-router-dom'
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Reviews from '../Reviews/Reviews';





function TheRestaurant(props) {


  const [RestaurantData, setRestaurantData] = useState([]);
  const [RestaurantImageData, setRestaurantImageData] = useState([]);
  const { id } = useParams()
  
  const allData = RestaurantData;
  const rName = RestaurantData.name;
  const rImage = RestaurantData.photo;
  const rAddress = RestaurantData.address;
  const LocationID = RestaurantData.location_id;

  useEffect(() => {
    const serverURL = `http://localhost:3003/getResturauntById?location=${id}`;
    fetch(serverURL)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setRestaurantData(data);
        });
      });


      const serverURL2 = `http://localhost:3003/getImageId?location=${id}`;
      fetch(serverURL2)
        .then((response2) => {
          response2.json().then((data) => {
            console.log(data);
            setRestaurantImageData(data);
          });
        });




     }, []);



     const [date, setDate] = useState('');
     const [time, setTime] = useState('');
     const [numberOfPeople, setNumberOfPeople] = useState('');
     const [reservation, setReservation] = useState(null);
   
     const booking = (event) => {
       event.preventDefault();
      const maxRes = Math.floor(Math.random() * 10) + 1;
        axios.post('http://localhost:3003/addBooking', { 
        r_location_id:LocationID,
         r_image:rImage,
         r_name:rName,
         r_address:rAddress,
         r_max_reservation: maxRes,
         r_reservation_cost: 20 * maxRes,
         r_reservation_count: 1,
         location_id:LocationID,
         r_reservation_date:date,
         r_reservation_time:time,
         no_people_reservation:numberOfPeople,
          
         
       })
         .then((response) => {
           console.log(response);
           setReservation(response.data);
           setDate('');
           setTime('');
           setNumberOfPeople('');
         })
         .catch((error) => {
           console.log(error);
         });
     };
   


    
 

    const addFavorite = () => {

      console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
      console.log(RestaurantData.photo,"wwwwwwwwwwwwwwwwww");

       const maxRes = Math.floor(Math.random() * 10) + 1;
         axios.post('http://localhost:3003/addFavourite', { 
         r_location_id:LocationID,
          r_image:RestaurantData.photo,

          r_name:rName,
          r_address:rAddress,
          r_max_reservation: maxRes,
          r_reservation_cost: 20 * maxRes,
          r_reservation_count: 1,
          location_id:LocationID,
  
        })
          .then((response) => {
            console.log(response);
            console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
          })
          .catch((error) => {
            console.log(error);
          });
      };
  


    return (
        <>
      
            <h1> TheRestaurant</h1>
          


            <section id="section0">
       
            {RestaurantImageData.map((item) => {
                if (item !== null) {
                  return (
                    <>

                        <section key={item.photo + 1} className='Movie1'>
                          < Card className='card1' key={item.name + 1} >
                            <Card.Img width="200px" className='image1' variant="top" src={item.photo} />
                          </Card >
                        </section>
                        
                      
                    </>
                  )
                }
                
              })}

       </section>

       <section id="section1">
       <Card style={{ width: '18rem' }}>
       
            <Card.Img width="1000px" className='image1' variant="top" src={RestaurantData.photo} />
         
      <Card.Body>
        <Card.Title>{RestaurantData.name}</Card.Title>
        <Card.Text>
        {RestaurantData.address}

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

       </section>
      
       
       <section id="section2">

       <Card style={{ width: '8rem' }}>
      <Card.Body>
        <Card.Text>
        `website+{RestaurantData.website}`
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '8rem' }}>
      <Card.Body>
        <Card.Text>
        `description+{RestaurantData.description}`
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '8rem' }}>
      <Card.Body>
        <Card.Text>
        `rating+{RestaurantData.rating}`
        </Card.Text>
      </Card.Body>
    </Card>
       </section>
           
       <div>
      {reservation ? (
        <div>
          <p>Reservation confirmed!</p>
          <p>Date: {reservation.date}</p>
          <p>Time: {reservation.time}</p>
          <p>Number of people: {reservation.numberOfPeople}</p>
        </div>
      ) : (
        <form onSubmit={booking}>
          <label>
            Date:
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </label>
          <br />
          <label>
            Time:
            <input type="time" value={time} onChange={(event) => setTime(event.target.value)} />
          </label>
          <br />
          <label>
            Number of people:
            <input type="number" value={numberOfPeople} onChange={(event) => setNumberOfPeople(event.target.value)} />
          </label>
          <br />
          <button type="submit">Book</button>
        </form>
      )}
    </div>


    <section id="section3">

 <Button variant="primary" onClick={()=>{addFavorite()}}  >add to the favorite list</Button> 

    </section>




    <section id="section4">
                <Reviews location_id={id} />
            </section>
    
        </>
    )
}

export default TheRestaurant;



