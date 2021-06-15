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
    let { ratings, recommended, characteristics } = this.state.metaData;
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
          <ProductBreakdown characteristics={characteristics}/>
        </div>
      )
    }
  }
}

export default Breakdown;