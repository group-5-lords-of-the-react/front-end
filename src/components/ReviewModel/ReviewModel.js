

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import axios from 'axios';

function ReviewModel(props) {
  const [rate, setRate] = useState('');
  
  const addReview = async (event) => {
    event.preventDefault();

    const serverURL =`http://localhost:3009/addReview`
    const review = {
      email: event.target.email.value,
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
      <Modal show={props.showFlag} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addReview}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" defaultValue="" required />
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

            <Button variant="primary" type="submit">
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
    </>
  );
}

export default ReviewModel;
