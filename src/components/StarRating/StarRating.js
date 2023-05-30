import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  // Round the rating to the nearest 0.5
  const roundedRating = Math.round(rating * 2) / 2;

  // Determine the number of full stars, half stars, and empty stars
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // Create an array of star components based on the rating
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} />);
  }
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key={fullStars} />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={fullStars + i + 1} />);
  }

  return <>{stars}</>;
};

export default StarRating;
