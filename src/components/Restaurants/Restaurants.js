
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TheRestaurant from '../TheRestaurant/TheRestaurant';
import "./Restaurants.css";
import axios from 'axios';



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
    axios.get(serverURL)
      .then((response) => {
        console.log(response.data);
        setAmmanData(response.data);
      });
  
    const serverURL2 = `${process.env.REACT_APP_serverURL}/?lat=32.551445&long=35.851479`;
    axios.get(serverURL2)
      .then((response) => {
        console.log(response.data);
        setIrbidData(response.data);
      });
  
    const serverURL3 = `${process.env.REACT_APP_serverURL}/?lat=29.52667&long=35.00778`;
    axios.get(serverURL3)
      .then((response) => {
        console.log(response.data);
        setAqabaData(response.data);
      });
  
    const serverURL4 = `${process.env.REACT_APP_serverURL}/?lat=29.542474&long=35.394125`;
    axios.get(serverURL4)
      .then((response) => {
        console.log(response.data);
        setwadiRummData(response.data);
      });
  
    const serverURL5 = `${process.env.REACT_APP_serverURL}/?lat=30.324270&long=35.462641`;
    axios.get(serverURL5)
      .then((response) => {
        console.log(response.data);
        setpetraData(response.data);
      });
  }, []);
  


  const states = ['Amman', 'Irbid', 'Aqaba', 'wadiRumm', 'petra', "By location"];
  const [aroundYouData, setaroundYouData] = useState([]);
  const [selectedState, setSelectedState] = useState(states[0]);
  const restaurants = [
    { data: ammanData, state: 'Amman' },
    { data: irbidData, state: 'Irbid' },
    { data: aqabaData, state: 'Aqaba' },
    { data: wadiRummData, state: 'wadiRumm' },
    { data: petraData, state: 'petra' },
    { data: aroundYouData, state: 'By location' },
  ];

  const filteredData = restaurants.filter((restaurant) => restaurant.state === selectedState);


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

    setSelectedState('By location')
  };

  const showPosition = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const serverURL = `${process.env.REACT_APP_serverURL}/?lat=${latitude}&long=${longitude}`;
    await axios.get(serverURL)
      .then((response) => {
        console.log(response.data);
        setaroundYouData(response.data);
      });
  };



  return (
    

<div className='Cont'>

      <div class="divemainR">

        <p class="divemainRTop">Restaurants in {selectedState}</p>


        <div class="divall">
          <button class="onClickD" onClick={() => setSelectedState('Amman')}>{'Amman'}</button>
          <button class="onClickD" onClick={() => setSelectedState('Irbid')}>{'Irbid'}</button>
          <button class="onClickD" onClick={() => setSelectedState('Aqaba')}>{'Aqaba'}</button>
          <button class="onClickD" onClick={() => setSelectedState('wadiRumm')}>{'wadiRumm'}</button>
          <button class="onClickD" onClick={() => setSelectedState('petra')}>{'petra'}</button>
          <button class="onClickD" onClick={getLocation}>{'By location'}</button>

        </div>

        <div class="divCardR" >
          {filteredData.map((restaurant) => {
            console.log(restaurant);
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
      </div>
      </div>
  )
}

export default Restaurants;




// <section id="section0">
// <div >
//   <form id="formSection0" >
//     <label id="labelSection0" htmlFor="button">Click on the locate button to find restaurants near you:</label>
//    {/* <button id="buttonSection0" type="button" onClick={getLocation}>Get Location</button>  */}

//   </form>
// </div>
// <div class="aroundcardmain">
//   {aroundYouData.map((item) => {
//     if (item !== null) {

//       return (
//         <>
//           <Link class="aroundcard" to={`/TheRestaurant/${item.location_id}`}>
//             <section key={item.name + 1} >
//               < div class="divaround" key={item.name + 1} >
//                 <img class="imgaround" src={item.photo} />
//                 <p className="namearound" >{item.name}</p>

//               </div >
//             </section>

//           </Link>
//         </>
//       )

//     }
//   })}
// </div>
// </section>
