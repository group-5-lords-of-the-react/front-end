

import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ReviewModel from "../ReviewModel/ReviewModel";

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
    const serverURL = `http://localhost:3002/getReviewsById?location_id=${props.location_id}`;

    fetch(serverURL)
      .then((response) => {
        response.json().then((data) => {
          //console.log(data);
          setReviewsArr(data);
        });
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
    <h1>Reviews:</h1>
      <div>
        {/* {updatedReviews.map((review) => (
          <div key={review.potato}>
            <p>Email: {review.email}</p>
            <p>Comments: {review.comments}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))} */}
      </div>
      <Button variant="primary" onClick={() => handleShow(props.data)}>
        Add Review
      </Button>

      <ReviewModel
        showFlag={showFlag}
        handleClose={handleClose}
        location_id={props.location_id}
        takeNewUpdatedReviews={takeNewUpdatedReviews} 
      />
    </>
  );
}

export default Reviews;
