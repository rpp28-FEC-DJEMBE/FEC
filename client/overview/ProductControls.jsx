import React from 'react';
import './overview.css';

import utils from './overviewUtils.js';
import RatingStars from '../reviews/RatingStars.jsx';

class ProductControls extends React.Component {
  constructor(props) {
    super(props);

    if (props.style) {
      console.log('this.props.style.original_price:', utils.toCurrency(this.props.style.original_price));
    } else {
      console.log('No friggin this.props.style!');
    }

  }

  render() {
    if (!this.props) {
      return null;
    } else {
      return(
        <section className="o-product-controls">
          <RatingStars rating={3} size={14} />

          <p className="o-product-category">{this.props.product[0].category}</p>
          <p className="o-product-name">{this.props.product[0].name}</p>
          <p className="o-product-style-price">{utils.toCurrency(this.props.style.original_price)}</p>
          <p className="o-product-style-name"><b>STYLE > </b>{this.props.style.name}</p>
          <hr />
          <ul className="o-style-selctor">
            <li>Style 1</li>
            <li>Style 1</li>
          </ul>

          <select name="size" className="o-size-list">
            <option value="">Select Size</option>
            <option value="size1">Size XS</option>
            <option value="size2">Size XL</option>
          </select>

          <select name="quantity" className="o-quantity-list">
            <option value="">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>

          <button>Add to bag</button>

          <button>&#9734;</button>
        </section>
      )
    }
  }
}

export default ProductControls;