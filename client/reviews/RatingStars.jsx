import React from 'react';
import helper from './reviewHelpers.js';


const RatingStars = ({rating, size}) => {
  let starStyle = {
    display: 'inline-block',
    fontFamily: 'Times',
    lineHeight: 1,
     fontSize: `${size}px`,
  }

  let starPercent = helper.ratingConverter(rating, 5);
  let percent= { '--percent': `${starPercent}%` };

  return (
    <div className='stars' style={{...starStyle, ...percent}}></div>
  )
}

export default RatingStars;