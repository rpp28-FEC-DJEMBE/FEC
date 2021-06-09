import React from 'react';


const RatingStars = (props) => {
  let starStyle = {
    display: 'inline-block',
    fontFamily: 'Times',
    lineHeight: 1,
  }

  let ratingConverter = (rating) => {
    return rating / 5 * 100;
  }

  let starPercent = ratingConverter(props.rating);
  let percent= { '--percent': `${starPercent}%` };

  return (
    <div className='stars' style={{...starStyle, ...percent}}></div>
  )
}

export default RatingStars;