import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Breakdown from './Breakdown.jsx';
import { sortRelevantReviews, getRatings, getRecommend } from './reviewHelpers.js';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      isLoaded: false
    }
  }

  async getReviews() {
    try {
      let response = await axios.get(`/reviews/?count=100&sort=relevant&product_id=${this.props.productId}`)
      let reviews = response.data;
      return reviews;
    } catch(err) {
      console.log('Error fetching review data')
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.productId !== this.props.productId){
      this.getReviews()
      .then((data) => {
        this.setState({
          reviews: sortRelevantReviews(data.results),
          productId: Number(data.product),
          ratings: getRatings(data.results),
          recommended: getRecommend(data.results)
        })
      })
    }
  }

  componentDidMount() {
    this.getReviews()
    .then((data) => {
      this.setState({
        reviews: sortRelevantReviews(data.results),
        productId: Number(data.product),
        isLoaded: true,
        ratings: getRatings(data.results),
        recommended: getRecommend(data.results)
      })
    })
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <section className="ratings-reviews">
          <p>Loading...</p>
        </section>
      )
    } else {
    return (
      <div className='ratings-reviews'>
          <h3 id='rr-title'>Ratings and Reviews</h3>
          <div className='rr-content'>
            <Breakdown
              productId={this.props.productId}
              reviews={this.state.reviews}
              ratings={this.state.ratings}
              recommended={this.state.recommended}
            />
            <ReviewList
              reviews={this.state.reviews}
              handleSort={this.handleSort}
              productId={this.props.productId}
              productName={this.props.productName}
            />
          </div>
        </div>
      )
    }
  }
}

export default Reviews;