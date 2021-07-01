import React from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';
import AddReview from './AddReview.jsx';
import { sortRelevantReviews } from './reviewHelpers.js';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      showAdd: false,
      count: 2,
      sorting: 'relevant'
    }
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.handleAddReview = this.handleAddReview.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(e) {
    if (e.target.value === 'helpful') {
      let helpfulReviews = this.props.reviews.sort((a, b) => b.helpfulness - a.helpfulness);

      this.setState({
        sorting: 'helpful'
      })
    }

    if (e.target.value === 'relevant') {
      sortRelevantReviews(this.props.reviews);

      this.setState({
        sorting: 'relevant'
      })
    }

    if (e.target.value === 'newest') {
      let newestReviews = this.props.reviews.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

      this.setState({
        sorting: 'newest'
      })
    }
  }

  handleMoreReviews() {
    this.setState((prevState) => ({
      count: prevState.count += 2,
    }))
  }

  handleAddReview() {
    if (!this.state.showAdd) {
      axios.get(`/reviews/meta?product_id=${this.props.productId}`)
      .then((res) => {
        this.setState({
          metaData: res.data,
          showAdd: true
        })
      })
      .catch((err) => {
        console.log('Error fetching review meta data', err);
      })
    }
  }

  handleClose() {
    this.setState({ showAdd: false })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.productId !== this.props.productId){
      this.setState({
        count: 2,
        sorting: 'relevant'
      })
    }
  }

  render() {
    let display = this.props.reviews.slice(0, this.state.count)
    let tiles = (this.props.reviews.length) ? (display.map((review, index) => {
      return <ReviewTile key={index} review={review} />
    })) : `There are currently no reviews for this product.
    Be the first to leave a review!`;
    let moreReviews = (display.length >= this.props.reviews.length) ? null :
      <button className='review-btn' onClick={this.handleMoreReviews}>More Reviews</button>;

    return (
      <div className='review-container'>
        <SortOptions reviews={this.props.reviews} handleSort={this.handleSort} sorting={this.state.sorting}/>
        <div className='review-list'>
          {tiles}
        </div>
        <div className='review-buttons'>
          {moreReviews}
          <button className='review-btn' onClick={this.handleAddReview}>Add A Review +</button>
          <AddReview
            show={this.state.showAdd}
            productId={this.props.productId}
            handleClose={this.handleClose}
            metaData={this.state.metaData}
          />
        </div>
      </div>
    )
  }
}

export default ReviewList;