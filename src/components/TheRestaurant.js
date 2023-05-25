

import { Link, useParams } from 'react-router-dom'
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';








function TheRestaurant(props) {


  const [RestaurantData, setRestaurantData] = useState([]);

  const { id } = useParams()
  
  

  useEffect(() => {
    const serverURL = `http://localhost:3026/getResturauntById?location=${id}`;
    fetch(serverURL)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setRestaurantData(data);
        });
      });

     }, []);

    return (
        <>
            <h1> TheRestaurant</h1>
          
       <section id="section1">
       <Card style={{ width: '18rem' }}>
       
            <Card.Img variant="top" src={RestaurantData.photo} />
         
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
           
        </>
    )
}

export default TheRestaurant;
