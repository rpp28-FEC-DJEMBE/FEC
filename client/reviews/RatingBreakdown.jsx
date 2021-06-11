import React from 'react';
import RatingStars from './RatingStars.jsx';
import RatingBars from './RatingBars.jsx';
import helper from './reviewHelpers.js';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderBar() {

  }

  // need to get the total number of ratings
  // each bar is a percentage of that rating compared to the total number
  // need to create a bar for every key in the rating object
  // Object.keys(rating).map((key) => {<RatingBars />}

  render() {
    let {ratings} = this.props;
    let starAverage = helper.getAvgRating(ratings);

    return (
      <div className='rating-breakdown'>
        <p>Rating Breakdown</p>
        <div className='rating-stars'>
          {starAverage}
          <RatingStars rating={starAverage}/>
        </div>
        <div className='rating-bars'>

        </div>
      </div>
    )
  }
}

export default RatingBreakdown;