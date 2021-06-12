// import React from 'react';
import React, {useEffect, useState} from 'react';
import style from './Product.css';
const axios = require('axios');

function Product ({overviewProductId, id, category, name, default_price, rating, cardBtn}) {
  const [img, setImg] = useState('');

  useEffect( () => {
    getImg();
  }, [])

  const getImg = () => {
    axios.get(`/products/${id}/styles`)
      .then( res => {
        // console.log('product card', res.data.results);
        // console.log('product card', res.data.results[0].photos[0].url);
        if (!res.data.results[0].photos[0].url) {
          // console.log('no image product card', res.data.results[0].photos[0].url);
          // setImg(`${noimg}`);
          setImg(`https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg`);
        } else {
          setImg(res.data.results[0].photos[0].url);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="product-card">

      <div className="card-btn">
        <a className="compare-btn">{cardBtn}</a>
      </div>

      <div className="product-image-div">
        <img className="product-image" src={img} alt={`${id}`+'No Img'}></img>
      </div>

      <div className="product-detail-box">
        <p className="product-category">{category}</p>
        <p className="product-name">{name}</p>
        <p className="product-price">${default_price}</p>
        <p className="product-id">id: {id} -OverviewId: {overviewProductId}</p>
        <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
      </div>

    </div>
  )
}


export default Product;
