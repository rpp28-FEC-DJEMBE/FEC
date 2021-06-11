// import React from 'react';
import React, {useEffect, useState} from 'react';

import style from './RelatedPdt.css';
import OutfitAddCard from './OutfitAddCard.jsx';
import Product from './Product.jsx';
import Comparison from './Comparison.jsx';
const axios = require('axios');



function RelatedPdt(props) {
  const [id, setId] = useState(props.productId);
  const [pdt_ids, setPdt_Ids] = useState([]);
  // [22123, 22124, 22129, 22128]
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [outfits, setOutfits] = useState([]);

  useEffect( () => {
    getOutfits();
    getPdt_Ids(id);
    // getRelatedProducts(pdt_ids);
    // getRelatedProducts([22124, 22123, 22129, 22128]);
    getRelatedProducts([props.productId]);   // to test app.js props
  }, [])

  const getOutfits = () => {
    axios.get('/products?page=1&count=4')
      .then( res => {
        console.log(res.data);
        setOutfits(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }


  const getPdt_Ids = (id) => {
    axios.get(`/products/${id}/related`)
      .then( res => {
        console.log('id', id, 'ids', res.data);
        setPdt_Ids(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }


  const getRelatedProducts = (pdt_ids) => {
    const products = [];
    pdt_ids.forEach( pdt_id => {
      axios.get(`/products/${pdt_id}`)
      .then( res => {
        console.log('related', res.data);
        products.push(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    } )
    setRelatedProducts(products);
  }

  const slideLeft = () => {
  }

  const slideRight = () => {
  }

  return (
    <div>

      <div className="relatedProductWidget">
        <h3 className="relatedProductHeader">RELATED PRODUCTS</h3>
        <div className="relatedProductBox">
          <button id="leftBtn" onClick={slideLeft}>left</button>
          {
            relatedProducts.map( product =>
              (
                <Product
                  key={product.id}
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
          <button id="rightBtn" onClick={slideRight}>right</button>
        </div>
      </div>

      <div className="relatedProductWidget">
        <h3 className="relatedProductHeader">YOUR OUTFIT</h3>
        <div className="relatedProductBox">
          <button id="leftBtn" onClick={slideLeft}>left</button>
          <OutfitAddCard />
          {
            outfits.map( outfit =>
              (
                <Product
                  key={outfit.id}
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
          <button id="leftBtn" onClick={slideRight}>Right</button>
        </div>
      </div>

      <Comparison />

    </div>
  )

}

export default RelatedPdt;



