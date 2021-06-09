import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from './ImageGallery.jsx';
import ProductControls from './ProductControls.jsx';
import ProductDescription from './ProductDescription.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // not yet
    }
  }

  render() {
    return(
      <div className="container product-overview">
        <ImageGallery />
        <ProductControls />
        <ProductDescription />
      </div>
    )
  }
}

export default Overview;