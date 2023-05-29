
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {


  const [RestaurantData, setRestaurantData] = useState([]);
  const [RestaurantData2, setRestaurantData2] = useState([]);



  //'12909961', '1181235', '11772898', '4359069', '12434409', '2287470', '2406112', '1135125'
  useEffect(() => {
    const idArr = ['12909961', '1181235', '11772898'];
    const idArrall = [];
    for (let i = 0; i < idArr.length; i++) {
      setTimeout(() => {
        const serverURL = `${process.env.REACT_APP_serverURL}/getResturauntById?location=${idArr[i]}`;
        fetch(serverURL)
          .then((response) => {
            response.json().then((data) => {
              console.log(data);
              idArrall.push(data);
              if (idArrall.length === idArr.length) {
                setRestaurantData(idArrall);
              }
            });
          });
      }, 250 * i );
    }

  }, []);




 //'1371269', '15079947', '5863643', '2221012', '2386844', '7594311', '18956821', '2429468'
  useEffect(() => {
    const idArr = ['1371269', '15079947', '5863643'];
    const idArrall = [];
    for (let i = 0; i < idArr.length; i++) {
      setTimeout(() => {
        const serverURL = `${process.env.REACT_APP_serverURL}/getResturauntById?location=${idArr[i]}`;
        fetch(serverURL)
          .then((response) => {
            response.json().then((data) => {
              console.log(data);
              idArrall.push(data);
              if (idArrall.length === idArr.length) {
                setRestaurantData2(idArrall);
              }
            });
          });
      }, 700 * i);
    }
  }, []);






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

           <div id="img1"  class="homeCard1" >
                <a  href="./Restaurants">
                 <p class="section1Text">Amman</p>
                </a>
            </div>
            
           <div id="img2"   class="homeCard1"  >
                <a href="./Restaurants">
                 <p class="section1Text">Petra</p>
                </a>
            </div>

            <div id="divcardmain">
            <div  id="img3" class="homeCard1" >
                <a href="./Restaurants">
                 <p class="section1Text">Irbid</p>
                </a>
            </div>
            <div  id="img4" class="homeCard1" >
                <a href="./Restaurants" alt="img4">
                 <p class="section1Text">Aqaba</p>
                </a>
            </div>

            </div>

            </div>
         
          </section>

          <section >
            <h1>Five star restaurants around the kingdom</h1>
            <div id="section2">
            {RestaurantData.map(item => {
              return (
                <>
                  <Link class="sectioncard" to={`/TheRestaurant/${item.location_id}`}>
                    <section  key={item.name + 1} >
                      < div  class="divcard" key={item.name + 1} >
                        <img class="imgcard" src={item.photo} />
                        <h1 class="namecard">{item.name}</h1>
                      </div >
                    </section>

                  </Link>
                </>
              )

            })}
            </div>
          </section>

          <section class ='sectionFigure'>
            <img src="holder.js/171x180"/>
            <dive>
              <h1></h1>
              <p></p>
            </dive>
          </section>

          <section >
            <h1>Five star restaurants around the kingdom</h1>
            <div id="section2">
            {RestaurantData2.map(item => {
              return (
                <>
                  <Link class="sectioncard" to={`/TheRestaurant/${item.location_id}`}>
                    <section  key={item.name + 1} >
                      < div  class="divcard" key={item.name + 1} >
                        <img class="imgcard" src={item.photo} />
                        <h1 class="namecard">{item.name}</h1>
                      </div >
                    </section>

                  </Link>
                </>
              )

            })}
            </div>
          </section>


          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="holder.js/171x180"
            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>

          <section class="section4">
            <Button href="#" type="submit">About</Button>{' '}
            <Button href="#" type="submit">News</Button>{' '}
            <Button href="#" type="submit">Contact Us</Button>
          </section>
        </section>


        <section id="section0" style={{ width: '20%' }}>
          <div >
            <form id="formSection0">
              <label id="labelSection0" htmlFor="button">Click on the locate button to find restaurants near you:</label>
              <button id="buttonSection0" type="button" onClick={getLocation}>Get Location</button>

            </form>
          </div>

          {aroundYouData.map((item) => {
            if (item !== null) {

              return (
                <>
                  <Link to={`/TheRestaurant/${item.location_id}`}>
                    <section key={item.name + 1} >
                      < Card  key={item.name + 1} >
                        <Card.Img width="200px" variant="top" src={item.photo} />
                        <Card.Body>
                          <Card.Title >{item.name}</Card.Title>

                        </Card.Body>
                      </Card >
                    </section>

                  </Link>
                </>
              )

            }
          })}

        </section>
      </section>
    </>
  )
}

export default Home;