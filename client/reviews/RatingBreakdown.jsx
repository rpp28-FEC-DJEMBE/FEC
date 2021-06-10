import React from 'react';
import RatingStars from './RatingStars.jsx';

const RatingBreakdown = (props) => {

  const getAvgRating = (data) => {
    let total = 0;
    let ratings = 0;
    for (var key in data) {
        total += Number(key) * Number(data[key]);
        ratings += Number(data[key]);
    }

   let average = total/ratings;
   return (Math.round(average * 4) / 4).toFixed(2)
  }

  let starAverage = getAvgRating(props.ratings);

  return (
    <div className='rating-breakdown'>
      <p>Rating Breakdown</p>
      {starAverage}
      <RatingStars rating={starAverage}/>
    </div>
  )
}

export default RatingBreakdown;