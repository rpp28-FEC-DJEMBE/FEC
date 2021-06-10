// import React from 'react';
import React, {useEffect, useState} from 'react';
import style from './Product.css';
const axios = require('axios');

function Product ({id, category, name, default_price, rating, cardBtn}) {
  const [img, setImg] = useState('');

  useEffect( () => {
    getImg();
  }, [])

  const getImg = () => {
    axios.get(`/products/${id}/styles`)
      .then( res => {
        // console.log('product card', res.data.results);
        console.log('product card', res.data.results[0].photos[0].url);
        setImg(res.data.results[0].photos[0].url);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="productCard">

      <div className="cardBtn">
        <a className="compareBtn">{cardBtn}</a>
      </div>

      <div className="productImage">
        <img src={img} alt={`${id}`+'No Img'}></img>
      </div>

      <div className="productDetailBox">
        <p>{category}</p>
        <p>{name} {id}</p>
        <p>${default_price}</p>
        <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
      </div>

    </div>
  )
}


export default Product;
