
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TheRestaurant from './TheRestaurant';




function Restaurants() {
  const [ammanData, setAmmanData] = useState([]);
  const [irbidData, setIrbidData] = useState([]);
  const [aqabaData, setAqabaData] = useState([]);
  const [wadiRummData, setwadiRummData] = useState([]);
  const [petraData, setpetraData] = useState([]);





  const [clickedrestaurant, setclickedrestaurant] = useState({});

  const restaurantShow = (item) => {
     
    setclickedrestaurant(item);
  }





  useEffect(() => {
    const serverURL = `http://localhost:3027/?lat=31.945335&long=35.886671`;
    fetch(serverURL)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setAmmanData(data);
        });
      });

    const serverURL2 = `http://localhost:3027/?lat=32.551445&long=35.851479`;
    fetch(serverURL2)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setIrbidData(data);
        });
      });

    const serverURL3 = `http://localhost:3027/?lat=29.52667&long=35.00778`;
    fetch(serverURL3)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setAqabaData(data);
        });
      });



    const serverURL4 = `http://localhost:3027/?lat=29.542474&long=35.394125`;
    fetch(serverURL4)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setwadiRummData(data);
        });
      });



          const serverURL5 = `http://localhost:3027/?lat=30.324270&long=35.462641`;
          fetch(serverURL5)
            .then((response) => {
              response.json().then((data) => {
                console.log(data);
                setpetraData(data);

              });
            });



        }, []);

  const states = ['Amman', 'Irbid', 'Aqaba', 'wadiRumm', 'petra'];
  const [selectedState, setSelectedState] = useState(states[0]);
  const restaurants = [
    { data: ammanData, state: 'Amman' },
    { data: irbidData, state: 'Irbid' },
    { data: aqabaData, state: 'Aqaba' },
    { data: wadiRummData, state: 'wadiRumm' },
    { data: petraData, state: 'petra' },
  ];

  const filteredData = restaurants.filter((restaurant) => restaurant.state === selectedState);



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
        <button onClick={() => setSelectedState('wadiRumm')}>{'wadiRumm'}</button>
        <button onClick={() => setSelectedState('petra')}>{'petra'}</button>
      </div>

      <div>
        {filteredData.map((restaurant) => {

          return (
            <>
            {/* <Link><TheRestaurant  clickedrestaurant={clickedrestaurant}/></Link> */}

              {restaurant.data.map((item) => {
                if (item !== null) {
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