import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';
import AddReview from './AddReview.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: this.props.reviews.slice(0,2),
      reviews: this.props.reviews.slice(),
      showAdd: false
    }
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.handleAddReview = this.handleAddReview.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  renderInitial() {
    return this.state.initial.map((review, index) => {
      return <ReviewTile key={index} review={review} />
    })
  }

  handleSort(e) {
    console.log('handle sort', e.target.value);
    if (e.target.value === 'helpful') {
      let helpfulReviews = this.props.reviews.sort((a, b) => b.helpfulness - a.helpfulness);
      this.setState({
        initial: helpfulReviews.slice(0,2),
        reviews: helpfulReviews.slice(this.state.initial.length, helpfulReviews.length)
      })
      console.log('handle sort', this.state);
    }




    // axios.get(`/reviews/?count=100&sort=${e.target.value}&product_id=${this.props.productId}`)
    //   .then((res) => {
    //     this.setState({
    //       reviews: res.data.results,
    //     });

    //   })
    //   .catch((err) => {
    //     console.log('Error updating sort', err);
    //   })
  }

  handleMoreReviews() {
    this.setState((prevState) => ({
      initial: prevState.initial.concat(this.state.reviews.splice(0,2))
    }))
    console.log('more reviews', this.state);
  }

  handleAddReview() {
    if (!this.state.showAdd) {
      this.setState({ showAdd: true })
    }
  }

  handleClose() {
    this.setState({ showAdd: false })
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
        <SortOptions reviews={this.props.reviews} handleSort={this.handleSort}/>
        <div className='review-list'>
          {tiles}
        </div>
        <div className='review-buttons'>
          {moreReviews}
          <button onClick={this.handleAddReview}>Add A Review +</button>
          <AddReview show={this.state.showAdd} productId={this.props.productId} handleClose={this.handleClose}/>
        </div>
      </div>
    )
  }
}

export default ReviewList;