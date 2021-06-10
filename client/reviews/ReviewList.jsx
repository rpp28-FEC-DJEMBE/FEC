import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: [this.props.reviews[0], this.props.reviews[1]]
    }
  }

  renderInitial() {
    return this.state.initial.map((review, index) => {
      return <ReviewTile key={index} review={review} />
    })
  }

  render() {
    return (
      <div className='review-container'>
        <SortOptions />
        <div className='review-list'>
          <p>Review List</p>
          {this.renderInitial()}
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