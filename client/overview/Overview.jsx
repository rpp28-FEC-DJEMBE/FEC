import React from 'react';
// import ReactDOM from 'react-dom';
import ImageGallery from './ImageGallery.jsx';
import ProductControls from './ProductControls.jsx';
import ProductDescription from './ProductDescription.jsx';
import axios from 'axios';


class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 22168,
      productData: null,
      productStyles: null,
      selectedStyleId: null
    }
  }

  componentDidMount() {

    // axios.get('http://localhost:3000/products/' + this.state.productId)
    //   .then(response => {
    //     console.log('Overview: Received product data from server');
    //     this.setState({
    //       productData: response.data
    //     });
    //   })
    //   .catch(err => {
    //     console.log('Overview: Error getting product data from server:', err);
    //   })


    axios.get(`http://localhost:3000/products/${this.state.productId}/styles`)
      .then(response => {
        console.log('Overview: Received style data from server');
        console.log('Overview: style data = ', response.data);
        this.setState({
          productStyles: response.data
        });
        console.log('Overview: this.state.productStyles = ', this.state.productStyles);
      })
      .catch(err => {
        console.log('Overview: Error getting style data from server:', err);
      })

  }

  render() {
    return (
      <div className="container product-overview">
        <ImageGallery styles={this.state.productStyles} />
        {/* <ImageGallery /> */}
        <ProductControls />
        <ProductDescription />
      </div>
    );
  }
}

export default Overview;