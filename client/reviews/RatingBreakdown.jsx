import React from 'react';
import RatingStars from './RatingStars.jsx';
import helper from './reviewHelpers.js';

const RatingBreakdown = (props) => {
  let starAverage = helper.getAvgRating(props.ratings);

  return (
    <div className='rating-breakdown'>
      <p>Rating Breakdown</p>
      {starAverage}
      <RatingStars rating={starAverage}/>
    </div>
  )
}

export default RatingBreakdown;