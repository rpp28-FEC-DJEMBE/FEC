import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: this.props.reviews.slice(0,2),
      reviews: this.props.reviews.slice(),
    }
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
  }

  renderInitial() {
    return this.state.initial.map((review, index) => {
      return <ReviewTile key={index} review={review} />
    })
  }

  handleMoreReviews() {
    this.setState((prevState) => ({
      initial: prevState.initial.concat(this.state.reviews.splice(0,2))
    }))
  }

  componentDidMount() {
    this.setState({
      initial: this.state.reviews.splice(0,2)
    })
  }

  render() {
    let tiles = (this.props.reviews.length) ? this.renderInitial() : `There are currently no reviews for this product.
    Be the first to leave a review!`;
    let moreReviews = (this.state.initial.length === this.props.reviews.length) ? null :
      <button onClick={this.handleMoreReviews}>More Reviews</button>;

    return (
      <div className='review-container'>
        <SortOptions reviews={this.props.reviews} handleSort={this.props.handleSort}/>
        <div className='review-list'>
          {tiles}
        </div>
        <div className='review-buttons'>
          {moreReviews}
          <button>Add A Review +</button>
        </div>
      </div>
    )
  }
}

export default ReviewList;