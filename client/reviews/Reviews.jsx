import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Breakdown from './Breakdown.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 22161,
      reviews: [],
    }
  }

  componentDidMount() {
    axios.get(`/reviews/?count=100&sort=relevant&product_id=${this.props.productId}`)
      .then((res) => {
        this.setState({reviews: res.data.results})
      })
      .catch((err) => {
        console.log('Error fetching review results', err);
      })
  }

  render() {
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

export default Reviews;