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
      isLoaded: false,
      filters: [],
      display: []
    }
    this.filterStars = this.filterStars.bind(this);
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
          recommended: getRecommend(data.results),
          display: sortRelevantReviews(data.results).slice()
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
        recommended: getRecommend(data.results),
        display: sortRelevantReviews(data.results).slice()
      })
    })
  }

  filterStars(rating) {
    let filters = this.state.filters;

    if (!this.state.filters.includes(rating)) {
      filters.push(rating);
      this.setState({ filters: filters })
      let filtered = this.state.reviews.filter(review => review.rating === rating)
      this.setState({ display: filtered })
    } else {
      let removed = filters.filter(item => item !== rating);
      this.setState({ filters: removed })
    }



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
          <h2 id='rr-title'>RATINGS & REVIEWS</h2>
          <div className='rr-content'>
            <Breakdown
              productId={this.props.productId}
              reviews={this.state.reviews}
              ratings={this.state.ratings}
              recommended={this.state.recommended}
              filterStars={this.filterStars}
              filters={this.state.filters}
            />
            <ReviewList
              reviews={this.state.display}
              handleSort={this.handleSort}
              productId={this.props.productId}
              productName={this.props.productName}
              filters={this.state.filters}
            />
          </div>
        </div>
      )
    }
  }
}

export default Reviews;