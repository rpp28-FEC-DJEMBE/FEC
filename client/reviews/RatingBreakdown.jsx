import React, {useEffect, useState} from 'react';
import RatingStars from './RatingStars.jsx';
import RatingBars from './RatingBars.jsx';
import helper from './reviewHelpers.js';

const RatingBreakdown = ({ratings, recommended, reviews}) => {

  if(Object.keys(ratings).length === 0) {
    return (
      <div className='rating-breakdown'>
      <p>Rating Breakdown</p>
      <div className='rating-stars'>
        <h2>0</h2>
        <RatingStars rating={0} size={30}/>
      </div>
      <p>0% of reviews recommend this product</p>
    </div>
    )
  }

  let starAverage = helper.getAvgRating(ratings, 2);
  let totalRecs = helper.getRecTotal(recommended);
  let recommendPct = Math.round(helper.ratingConverter(recommended['true'], totalRecs));
  let starRating = helper.getAvgRating(ratings, 1);

  return (
    <div className='rating-breakdown'>
      <div className='rating-stars'>
        <p id='star-average'>{starRating}</p>
        <RatingStars rating={starAverage} size={30}/>
        {reviews.length} reviews
      </div>
      <p>{recommendPct}% of reviews recommend this product</p>
      <RatingBars ratings={ratings} />
    </div>
  )
}

export default RatingBreakdown;