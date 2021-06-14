import React from 'react';
import axios from 'axios';

import ImageGallery from './ImageGallery.jsx';
import ProductControls from './ProductControls.jsx';
import ProductDescription from './ProductDescription.jsx';

import './overview.css';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      productStyles: [],
      selectedStyleId: null,
      isLoaded: false
    }
  }

  async componentDidMount() {
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

  // getProduct() {
  //   axios.get('http://localhost:3000/products/' + this.props.productId)
  //     .then(response => {
  //       console.log('Overview: Received product data from server');
  //       this.setState({
  //         productData: response.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log('Overview: Error getting product data from server:', err);
  //     })
  // }

  // this.state.productStyles.find( ({style_id}) => style_id => style_id === selectedStyleId );

  render() {

    if (!this.state.isLoaded) {
      return (
        <section className="container o-product-overview">
          <p>Loading...</p>
        </section>
      )
    } else {

      let selectedStyle = this.state.productStyles.find( ({style_id}) => style_id => style_id === selectedStyleId );
      return (
        <section className="o-product-overview">
          <ImageGallery stylePhotos={selectedStyle.photos} selectedStyleId={this.state.selectedStyleId} />
          <ProductControls styles={this.state.productStyles}/>
          <ProductDescription productId={this.props.productId} />
        </section>
      );
    }
  }
}

export default Overview;