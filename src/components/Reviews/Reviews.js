import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ReviewModel from "../ReviewModel/ReviewModel";
import './Reviews.css'
import StarRating from "../StarRating/StarRating";
import { BiCommentAdd } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import axios from "axios";

function Reviews(props) {
  const [reviewsArr, setReviewsArr] = useState([]);
  const [updatedReviews, setUpdatedReviews] = useState([]);

  const [showFlag, setShowFlag] = useState(false);

  const handleShow = (item) => {
    setShowFlag(true);
    //console.log(item);
  };

  const takeNewUpdatedReviews = (arr) => {
    setUpdatedReviews(arr);
    console.log(arr);
  };

  const handleClose = () => {
    setShowFlag(false);
  };

  const getReviews = () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/getReviewsById?location_id=${props.location_id}`;

    axios.get(serverURL)
      .then((response) => {
        setReviewsArr(response.data);
      })
      .catch((error) => console.log(error));
  };


  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    setUpdatedReviews(reviewsArr);
  }, [reviewsArr]);


  return (
    <>

      <Container fluid className="review-container">
        <Row>
          <Col md={10} id="reviews-title">
          Reviews
          </Col>
          <Col md={2}>
          <Button className="review-button" variant="secondary" onClick={() => handleShow(props.data)}>
            <BiCommentAdd id="addRevButtun"/>
            </Button>
          </Col>
        </Row>
        <Row>
          
        
        {updatedReviews.length > 0 ? (
          <Col md={12}className="reviews-elements">
            {updatedReviews.map((review) => (
              <Row key={review.serial_identifier} className="one-comment">
                <p id="review-name"> {review.email}    <StarRating rating={review.rating} /></p>
                <p > {review.comments}</p>
              </Row>
            ))}
          </Col>
        ) :  <p id="review-text-first">Be the first who give review < BsEmojiSmile id="smaile-icon"/></p>}
        </Row>
        < ReviewModel
          showFlag={showFlag}
          handleClose={handleClose}
          location_id={props.location_id}
          takeNewUpdatedReviews={takeNewUpdatedReviews}
        />
      </Container>
    </>
  );
}

export default Reviews;
