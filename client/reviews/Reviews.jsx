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
      // reviews: [
      //   {
      //     "review_id": 5,
      //     "rating": 3,
      //     "summary": "I'm enjoying wearing these shades",
      //     "recommend": false,
      //     "response": null,
      //     "body": "Comfortable and practical.",
      //     "date": "2019-04-14T00:00:00.000Z",
      //     "reviewer_name": "shortandsweeet",
      //     "helpfulness": 5,
      //     "photos": [{
      //         "id": 1,
      //         "url": "urlplaceholder/review_5_photo_number_1.jpg"
      //       },
      //       {
      //         "id": 2,
      //         "url": "urlplaceholder/review_5_photo_number_2.jpg"
      //       }
      //     ]
      //   },
      //   {
      //     "review_id": 3,
      //     "rating": 4,
      //     "summary": "I am liking these glasses",
      //     "recommend": true,
      //     "response": "Glad you're enjoying the product!",
      //     "body": "They are very dark. But that's good because I'm in very sunny spots",
      //     "date": "2019-06-23T00:00:00.000Z",
      //     "reviewer_name": "bigbrotherbenjamin",
      //     "helpfulness": 5,
      //     "photos": [],
      //   },
      // ]
    }
  }

  componentDidMount() {
    axios.get(`/reviews/?sort=relevant&product_id=${this.state.product_id}`)
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
            <Breakdown productId={this.state.product_id}/>
            <ReviewList reviews={this.state.reviews} />
          </div>
        </div>


    )
  }
}

export default Reviews;