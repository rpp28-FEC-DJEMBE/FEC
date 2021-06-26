// import React from 'react';
import React, {useEffect, useState} from 'react';
import style from './Product.css';
import RatingStars from '../reviews/RatingStars.jsx';
import ratingHelper from '../reviews/reviewHelpers.js';

const axios = require('axios');

function Product ({overviewProductId, id, category, name, default_price, rating, cardBtn, onProductBtnClick, onOutfitBtnClick, onCardClick}) {
  const [detail, setDetail] = useState({
    img: '',
    sale_price: 0,
    original_price: 0,
    starAverage: 0.1
  });
  const [className, setClassName] = useState({regular: '', sale: 'product-sale-price-none'});

  useEffect( () => {
    getDetail();
  }, [])

  const getDetail = async () => {
    try {
      let starAverage;
      const ratingData = await axios.get(`/reviews/meta?product_id=${id}`);
      // console.log('ratings?', ratingData.data.ratings);
      const ratingAvg = ratingHelper.getAvgRating(ratingData.data.ratings);
      isNaN(ratingAvg) ? starAverage = 0 : starAverage = ratingAvg;
      // console.log('starAverage', starAverage, id);
      axios.get(`/products/${id}/styles`)
      .then( res => {
        // console.log('product card', res.data.results);
        // console.log('product card', res.data.results[0].photos[0].url);
        if (!res.data.results[0].photos[0].url) {
          // console.log('no image product card', res.data.results[0].photos[0].url);
          setDetail({
            img: `https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg`,
            sale_price: res.data.results[0].sale_price,
            original_price: res.data.results[0].original_price,
            starAverage: starAverage
          });
        } else {
          setDetail({
            img: res.data.results[0].photos[0].url,
            sale_price: res.data.results[0].sale_price,
            original_price: res.data.results[0].original_price,
            starAverage: starAverage
          });
        }
        if (res.data.results[0].sale_price) {
          setClassName({regular: "product-default-price", sale: "product-sale-price"})
        }
      })
      .catch(err => {
        // console.log('err1,,,,', err);
        throw err;
      }
    )
    } catch (err) {
      // console.log(err);
      throw err;
    }

  }

  const onClickActionBtn = () => {
    setTimeout( () => {
      if (cardBtn === '\u2606') {
        // console.log('product', cardBtn);
        onProductBtnClick(id);
      } else if (cardBtn === '\u2327') {
        // console.log('outfit', cardBtn);
        onOutfitBtnClick(id);
      }
    } )
  }

  return (
    <div id="pdtCard" className="product-card">

      <div className="card-btn">
        <a className="compare-btn pointer" onClick={onClickActionBtn}>{cardBtn}</a>
      </div>

      <div className="product-image-div pointer" onClick={() => onCardClick(id, name)}>
        <img className="product-image" src={detail.img} alt={`${id}`+'No Img'}></img>
      </div>

      <div className="product-detail-box pointer" onClick={() => onCardClick(id, name)}>
        <p className="product-category">{category}</p>
        <p className="product-name">{name}</p>
        <div className="product-price">
          <span className={className.regular}>${detail.original_price}</span>
          <span className={className.sale}>  ${detail.sale_price}</span>
        </div>
        <p className="product-id">id: {id} -OverviewId: {overviewProductId}</p>
        {/* <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p> */}
        <RatingStars rating={detail.starAverage} size={20}/>
      </div>

    </div>
  )
}


export default Product;
