import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: [],
      reviews: []
    }
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
  }

  renderInitial() {
    let initial = this.props.reviews.slice(0,2);
    return initial.map((review, index) => {
      return <ReviewTile key={index} review={review} />
    })
  }

  handleMoreReviews() {
    // let reviews = this.props.reviews.slice();
    // this.setState((state, props) => ({
    //   reviews: this.state.reviews.concat(reviews),
    //   initial: this.state.initial.concat(this.props.reviews.slice(0, 2))
    // }))
    // console.log('review list state====',this.state)
  }

  render() {
    let tiles;
    if (this.props.reviews.length) {
      tiles = this.renderInitial();
    } else {
      tiles = `There are currently no reviews for this product.
      Be the first to leave a review!`
    }
    return (
      <div className='review-container'>
        <SortOptions reviews={this.props.reviews}/>
        <div className='review-list'>
          <p>Review List</p>
          {tiles}
        </div>
        <div className='review-buttons'>
          <button onClick={this.handleMoreReviews}>More Reviews</button>
          <button>Add A Review +</button>
        </div>
      </div>
    )
  }
}

export default ReviewList;