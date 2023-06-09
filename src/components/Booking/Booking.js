import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ModalUpdat from "../ModalUpdat/ModalUpdat";
import "./Booking.css";

function Booking() {
  const [bookingArr, setBookingArr] = useState([]);
  const [updateBooking, setUpdateBooking] = useState(false);
  const [passData, setPassData] = useState([]);
  const [newArr, setNewArr] = useState([]);

  const funUpdateBook = (item) => {
    setUpdateBooking(true);
    setPassData(item);
  };

  const handleClose = () => {
    setUpdateBooking(false);
  };

  const getBooking = () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/bookingList`;
    axios.get(serverURL)
      .then((response) => {
        setBookingArr(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  const funDeleteBook = (item) => {
    const serverURL = `${process.env.REACT_APP_serverURL}/deleteBooking/${item}`;
    axios
      .delete(serverURL)
      .then((response) => {
        getBooking();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const takeNewDataFromUpdatedModal = (arr) => {
    setNewArr(arr);
  };

  useEffect(() => {
    setNewArr(bookingArr);
  }, [bookingArr]);

  useEffect(() => {
    getBooking();
  }, []);

  return (
    <>
      <h2>Booking List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Restaurant</th>
            <th>Address</th>
            <th>Reservation Date</th>
            <th>Reservation Time</th>
            <th>No. of People</th>
            <th>Actions</th>
            
          </tr>
        </thead>
        <tbody>
          {newArr.map((item) => (
            <tr key={item.r_location_id}>
              <td>{item.r_name}</td>
              <td>{item.r_address}</td>
              <td>{new Date(item.r_reservation_date).toLocaleDateString()}</td>
              <td>{item.r_reservation_time}</td>
              <td>{item.no_people_reservation}</td>
              <td className="button-alignment">
                <Button
                  variant="primary2"
                  className="update-btn"
                  onClick={() => funUpdateBook(item)}
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/5278/5278658.png" alt="update" style={{ height: '30px', width: '30px' }} />
                </Button>
                <Button
                  variant="primary2"
                  className="delete-btn"
                  onClick={() => funDeleteBook(item.r_location_id)}
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/3817/3817209.png" alt="delete" style={{ height: '30px', width: '30px' }} />
                </Button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>

      <ModalUpdat
        updateBooking={updateBooking}
        passData={passData}
        handleClose={handleClose}
        takeNewDataFromUpdatedModal={takeNewDataFromUpdatedModal}
      />
    </>
  );
}

export default Booking;
