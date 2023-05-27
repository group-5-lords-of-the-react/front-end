
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ModalUpdat from "../ModalUpdat/ModalUpdat";

function Booking() {

  const [BookingArr, setBookingArr] = useState([]);
  const [updateBooking, setupdateBooking] = useState(false);
  const [passData, setpassData] = useState([]);

  const [newArr, setNewArr] = useState([])

  const funUpdateBook = (item) => {
    setupdateBooking(true)
    setpassData(item)

  }


  const handleClose = () => {
    setupdateBooking(false)
  }


  const getBooking = () => {
    const serverURL = `http://localhost:3000/bookingList`;
    fetch(serverURL)
      .then((response) => {
        response.json()
          .then(data => {
            setBookingArr(data)
            console.log(data)
          })
      })
  }


  const fundeleteBook = (item) => {
  
    const serverURL = `http://localhost:3000/deleteBooking/${item}`;
    axios.delete(serverURL)
      .then(response => {
        getBooking()
        console.log(response.data)

      })
      .catch((error) => {
        console.log(error)
      })

  }


  const takeNewDataFromUpdatedModal = (arr) => {
    setNewArr(arr)
  }
  useEffect(() => {
    setNewArr(BookingArr)
  }, [BookingArr])

  useEffect(() => {
    getBooking()
  }, [])


  return (

    <>
        {/* change card display to table */}
      <h1>Booking List</h1>
      {newArr.map(item => {
        return (
          <div className='container'>
      <div className='row'>
        {newArr.map((item) => {
          return (
            <div key={item.r_location_id} className='col-md-4'>
              <section className='Restaurant'>
                <Card className='Restaurant-Booking-ID' key={item.r_location_id}>
                  <Card.Body>
                    <Card.Title className='REST-Name'>{item.r_name}</Card.Title>
                    <Card.Text>
                      <p className='REST-Address'>{item.r_address}</p>
                      <p>{item.r_reservation_date}</p>
                      <p>{item.r_reservation_time}</p>
                      <p>{item.no_people_reservation}</p>
                    </Card.Text>
                    <Button variant='primary' onClick={() => { funUpdateBook(item) }}>Update</Button>
                    <Button variant='primary' onClick={() => { fundeleteBook(item.r_location_id) }}>Delete</Button>
                  </Card.Body>
                </Card>
              </section>
            </div>
          )
        })}
      </div>
    </div>
    
        )
      })}

      <ModalUpdat updateBooking={updateBooking} passData={passData} handleClose={handleClose} takeNewDataFromUpdatedModal={takeNewDataFromUpdatedModal} />
    </>
  )
}

export default Booking;