
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TheRestaurant from '../TheRestaurant/TheRestaurant';
import "./Restaurants.css";




function Restaurants() {
  const [ammanData, setAmmanData] = useState([]);
  const [irbidData, setIrbidData] = useState([]);
  const [aqabaData, setAqabaData] = useState([]);
  const [wadiRummData, setwadiRummData] = useState([]);
  const [petraData, setpetraData] = useState([]);





  // const [clickedrestaurant, setclickedrestaurant] = useState({});

  // const restaurantShow = (item) => {

  //   setclickedrestaurant(item);
  // }





  useEffect(() => {
    const serverURL = `${process.env.REACT_APP_serverURL}/?lat=31.945335&long=35.886671`;
    fetch(serverURL)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setAmmanData(data);
        });
      });

    const serverURL2 = `${process.env.REACT_APP_serverURL}/?lat=32.551445&long=35.851479`;
    fetch(serverURL2)
      .then((response) => {
        response.json().then((data) => {
          console.log(data, "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
          setIrbidData(data);
        });
      });

    const serverURL3 = `${process.env.REACT_APP_serverURL}/?lat=29.52667&long=35.00778`;
    fetch(serverURL3)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setAqabaData(data);
        });
      });



    const serverURL4 = `${process.env.REACT_APP_serverURL}/?lat=29.542474&long=35.394125`;
    fetch(serverURL4)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setwadiRummData(data);
        });
      });



    const serverURL5 = `${process.env.REACT_APP_serverURL}/?lat=30.324270&long=35.462641`;
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



      <div class="divemainR">
        <Link to="/">
          <Button id="backhome" type="submit">« Home</Button>
        </Link>

        <p class="divemainRTop">Restaurants in {selectedState}</p>


        <div class="divall">
          <button class="onClickD" onClick={() => setSelectedState('Amman')}>{'Amman'}</button>
          <button class="onClickD" onClick={() => setSelectedState('Irbid')}>{'Irbid'}</button>
          <button class="onClickD" onClick={() => setSelectedState('Aqaba')}>{'Aqaba'}</button>
          <button class="onClickD" onClick={() => setSelectedState('wadiRumm')}>{'wadiRumm'}</button>
          <button class="onClickD" onClick={() => setSelectedState('petra')}>{'petra'}</button>
        </div>

        <div class="divCardR" >
          {filteredData.map((restaurant) => {

            return (
              <>

                {restaurant.data.map((item) => {
                  if (item !== null) {
                    return (
                      <>
                        <Link class="sectioncardR" to={`/TheRestaurant/${item.location_id}`}>
                          <section class="sectioncardmoveR" key={item.name + 1} >
                            < div class="divcard" key={item.name + 1} >
                              <img class="imgcardR" src={item.photo} />
                              <p className="namecardR" >{item.name}</p>

                            </div >
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
        
        <section class='adR1main'>

          <dive class='adR1main2'>
            <p class="adR1Text">Summer Knight</p>
            <p class="adR2Text">Experience the vibrant nightlife of Jordan and indulge in delicious food at some of the best restaurants in the area. From traditional Jordanian cuisine to international dishes, there’s something for everyone. Whether you’re looking for a romantic night out or a fun evening with friends, Jordan has it all. Click here to find out more about the restaurants and nightlife in Jordan.</p>
            <a href="./Restaurants">
              <p class="adR1BUT">Discover</p>
            </a>
          </dive>
          <div id='backgadR1'>
          </div>
        </section>
      
      </div>
    </>
  )
}

export default Restaurants;