

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import './ReviewModel.css';

function ReviewModel(props) {
  const [rate, setRate] = useState('');
  
  const addReview = async (event) => {
    event.preventDefault();

    const serverURL =`${process.env.REACT_APP_serverURL}/addReview`
    const review = {
      email: event.target.name.value,
      location_id:props.location_id,
      comments: event.target.comments.value,
      rating: parseFloat(rate)
    };

    try {
      const response = await axios.post(serverURL, review);
      //console.log(response.data);
      props.takeNewUpdatedReviews(response.data)
      props.handleClose();
    } catch (error) {
      console.log('Error while adding review:', error);
    }
  };

  return (
    <>
      <div id="review-modal" className='review-modal-main'>
      <Modal size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={props.showFlag} onHide={props.handleClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title  >Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addReview}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" defaultValue="" required autoComplete='off'/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" name="comments" defaultValue="" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                min="1"
                max="5"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" id="addRevId">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default ReviewModel;
