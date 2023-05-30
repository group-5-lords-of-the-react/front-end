
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import data1 from "./home.json"
import data2 from "./home2.json"
import React from 'react';
import Rating from 'react-rating-stars-component';
import axios from 'axios';
import Footer from '../Footer/Footer'

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

  //Sidebar-end------------------------------------------------------------------------------------


  return (

    <>
      <section id="sectionmainMain">
        <section id="sectionmain">
          <section id="section1">
            <div id="cardmain">

              <div id="img1" class="homeCard1" >
               
                <Link  to={`./Restaurants`}>
                <p class="section1Text">Amman</p></Link>
              </div>

              <div id="img2" class="homeCard1"  >
              
                <Link  to={`./Restaurants`}><p class="section1Text">Petra</p></Link>
                  
              </div>

              <div id="divcardmain">
                <div id="img3" class="homeCard1" >
                <Link  to={`./Restaurants`}><p class="section1Text">Irbid</p></Link>
                </div>
                <div id="img4" class="homeCard1" >
                <Link  to={`./Restaurants`}><p class="section1Text">Aqaba</p></Link>
                </div>

              </div>

            </div>

          </section>

          <section  id="section2x">
            <p class="titlesection2x">Five star restaurants around the kingdom </p>
            <div id="section2">
              {RestaurantData.map(item => {
                return (
                  <>
                    
                    <Link class="sectioncard" to={`/TheRestaurant/${item.location_id}`}>
                      <section class="sectioncardmove" key={item.name + 1} >
                        < div class="divcard" key={item.name + 1} >
                          <img class="imgcard" src={item.photo} />
                          <p className="namecard" >{item.name}</p>

                        </div >
                      </section>

                    </Link>
                  </>
                )

              })}
            </div>
          </section>

          <section class='sectionFigure1'>

            <div class='divFigure1'>
              <p class="Figure1Text">Wadi Rum</p>
              <p class="FigurePText">Discover the beauty of Wadi Rum and enjoy delicious food at some of the best restaurants in the area. From traditional Bedouin cuisine to international dishes, there’s something for everyone. Click here to find out more about the restaurants in Wadi Rum.</p>
              <Link  to={`./Restaurants`}><p class="Figure1BUT">Discover</p></Link>
            </div>
            <div id='backgFigure1'>
            </div>
          </section>

          <section  id="section2x">
            <p class="titlesection2x"> Trending restaurants on our site</p>
            <div id="section2">
              {RestaurantData2.map(item => {
                return (
                  <>
                     <>
                    <Link class="sectioncard" to={`/TheRestaurant/${item.location_id}`}>
                      <section class="sectioncardmove" key={item.name + 1} >
                        < div class="divcard" key={item.name + 1} >
                          <img class="imgcard" src={item.photo} />
                          <p className="namecard" >{item.name}</p>

                        </div >
                      </section>

                    </Link>
                  </>
                  </>
                )

              })}
            </div>
          </section>
        </section>
      </section>
    </>
  )
}

export default Home;