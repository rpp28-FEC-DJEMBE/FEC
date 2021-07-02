import React from 'react';
import helper from './reviewHelpers.js';


const RatingBars = ({ratings, filterStars}) => {
  let total = helper.getRatingTotal(ratings);
  let emptyBar = { '--width': `0%` };
  let stars = [5, 4, 3, 2, 1]

  return (
    <div className='rating-bars'>
    {
      stars.map((star) => {
        let barWidth = (ratings[star]) ? { '--width': `${helper.ratingConverter(ratings[star], total)}%` } : emptyBar;

        return (
          <form className='rating-bar' key={star} onClick={() => filterStars(star)}>
                <label for={`bar-${star}`} ><u>{star} stars</u></label>
                <input readOnly id={`bar-${star}`}type="range" min="1" max="5" value='1' className="star-slider pointer" style={barWidth} ></input>
                {ratings[star]}
          </form>
        )
      })
    }
    </div>
  )
}

export default RatingBars;