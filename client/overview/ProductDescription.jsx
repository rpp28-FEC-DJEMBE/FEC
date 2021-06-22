import React from 'react';
import './overview.css';
import featuresHelper from '../relatedProducts/featuresHelper.js';

const ProductDescription = (props) => {

  const renderFeatures = () => {
    const collectedFeatures = featuresHelper.collectFeatures(props.product[0].features);
    const featuresList = collectedFeatures.featureAndValue.map((feature, index) => {
      return (
        <li key={index}>{feature}</li>
      );
    });
    return featuresList;
  }

  if (!props) {
    return null;
  } else {
    return (
      <section className="o-product-description">
        <p className="o-product-description-slogan">{props.product[0].slogan}</p>
        <p className="o-product-description-text">{props.product[0].description}</p>
        <ul className="o-product-description-features">
          {renderFeatures()}
        </ul>
      </section>
    );
  }
}

export default ProductDescription;