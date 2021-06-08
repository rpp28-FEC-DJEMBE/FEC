import React from 'react';
import ReviewList from './ReviewList.jsx';
import Breakdown from './Breakdown.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: []
    }
  }

  render() {
    return (

      <div className='ratings-reviews'>
          <p>Ratings and Reviews</p>
          <div className='rr-content'>
            <Breakdown />
            <ReviewList />
          </div>
        </div>


    )
  }
}

export default Reviews;