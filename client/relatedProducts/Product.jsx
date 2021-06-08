import React from 'react';
import style from './Product.css';


const Product = ({userId, username, rating, cardBtn}) => (
  <div className="productCard">

    <div className="cardBtn">
      <a className="compareBtn">{cardBtn}</a>
    </div>

    <div className="productImage">
      <img src="" alt={userId}></img>
    </div>

    <div className="productDetailBox">
      <p>CATEGORY</p>
      <p>title: {username}</p>
      <p>price: ${userId}</p>
      <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
    </div>

  </div>
)

export default Product;
