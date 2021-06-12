import React from 'react';
import helper from './reviewHelpers.js';


const RatingBars = ({ratings}) => {
  let barStyle = {
    display: 'inline-block',
    fontFamily: 'Times',
    lineHeight: 1,
  }
  let total = helper.getRatingTotal(ratings);
  let percent5 = { '--percent': `${helper.ratingConverter(ratings[5], total)}%` };
  let percent4 = { '--percent': `${helper.ratingConverter(ratings[4], total)}%` };
  let percent3 = { '--percent': `${helper.ratingConverter(ratings[3], total)}%` };
  let percent2 = { '--percent': `${helper.ratingConverter(ratings[2], total)}%` };
  let percent1 = { '--percent': `${helper.ratingConverter(ratings[1], total)}%` };


  return (
    <div className='rating-bars'>
      <div className='5-bar'>
        5 stars
        <div className='bars' style={{...barStyle, ...percent5}}></div>
      </div>
      <div className='4-bar'>
        4 stars
        <div className='bars' style={{...barStyle, ...percent4}}></div>
      </div>
      <div className='3-bar'>
        3 stars
        <div className='bars' style={{...barStyle, ...percent3}}></div>
      </div>
      <div className='2-bar'>
        2 stars
        <div className='bars' style={{...barStyle, ...percent2}}></div>
      </div>
      <div className='1-bar'>
        1 stars
        <div className='bars' style={{...barStyle, ...percent1}}></div>
      </div>
    </div>
  )
}

export default RatingBars;