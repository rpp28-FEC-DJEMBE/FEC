import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: null
    }
  }

  renderInitial() {
    let initial = this.props.reviews.slice(0,2);
    return initial.map((review, index) => {
      return <ReviewTile key={index} review={review} />
    })
  }


  render() {
    return (
      <div className='review-container'>
        <SortOptions reviews={this.props.reviews}/>
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