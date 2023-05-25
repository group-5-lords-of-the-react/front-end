
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Restaurants() {
  const [ammanData, setAmmanData] = useState([]);
  const [irbidData, setIrbidData] = useState([]);
  const [aqabaData, setAqabaData] = useState([]);

  useEffect(() => {
    const serverURL = `http://localhost:3011/?lat=31.945335&long=35.886671`;
    fetch(serverURL)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setAmmanData(data);
        });
      });

    const serverURL2 = `http://localhost:3011/?lat=32.551445&long=35.851479`;
    fetch(serverURL2)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setIrbidData(data);
        });
      });

    const serverURL3 = `http://localhost:3011/?lat=29.52667&long=35.00778`;
    fetch(serverURL3)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setAqabaData(data);
        });
      });
  }, []);

  const states = ['Amman', 'Irbid', 'Aqaba'];
  const [selectedState, setSelectedState] = useState(states[0]);
  const restaurants = [
    { data: ammanData, state: 'Amman' },
    { data: irbidData, state: 'Irbid' },
    { data: aqabaData, state: 'Aqaba' }
  ];

  const filteredData = restaurants.filter((restaurant) => restaurant.state === selectedState);

  // const path = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <h1>Restaurants</h1>
      <Link to="/">
        <Button type="submit">Home</Button>
      </Link>
       <h1>{selectedState}</h1>
      <div>
        <button onClick={() => setSelectedState('Amman')}>{'Amman'}</button>
        <button onClick={() => setSelectedState('Irbid')}>{'Irbid'}</button>
        <button onClick={() => setSelectedState('Aqaba')}>{'Aqaba'}</button>
      </div>

      <div>
        {filteredData.map((restaurant) => {

          return (
            <>
              {restaurant.data.map((item) => {
                if(item !== null){

                
                return (
                  <section key={item.name+1} className='Movie1'>
                    < Card className='card1' key={item.name+1} >
                      <Card.Img width="200px" className='image1' variant="top" src={ item.photo} />
                      <Card.Body>
                        <Card.Title className='text1'>{item.name}</Card.Title>

                      </Card.Body>
                    </Card >
                  </section>


                )
              }
              })}




            </>
          );
        }
        )}
      </div>

    </>
  )
}

export default Restaurants;