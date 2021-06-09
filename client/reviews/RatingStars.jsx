import React from 'react';

const starStyle = {
  display: 'inline-block',
  fontFamily: 'Times',
  lineHeight: 1,
}

const percent= { '--percent': '50%' };

const RatingStars = (props) => {

  return (
    <div className='stars' style={{...starStyle, ...percent}}></div>
  )
}

export default RatingStars;