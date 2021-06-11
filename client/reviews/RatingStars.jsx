import React from 'react';
import helper from './reviewHelpers.js';


const RatingStars = (props) => {
  let starStyle = {
    display: 'inline-block',
    fontFamily: 'Times',
    lineHeight: 1,
  }

  let starPercent = helper.ratingConverter(props.rating, 5);
  let percent= { '--percent': `${starPercent}%` };

  return (
    <div className='stars' style={{...starStyle, ...percent}}></div>
  )
}

export default RatingStars;