import React from 'react';
import ReviewList from './ReviewList.jsx';
import Breakdown from './Breakdown.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: []
    }
  }

  render() {
    return (
      <div>
        <p>Ratings and Reviews</p>
        <div className='ratings-reviews'>
          <Breakdown />
          <ReviewList />
        </div>
      </div>

    )
  }
}

export default Ratings;