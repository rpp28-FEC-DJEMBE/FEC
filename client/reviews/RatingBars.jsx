import React from 'react';
import helper from './reviewHelpers.js';


const RatingBars = ({ratings}) => {
  let total = helper.getRatingTotal(ratings);
  let emptyBar = { '--width': `0%` };
  let stars = [5, 4, 3, 2, 1]

  return (
    <div className='rating-bars'>
    {
      stars.map((star) => {
        let barWidth = (ratings[star]) ? { '--width': `${helper.ratingConverter(ratings[star], total)}%` } : emptyBar;

        return (
          <div className='rating-bar' key={star}>
                <label>{star} stars</label>
                <input readOnly type="range" min="1" max="5" value='1' className="star-slider" style={barWidth}></input>
          </div>
        )
      })
    }
    </div>
  )
}

export default RatingBars;