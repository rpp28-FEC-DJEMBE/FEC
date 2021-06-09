import React from 'react';

const starStyle = {
  // --percent: calc(var(--rating) / 5 * 100%);

  display: 'inline-block',
  fontFamily: 'Times',
  lineHeight: 1,
}

const percent= { '--percent': '50%' };

const RatingStars = (props) => {

  return (



    <div className='stars' style={{...starStyle, ...percent}}></div>
    // <div className='stars' ></div>
  )
}

export default RatingStars;