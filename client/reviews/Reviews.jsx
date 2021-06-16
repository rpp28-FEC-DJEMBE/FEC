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
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(e) {
    console.log('handle sort', e.target.value);
    axios.get(`/reviews/?count=100&sort=${e.target.value}&product_id=${this.props.productId}`)
      .then((res) => {
        this.setState({
          reviews: res.data.results,
        });

      })
      .catch((err) => {
        console.log('Error updating sort', err);
      })
  }


  componentDidMount() {
    axios.get(`/reviews/?count=100&sort=relevant&product_id=${this.props.productId}`)
    // axios.get(`/reviews/?count=100&sort=relevant&product_id=${22168}`)
      .then((res) => {
        this.setState({
          reviews: res.data.results,
          isLoaded: true
        });
        console.log('initial state', this.state);
      })
      .catch((err) => {
        console.log('Error fetching review data');
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
            <ReviewList reviews={this.state.reviews} handleSort={this.handleSort} productId={this.props.productId}/>
          </div>
        </div>
      )
    }
  }
}

export default Reviews;