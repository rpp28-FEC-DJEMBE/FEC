import React, {useEffect, useState} from 'react';
import RatingStars from './RatingStars.jsx';
import RatingBars from './RatingBars.jsx';
import helper from './reviewHelpers.js';

const RatingBreakdown = ({ratings, recommended, reviews, filterStars, filters, removeFilters}) => {

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
  let removeBtn = (filters.length) ? <button id='remove-btn' onClick={() => removeFilters()}>Remove all filters</button> : null;
  return (
    <div className='rating-breakdown'>
      <div className='rating-stars'>
        <p id='star-average'>{starRating}</p>
        <RatingStars rating={starAverage} size={30}/>
        {reviews.length} reviews
      </div>
      <p>{recommendPct}% of reviews recommend this product</p>
      <div className='filters'>
        Current filters:
        {
          filters.map((rating) => <li style={{padding: '3px'}}>{rating}★</li>)
        }
      </div>
      {removeBtn}
      <RatingBars ratings={ratings} filterStars={filterStars}/>
    </div>
  )
}

export default RatingBreakdown;