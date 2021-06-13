import React from 'react';
import axios from 'axios';

import ImageGallery from './ImageGallery.jsx';
import ProductControls from './ProductControls.jsx';
import ProductDescription from './ProductDescription.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productStyles: [],
      selectedStyleId: null,
      isLoaded: false
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/products/${this.props.productId}/styles`)
      .then(response => {
        console.log('Overview: Received style data from server');
        console.log('Overview: style response.data.results = ', response.data.results);
        this.setState({
          productStyles: response.data.results,
          selectedStyleId: response.data.results[0].style_id,
          isLoaded: true
        });
      })
      .catch(err => {
        console.log('Overview: Error getting style data from server:', err);
      })
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <section className="container o-product-overview">
          <p>Loading...</p>
        </section>
      )
    } else {
      return (
        <section className="container o-product-overview">
          <ImageGallery styles={this.state.productStyles} styleId={this.state.selectedStyleId} />
          <ProductControls styles={this.state.productStyles}/>
          <ProductDescription productId={this.props.productId} />
        </section>
      );
    }
  }
}

export default Overview;