import React from 'react';
import helper from './reviewHelpers.js';


const RatingBars = ({ratings}) => {
  let barStyle = {
    display: 'inline-block',
    fontFamily: 'Times',
    lineHeight: 1,
  }
  let total = helper.getRatingTotal(ratings);
  let emptyBar = { '--percent': `0%` };
  let percent5 = (ratings[5]) ? { '--percent': `${helper.ratingConverter(ratings[5], total)}%` } : emptyBar;
  let percent4 = (ratings[4]) ? { '--percent': `${helper.ratingConverter(ratings[4], total)}%` } : emptyBar;
  let percent3 = (ratings[3]) ? { '--percent': `${helper.ratingConverter(ratings[3], total)}%` } : emptyBar;
  let percent2 = (ratings[2]) ? { '--percent': `${helper.ratingConverter(ratings[2], total)}%` } : emptyBar;
  let percent1 = (ratings[1]) ? { '--percent': `${helper.ratingConverter(ratings[1], total)}%` } : emptyBar;



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