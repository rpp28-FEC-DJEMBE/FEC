import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Breakdown from './Breakdown.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    axios.get(`/reviews/?count=100&sort=relevant&product_id=${this.props.productId}`)
    // axios.get(`/reviews/?count=100&sort=relevant&product_id=${22168}`)
      .then((res) => {
        this.setState({
          reviews: res.data.results,
          isLoaded: true
        })
      })
      .catch((err) => {
        console.log('Error fetching review data')
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
          <p>Ratings and Reviews</p>
          <div className='rr-content'>
            <Breakdown productId={this.props.productId}/>
            <ReviewList reviews={this.state.reviews} />
          </div>
        </div>
      )
    }
  }
}

export default Reviews;