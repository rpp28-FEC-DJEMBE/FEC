import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from './ImageGallery.jsx';
import ProductControls from './ProductControls.jsx';
import ProductDescription from './ProductDescription.jsx';
import axios from 'axios';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 22168,
      productData: {},
      productStyles: {},
      selectedStyleId: null
    }
  }

  componentDidMount() {

    axios.get('http://localhost:3000/products/' + this.state.productId)
      .then(response => {
        console.log('Overview.jsx: Received product data from server');
        this.setState({
          productData: response.data
        });
        // console.log('Overview.jsx: state = ', JSON.stringify(this.state));
      })
      .catch(err => {
        return err;
      })

    axios.get(`http://localhost:3000/products/${this.state.productId}/styles`)
      .then(response => {
        console.log('Overview.jsx: Received style data from server');
        this.setState({
          productStyles: response.data
        })
      })
      .catch(err => {
        return err;
      })

  }

  render() {
    return(
      <div className="container product-overview">
        <ImageGallery styles={this.state.productStyles} />
        <ProductControls />
        <ProductDescription />
      </div>
    )
  }
}

export default Overview;