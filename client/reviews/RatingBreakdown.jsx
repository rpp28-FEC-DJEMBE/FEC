import React from 'react';
import RatingStars from './RatingStars.jsx';
import RatingBars from './RatingBars.jsx';
import helper from './reviewHelpers.js';

const RatingBreakdown = ({ratings}) => {

  let starAverage = helper.getAvgRating(ratings);

  return (
    <div className='rating-breakdown'>
      <p>Rating Breakdown</p>
      <div className='rating-stars'>
        {starAverage}
        <RatingStars rating={starAverage}/>
      </div>
      <RatingBars ratings={ratings} />
    </div>
  )
}

export default RatingBreakdown;