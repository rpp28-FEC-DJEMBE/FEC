import React from 'react';
// import './overview.css';

class ProductControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // not yet
    }
  }

  render() {
    return(
      <section className="o-product-controls">
        {/* <StarRating /> */}
        <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>

        <p>Category</p>
        <p>Expanded Product Name</p>
        <p>Price</p>
        <p>Style > Selected Style</p>

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

export default ProductControls;