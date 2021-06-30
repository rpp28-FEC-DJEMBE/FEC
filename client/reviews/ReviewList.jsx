import React from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';
import AddReview from './AddReview.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      initial: this.props.reviews.slice(0,2),
      reviews: this.props.reviews.slice(),
      showAdd: false,
    }
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.handleAddReview = this.handleAddReview.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
        initial: this.props.reviews.slice(0,2),
        reviews: this.props.reviews.slice(),
      })
      // console.log('review list props', this.props.reviews)
      // console.log('review list state', this.state)
    }
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
      <button className='review-btn' onClick={this.handleMoreReviews}>More Reviews</button>;

    return (
      <div className='review-container'>
        <SortOptions reviews={this.props.reviews} handleSort={this.props.handleSort}/>
        <div className='review-list'>
          {tiles}
          {/* {
            (this.state.initial.map((review, index) => {
              return <ReviewTile key={index} review={review} />
            }))
          } */}
        </div>
        <div className='review-buttons'>
          {moreReviews}
          <button className='review-btn' onClick={this.handleAddReview}>Add A Review +</button>
          <AddReview
            show={this.state.showAdd}
            productId={this.props.productId}
            handleClose={this.handleClose}
            metaData={this.state.metaData}
            productName={this.props.productName}
          />
        </div>
      </div>
    )
  }
}

export default ReviewList;