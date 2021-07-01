import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Breakdown from './Breakdown.jsx';
import { sortRelevantReviews } from './reviewHelpers.js';

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

  async getMetaData() {
    try {
      let response = await axios.get(`/reviews/meta?product_id=${this.props.productId}`);
      let metaData = response.data;
      return metaData;
    } catch(err) {
      console.log('Error fetching review meta data')
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.productId !== this.props.productId){
      this.getReviews()
      .then((data) => {
        this.setState({
          reviews: sortRelevantReviews(data.results),
          productId: Number(data.product)
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
        isLoaded: true
      })
      // return this.getMetaData()
    })
    // .then((metaData) => {
    //   this.setState({
    //     metaData: metaData,
    //     isLoaded: true
    //   })
    //   console.log('metadata', metaData)
    // })
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
            <Breakdown productId={this.props.productId} metaData={this.state.metaData} isLoaded={this.state.isLoaded}/>
            <ReviewList reviews={this.state.reviews} handleSort={this.handleSort} productId={this.props.productId}    productName={this.props.productName}/>

          </div>
        </div>
      )
    }
  }
}

export default Reviews;