import React from 'react';
import ReactDOM from 'react-dom';

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
        <div className="product-image">
          <p>Product image component</p>
        </div>
        <div className="product-controls">
          <div>Ratings</div>
          <p>Category</p>
          <p>Expanded Product Name</p>
          <p>Price</p>
          <div>Style Icons</div>
          <div></div>
            <div>Select a size</div>
            <div>Qty</div>
            <div>Add to bag</div>
            <div>Star</div>
        </div>
        <div className="productDescription">
          <p>Product Slogan</p>
          <p>Product Description</p>
          <ul>
            <li>GMO and pesticide-free</li>
            <li>Made with real artificial lemon flavorettes</li>
            <li>What is happening?</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Overview;