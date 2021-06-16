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
      product: [],
      productStyles: [],
      selectedStyleId: null,
      selectedStyle: [],
      isLoaded: false,
      useMockData: true
    }
  }

  componentDidMount() {
    this.getStyles(this.props.productId);
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
    const endpoint = `http://localhost:3000/products/${productId}/styles`;

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
              isLoaded: true
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

  // TODO: getProduct()
  // axios.get('http://localhost:3000/products/' + this.props.productId)


  render() {

    if (!this.state.isLoaded) {
      return (
        <section className="container o-product-overview">
          <p>Loading...</p>
        </section>
      )
    } else {
      return (
        <section className="o-product-overview">
          <ImageGallery selectedStyleId={this.state.selectedStyleId} stylePhotos={this.state.selectedStyle.photos} />
          <ProductControls styles={this.state.productStyles}/>
          <ProductDescription productId={this.props.productId} />
        </section>
      );
    }
  }
}

export default Overview;