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
          reviews: data.results,
          productId: Number(data.product)
        })
      })
    }
  }

  componentDidMount() {
    this.getReviews()
    .then((data) => {
      this.setState({
        reviews: data.results,
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
          <h3>Ratings and Reviews</h3>
          <div className='rr-content'>
            <Breakdown productId={this.props.productId} metaData={this.state.metaData} isLoaded={this.state.isLoaded}/>
            <ReviewList reviews={this.state.reviews} handleSort={this.handleSort} productId={this.props.productId}/>
          </div>
        </div>
      )
    }
  }
}

export default Reviews;