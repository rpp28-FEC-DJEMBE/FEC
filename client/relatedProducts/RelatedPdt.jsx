// import React from 'react';
import React, {useEffect, useState} from 'react';

import style from './RelatedPdt.css';
import OutfitAddCard from './OutfitAddCard.jsx';
import Product from './Product.jsx';
import Comparison from './Comparison.jsx';
const axios = require('axios');



function RelatedPdt(props) {
  // const [id, setId] = useState(props.productId);

  const [relatedPdts, setRelatedPdts] = useState({pdt_ids: [], relatedProducts: []});
  const [outfits, setOutfits] = useState([]);
  const [clickedId, setClickedId] = useState(22122);

  useEffect( () => {
    getOutfits();
    getRelatedPdts(props.productId);
  }, [])

  // if (relatedPdts.pdt_ids.length !== 0) {
    // console.log("state3", relatedPdts.pdt_ids, relatedPdts.relatedProducts);
  // }

  const getRelatedPdts = async (id) => {
    try {
      // console.log('currentID:', props.productId)
      const pdt_ids = await axios.get(`/products/${id}/related`);
      // console.log('pdt_ids.data', pdt_ids.data);
      let pdt_idsData = [];
      pdt_ids.data.forEach( pdt_id => {
        if (!pdt_idsData.includes(pdt_id)) {
          pdt_idsData.push(pdt_id);
        }
      } )

      let pdtPromises = [];
      for (let i = 0; i < pdt_idsData.length; i++) {
        pdtPromises[i] = axios.get(`/products/${pdt_idsData[i]}`)
        // console.log('related Promises', pdtPromises[i]);
      }
      Promise.all(pdtPromises)
        .then( (productsData) => {
          let products = [];
          productsData.forEach( (pdtData) => {
            products.push(pdtData.data);
          } )
          // console.log('products', productsData[0].data);
          setRelatedPdts({pdt_ids: pdt_idsData, relatedProducts: products})
        } )
    } catch (err) {
      console.log(err);
    }
  }

  const getOutfits = () => {
    axios.get('/products?page=1&count=4')
      .then( res => {
        // console.log('getOutfits', res.data);
        setOutfits(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const slideLeft = () => {
  }

  const slideRight = () => {
  }

  return (
    <div>

      <div className="related-product-widget">
        <h3 className="related-product-header">RELATED PRODUCTS</h3>
        <div className="related-product-box">
          <button id="left-btn" onClick={slideLeft}>left</button>
          {
            relatedPdts.relatedProducts.map( product =>
              (
                <Product
                  key={product.id}
                  overviewProductId={props.productId}
                  id={product.id}
                  category={product.category}
                  name={product.name}
                  default_price={product.default_price}
                  rating={'5'}
                  cardBtn={'\u2606'}
                />
              )
            )
          }
          <button id="right-btn" onClick={slideRight}>right</button>
        </div>
      </div>

      <div className="related-product-widget">
        <h3 className="related-product-header">YOUR OUTFIT</h3>
        <div className="related-product-box">
          <button id="left-btn" onClick={slideLeft}>left</button>
          <OutfitAddCard />
          {
            outfits.map( outfit =>
              (
                <Product
                  key={outfit.id}
                  overviewProductId={props.productId}
                  id={outfit.id}
                  category={outfit.category}
                  name={outfit.name}
                  default_price={outfit.default_price}
                  rating={'5'}
                  cardBtn={'\u2327'}
                />
              )
            )
          }
          <button id="right-btn" onClick={slideRight}>Right</button>
        </div>
      </div>

      <Comparison productId={props.productId} clickedId={clickedId}/>

    </div>
  )

}

export default RelatedPdt;



