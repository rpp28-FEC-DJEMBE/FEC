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
  const [clickedId, setClickedId] = useState(props.productId);
  const [btnId, setBtnId] = useState(props.productId);
  // const [showComp, setShowComp] = useState(false);
  const [showComp, setShowComp] = useState(true);

  useEffect( () => {
    getOutfits();
    getRelatedPdts(props.productId);
  }, [props.productId])
  // }, [props.productId, btnId])
  // })

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

  const addOutfit = async (selectedId) => {
    try {
      const newOutfitData = await axios.get(`/products/${selectedId}`);
      // console.log('newOutfitData', newOutfitData)
      let newOutfit = newOutfitData.data;
      // console.log('newOutfit', newOutfit)

      // outfits.push(newOutfit)    //doesn't work because of pending promise?
      // console.log('updated', outfits)
      // setOutfits(outfits);

      Promise.all(outfits)
        .then( (currentOutfits) => {
          // console.log('currentOutfits2',currentOutfits)
          // console.log('newOutfit2', newOutfit)
          let allOutfitIds = [];
          currentOutfits.forEach( outfit => {
            allOutfitIds.push(outfit.id);
          } )
          console.log('allOutfitIds', allOutfitIds);
          if (!allOutfitIds.includes(newOutfit.id)) {
            currentOutfits.push(newOutfit);
          }
          // console.log('updated', currentOutfits)
          setOutfits(currentOutfits);
        } )
    } catch (err) {
      console.log(err);
    }
  }

  const removeOutfit = async (selectedId) => {

    Promise.all(outfits)
      .then( (currentOutfits) => {
        console.log('currentOutfits2',selectedId, currentOutfits);
        // // console.log('updated', currentOutfits)
        let updatedOutfits = currentOutfits;
        for (let i = 0; i < currentOutfits.length; i++) {
          if (currentOutfits[i].id === selectedId) {
            console.log(i, currentOutfits[i].id, currentOutfits[i].name)
            updatedOutfits.splice(i, 1);
          }
        }
        // console.log('outfitCopy', outfitCopy)
        console.log('updatedOutfits', updatedOutfits)
        setOutfits(updatedOutfits);
      } )
      .catch(err => {
        console.log(err);
      })

  }

  const slideLeft = () => {
  }

  const slideRight = () => {
  }

  const onProductBtnClick = (btnId) => {
    console.log('onProductBtnClick', btnId);
    setShowComp(true);
    setBtnId(btnId);
  }

  const onCompaClose = () => {
    console.log('onCompaClose');
    setShowComp(false);
  }

  const onAddOutfitClick = () => {
    console.log('onAddOutfitClick', props.productId);
    // setOutfits(res.data);  //todo
    addOutfit(props.productId);
  }

  const onOutfitBtnClick = (btnId) => {
    console.log('onOutfitBtnClick', btnId);
    // setOutfits(res.data);  //todo
    removeOutfit (btnId);
  }

  return (
    <div>

      <div className="related-product-widget">
        <h3 className="related-product-header">RELATED PRODUCTS</h3>
        <div className="related-product-box">
          <button id="left-btn" onClick={slideLeft}>{'\u1438'}</button>
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
                  onProductBtnClick={onProductBtnClick}
                  onCardClick={props.onCardClick}
                />
              )
            )
          }
          <button id="right-btn" onClick={slideRight}>{'\u1433'}</button>
        </div>
      </div>

      <div className="related-product-widget">
        <h3 className="related-product-header">YOUR OUTFIT</h3>
        <div className="related-product-box">
          <button id="left-btn" onClick={slideLeft}>{'\u1438'}</button>
          <OutfitAddCard onAddOutfitClick={onAddOutfitClick}/>
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
                  onOutfitBtnClick={onOutfitBtnClick}
                  onCardClick={props.onCardClick}
                />
              )
            )
          }
          <button id="right-btn" onClick={slideRight}>{'\u1433'}</button>
        </div>
      </div>

      <Comparison productId={props.productId} btnId={btnId} showComp={showComp} onCompaClose={onCompaClose}/>

    </div>
  )

}

export default RelatedPdt;



