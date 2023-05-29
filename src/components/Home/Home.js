
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import data1 from "./home.json"
import data2 from "./home2.json"
import React from 'react';
import Rating from 'react-rating-stars-component';



function Home() {


  const [RestaurantData, setRestaurantData] = useState(data1);
  const [RestaurantData2, setRestaurantData2] = useState(data2);



  // //'12909961', '1181235', '11772898', '4359069', '12434409', '2287470', '2406112', '1135125'
  // useEffect(() => {
  //   const idArr = ['12909961', '1181235', '11772898'];
  //   const idArrall = [];
  //   for (let i = 0; i < idArr.length; i++) {
  //     setTimeout(() => {
  //       const serverURL = `${process.env.REACT_APP_serverURL}/getResturauntById?location=${idArr[i]}`;
  //       fetch(serverURL)
  //         .then((response) => {
  //           response.json().then((data) => {
  //             console.log(data);
  //             idArrall.push(data);
  //             if (idArrall.length === idArr.length) {
  //               setRestaurantData(idArrall);
  //             }
  //           });
  //         });
  //     }, 250 * i );
  //   }

  // }, []);




  // //'1371269', '15079947', '5863643', '2221012', '2386844', '7594311', '18956821', '2429468'
  // useEffect(() => {
  //   const idArr = ['1371269', '15079947', '5863643'];
  //   const idArrall = [];
  //   for (let i = 0; i < idArr.length; i++) {
  //     setTimeout(() => {
  //       const serverURL = ``;
  //       fetch(serverURL)
  //         .then((response) => {
  //           response.json().then((data) => {
  //             console.log(data);
  //             idArrall.push(data);
  //             if (idArrall.length === idArr.length) {
  //               setRestaurantData2(idArrall);
  //             }
  //           });
  //         });
  //     }, 700 * i);
  //   }
  // }, []);






  //Sidebar-start------------------------------------------------------------------------------------
  const [email, setEmail] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [aroundYouData, setaroundYouData] = useState([]);
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

  const showPosition = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const serverURL = `${process.env.REACT_APP_serverURL}/?lat=${latitude}&long=${longitude}`;
    await fetch(serverURL)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setaroundYouData(data);
        });
      });
  };





  //Sidebar-end------------------------------------------------------------------------------------


  return (

    <>
      <section id="sectionmainMain">


        <section id="sectionmain" style={{ width: '80%' }}>



          <section id="section1">
            <div id="cardmain">

              <div id="img1" class="homeCard1" >
                <a href="./Restaurants">
                  <p class="section1Text">Amman</p>
                </a>
              </div>

              <div id="img2" class="homeCard1"  >
                <a href="./Restaurants">
                  <p class="section1Text">Petra</p>
                </a>
              </div>

              <div id="divcardmain">
                <div id="img3" class="homeCard1" >
                  <a href="./Restaurants">
                    <p class="section1Text">Irbid</p>
                  </a>
                </div>
                <div id="img4" class="homeCard1" >
                  <a href="./Restaurants" alt="img4">
                    <p class="section1Text">Aqaba</p>
                  </a>
                </div>

              </div>

            </div>

          </section>

          <section id="section2x">
            <p  class="titlesection2x">Five star restaurants around the kingdom <Rating 
              count={5}
              size={30}
              activeColor="#ffd700"
              color="#cda45e"
              
              
            /></p>
            <div id="section2">
              {RestaurantData.map(item => {
                return (
                  <>
                    <Link class="sectioncard" to={`/TheRestaurant/${item.location_id}`}>
                      <section class="sectioncardmove" key={item.name + 1} >
                        < div class="divcard" key={item.name + 1} >
                          <img class="imgcard" src={item.photo} />
                          <p className="namecard" style={{ textDecoration: "none", fontStyle: "normal" }}>{item.name}</p>

                        </div >
                      </section>

                    </Link>
                  </>
                )

              })}
            </div>
          </section>

          <section class='sectionFigure1'>

            <dive class='divFigure1'>
              <p class="Figure1Text">Wadi Rum</p>
              <p>Discover the beauty of Wadi Rum and enjoy delicious food at some of the best restaurants in the area. From traditional Bedouin cuisine to international dishes, there’s something for everyone. Click here to find out more about the restaurants in Wadi Rum.</p>
              <a href="./Restaurants">
                <p class="Figure1BUT">Discover</p>
              </a>
            </dive>
            <div id='backgFigure1'>
            </div>
          </section>

          <section id="section2x">
            <p class="titlesection2x"> Trend restaurants in our site</p>
            <div id="section2">
              {RestaurantData2.map(item => {
                return (
                  <>
                    <Link class="sectioncard" to={`/TheRestaurant/${item.location_id}`}>
                      <section key={item.name + 1} >
                        < div class="divcard" key={item.name + 1} >
                          <img class="imgcard" src={item.photo} />
                          <p className="namecard" style={{ textDecoration: "none", fontStyle: "normal" }}>{item.name}</p>

                        </div >
                      </section>

                    </Link>
                  </>
                )

              })}
            </div>
          </section>


          <section class='sectionFigure2'>

            <dive class='divFigure1'>
              <p class="Figure2Text">Summer Knight</p>
              <p>Experience the vibrant nightlife of Jordan and indulge in delicious food at some of the best restaurants in the area. From traditional Jordanian cuisine to international dishes, there’s something for everyone. Whether you’re looking for a romantic night out or a fun evening with friends, Jordan has it all. Click here to find out more about the restaurants and nightlife in Jordan.</p>
              <a href="./Restaurants">
                <p class="Figure1BUT">Discover</p>
              </a>
            </dive>
            <div id='backgFigure2'>
            </div>
          </section>

          <section class="section4">
            <Button href="#" type="submit">About</Button>{' '}
            <Button href="#" type="submit">News</Button>{' '}
            <Button href="#" type="submit">Contact Us</Button>
          </section>
        </section>

        <section id="section0">
          <div >
            <form id="formSection0" >
              <label id="labelSection0" htmlFor="button">Click on the locate button to find restaurants near you:</label>
              <button id="buttonSection0" type="button" onClick={getLocation}>Get Location</button>

            </form>
          </div>
          <div class="aroundcardmain">
          {aroundYouData.map((item) => {
            if (item !== null) {

              return (
                <>
                <Link class="aroundcard" to={`/TheRestaurant/${item.location_id}`}>
                  <section key={item.name + 1} >
                    < div class="divaround" key={item.name + 1} >
                      <img class="imgaround" src={item.photo} />
                      <p className="namearound" >{item.name}</p>

                    </div >
                  </section>

                </Link>
              </>
              )

            }
          })}
</div>
        </section>
      </section>
    </>
  )
}

export default Home;