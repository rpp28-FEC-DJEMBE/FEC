import React from 'react';
import axios from 'axios';

import ImageGallery from './ImageGallery.jsx';
import ProductControls from './ProductControls.jsx';
import ProductDescription from './ProductDescription.jsx';

import './overview.css';
import {testDataStyles} from '../../test/overview/testData.js';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null,
      productStyles: [],
      selectedStyleId: null,
      selectedStyle: [],
      productLoaded: false,
      styleLoaded: false,
      useMockData: false
    }
  }

  componentDidMount() {
    this.setState({
      productLoaded: false,
      styleLoaded: false
    });
    this.getProduct(this.props.productId);
    this.getStyles(this.props.productId);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.productId != this.props.productId) {
      this.setState({
        productLoaded: false,
        styleLoaded: false
      });
      this.getProduct(this.props.productId);
      this.getStyles(this.props.productId);
    }
  }

  setStyle(styleId, styles) {
    let style = styles.find( ({style_id}) => style_id => style_id === styleId );
    this.setState({
      selectedStyleId: styleId,
      selectedStyle: style
    });
  }

  getStyles(productId, getMockData) {
    const mock = (getMockData || this.state.useMockData);

    let styles;
    let selectedStyle;
    const endpoint = `/products/${productId}/styles`;

    try {

      if (mock) {
        // console.log('Overview: Getting mock style data');
        styles = testDataStyles;
        this.setState({
          productStyles: styles,
          selectedStyleId: styles[0].style_id,
          selectedStyle: styles[0],
          isLoaded: true
        });
      }

      if (!mock) {
        this.getAPIData(endpoint)
          .then(response => {
            // console.log('Overview: Received style data from the server:', response);
            styles = response.data.results;
            this.setState({
              productStyles: styles,
              selectedStyleId: styles[0].style_id,
              selectedStyle: styles[0],
              styleLoaded: true
            });
          })
          .catch(error => {
            console.error('Overview: Error getting style data from the server', error);
          })
      }

    } catch (error) {
      console.error('Overview: Error getting style data', error);
    }

  }

  getProduct(productId) {

    // TODO: mock product data
    let product;
    const endpoint = '/products/' + this.props.productId;

    this.getAPIData(endpoint)
      .then(response => {
        // console.log('Overview: Received product data from the server:', response);
        product = [];
        product.push(response.data);
        this.setState({
          product: product,
          productLoaded: true
        });
      })
      .catch(error => {
        console.error('Overview: Error getting product data from the server', error);
      })
  }

  async getAPIData(endpointUrl) {
    try {
      const response = await axios.get(endpointUrl);
      // console.log('Overview: Received data from server');
      return response
    } catch (error) {
      // console.error('Overview: Error getting data from server');
      return error;
    }
  }

  render() {

    if (!this.state.productLoaded || !this.state.styleLoaded) {
      return (
        <section className="container o-product-overview">
          <p>Loading...</p>
        </section>
      )
    } else {
      return (
        <section className="o-product-overview">
          <ImageGallery selectedStyleId={this.state.selectedStyleId} stylePhotos={this.state.selectedStyle.photos} />
          <ProductControls product={this.state.product} style={this.state.selectedStyle} styles={this.state.productStyles} />
          <ProductDescription product={this.state.product} />
        </section>
      );
    }
  }
}

export default Overview;