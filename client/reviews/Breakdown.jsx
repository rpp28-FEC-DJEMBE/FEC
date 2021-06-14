import React from 'react';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

class Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metaData: {},
      isLoaded: false
      // metaData: {
      //   "product_id": "22122",
      //   "ratings": {
      //       "2": "2",
      //       "3": "3",
      //       "4": "1",
      //       "5": "1"
      //   },
      //   "recommended": {
      //       "false": "1",
      //       "true": "6"
      //   },
      //   "characteristics": {
      //       "Fit": {
      //           "id": 74277,
      //           "value": "4.6190476190476190"
      //       },
      //       "Length": {
      //           "id": 74278,
      //           "value": "3.5000000000000000"
      //       },
      //       "Comfort": {
      //           "id": 74279,
      //           "value": "5.0000000000000000"
      //       },
      //       "Quality": {
      //           "id": 74280,
      //           "value": "4.0000000000000000"
      //       }
      //   }
      // }
    }
  }

  componentDidMount() {
    axios.get(`/reviews/meta?product_id=${this.props.productId}`)
      .then((res) => {
        this.setState({
          metaData: res.data ,
          isLoaded: true
        })
      })
      .catch((err) => {
        console.log('Error fetching review meta data', err);
      })
  }

  render() {
    let { ratings, recommended } = this.state.metaData;
    if (!this.state.isLoaded) {
      return (
        <section className="breakdown">
          <p>Loading...</p>
        </section>
      )
    } else {
      return (
        <div className='breakdown'>
          <RatingBreakdown ratings={ratings} recommended={recommended}/>
          <ProductBreakdown />
        </div>
      )
    }
  }
}

export default Breakdown;