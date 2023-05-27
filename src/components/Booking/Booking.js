
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ModalUpdat from "../ModalUpdat/ModalUpdat";

function Booking() {
  
  const [BookingArr, setBookingArr] = useState([]);
  const [updateBooking, setupdateBooking] = useState(false);
  const [passData, setpassData] = useState([]);

  const [newArr,setNewArr] = useState([])

 const funUpdateBook = (item) => {
  setupdateBooking(true)
  setpassData(item)

 }


 const handleClose = () => {
  setupdateBooking(false)
}


  const getBooking = () => {
    const serverURL = ``;
    fetch(serverURL)
      .then((response) => {
        response.json()
          .then(data => {
            setBookingArr(data)
            console.log(data)
          })
      })
  }

  
  const fundeleteBook  = (item) => {
    
   const serverURL = `/DELETE/`;
   axios.delete(serverURL)
   .then(response=>{
    getBooking()
     console.log(response.data)
     
   })
   .catch((error)=>{
     console.log(error)
   })
   
   }
  

  const takeNewDataFromUpdatedModal = (arr)=>{
    setNewArr(arr)
}
  useEffect(()=>{
    setNewArr(BookingArr)
},[BookingArr])

useEffect(() => {
  getBooking()
}, [])


  return (

    <>
     
      <h1>Booking List</h1>
      {newArr.map(item => {
        return (
          <section key={item.id} className='Movie1'>
          <Card className='card1' key={item.idRe}>
            <Card.Body>
              <Card.Title className='text1'>{item.nameRe}</Card.Title>
              <Card.Text >
                <p className='text2'>{item.addressRe}</p>
                <p>{item.date}</p>
                <p>{item.time}</p>
                <p>{item.numberOfPeople}</p>
              </Card.Text>
              <Button  variant="primary" onClick={()=> {funUpdateBook(item)}}>Update</Button>
              
              <Button  variant="primary"  onClick={()=> {fundeleteBook(item.id)}}>Delete</Button>
            </Card.Body>
          </Card>
          </section>
        )
      })}
      
        <ModalUpdat  updateBooking={updateBooking} passData={passData} handleClose={handleClose} takeNewDataFromUpdatedModal={takeNewDataFromUpdatedModal}/>     
    </>
  )
}

export default Booking;