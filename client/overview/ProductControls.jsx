import React from 'react';
import './overview.css';
import axios from 'axios';

import StyleSelector from './StyleSelector.jsx';
import CartActions from './CartActions.jsx';
import utils from './overviewUtils.js';
import RatingStars from '../reviews/RatingStars.jsx';
import ratingHelper from '../reviews/reviewHelpers.js';


class ProductControls extends React.Component {
  constructor(props) {
    super(props);

    this.renderPrice = this.renderPrice.bind(this);
  }

  getStarAverage() {
    let avgRating = ratingHelper.getAvgRating(this.props.ratings);
    avgRating = isNaN(avgRating) ? 0 : avgRating
    return (
      <React.Fragment>
        <RatingStars rating={avgRating} size={14} />
        <a href="#rr-title" className="o-ratings-link">Read all reviews</a>
      </React.Fragment>
    );
  }

  renderPrice() {
    if (this.props.style.sale_price) {
      return (
        <React.Fragment>
          <p className="o-product-style-price">
            <span className="strikethrough">{utils.toCurrency(this.props.style.original_price)}</span>
            <span className="sale">{utils.toCurrency(this.props.style.sale_price)}</span>
          </p>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <p className="o-product-style-price">{utils.toCurrency(this.props.style.original_price)}</p>
        </React.Fragment>
      )
    }
  }

  render() {
    if (!this.props) {
      return null;
    } else {
      return(
        <section className="o-product-controls">
          {this.getStarAverage()}
          <p className="o-product-category">{this.props.product[0].category}</p>
          <p className="o-product-name">{this.props.product[0].name}</p>
          {this.renderPrice()}
          <p className="o-product-style-name"><b>STYLE <span>> </span></b>{this.props.style.name}</p>
          <StyleSelector styles={this.props.styles} selectedStyleId={this.props.selectedStyleId} setStyle={this.props.setStyle} />
          <CartActions style={this.props.style} selectedStyleId={this.props.selectedStyleId} addToCart={this.props.addToCart} />
        </section>
      )
    }
  }
}

export default ProductControls;