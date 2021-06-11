import React from 'react';
import helper from './reviewHelpers.js';


const RatingBars = (props) => {
  let barStyle = {
    display: 'inline-block',
    fontFamily: 'Times',
    lineHeight: 1,
  }

  // let percent= { '--percent': `${starPercent}%` };
  let percent= { '--percent': `77%` };

  return (
    <div className='bars' style={{...barStyle, ...percent}}></div>
  )
}

export default RatingBars;