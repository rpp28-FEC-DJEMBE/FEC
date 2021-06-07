import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className='review-container'>
        <SortOptions />
        <div className='review-list'>
          <p>Review List</p>
          <ReviewTile />
          <ReviewTile />
        </div>
        <div className='review-buttons'>
          <button>More Reviews</button>
          <button>Add A Review +</button>
        </div>
      </div>
    )
  }
}

export default ReviewList;