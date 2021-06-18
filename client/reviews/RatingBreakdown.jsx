import React, {useEffect, useState} from 'react';
import RatingStars from './RatingStars.jsx';
import RatingBars from './RatingBars.jsx';
import helper from './reviewHelpers.js';

const RatingBreakdown = ({ratings, recommended}) => {
  const [star, setStar] = useState(ratings);

  useEffect(() => { setStar(ratings) }, [ratings]);
  if(Object.keys(ratings).length === 0) {
    return (
      <div className='rating-breakdown'>
      <p>Rating Breakdown</p>
      <div className='rating-stars'>
        <h2>0</h2>
        <RatingStars rating={0}/>
      </div>
      <p>0% of reviews recommend this product</p>
    </div>
    )
  }

  let starAverage = helper.getAvgRating(ratings);
  let totalRecs = helper.getRecTotal(recommended);
  let recommendPct = Math.round(helper.ratingConverter(recommended['true'], totalRecs));

  return (
    <div className='rating-breakdown'>
      <p>Rating Breakdown</p>
      <div className='rating-stars'>
        <h2>{starAverage}</h2>
        <RatingStars rating={starAverage} size={35}/>
      </div>
      <p>{recommendPct}% of reviews recommend this product</p>
      <RatingBars ratings={ratings} />
    </div>
  )
}

export default RatingBreakdown;