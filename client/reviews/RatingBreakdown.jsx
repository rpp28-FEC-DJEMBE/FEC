import React from 'react';
import RatingStars from './RatingStars.jsx';

const RatingBreakdown = (props) => {
  return (
    <div className='rating-breakdown'>
      <p>Rating Breakdown</p>
      <RatingStars />
    </div>
  )
}

export default RatingBreakdown;