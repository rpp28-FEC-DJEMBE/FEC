import React, {useEffect, useState} from 'react';

import style from './RelatedPdt.css';
import OutfitAddCard from './OutfitAddCard.jsx';
import Product from './Product.jsx';
import Comparison from './Comparison.jsx';
const axios = require('axios');

function RelatedPdt(props) {
  const [relatedPdts, setRelatedPdts] = useState({pdt_ids: [], products: []});
  const [pdtLayOut, setPdtLayOut]= useState({displayFirstId: 0, totalItems: 0, pdtLeftBtn: 'pointer btn-Inactive', pdtRightBtn: 'pointer rightBtn btn-Inactive'});
  const [outfits, setOutfits] = useState({pdt_ids: [], products: []});
  const [outfitLayOut, setOutfitLayOut]= useState({displayFirstId: 0, totalItems: 0, pdtLeftBtn: 'pointer btn-Inactive', pdtRightBtn: 'pointer rightBtn btn-Inactive'});
  const [clickedId, setClickedId] = useState(props.productId);
  const [btnId, setBtnId] = useState(props.productId);
  const [showComp, setShowComp] = useState(false);
  const displayPdtItems = 4;
  const displayOutfitItems = displayPdtItems - 1;

  let relatedPdtClassName = 'related-product-box';
  let outfitClassName = 'outfit-box';
  if (props.darkmode) {
    relatedPdtClassName = 'related-product-box-dark';
    outfitClassName = 'outfit-box-dark';
  }

  useEffect( () => {
    getOutfits();
    getRelatedPdts(props.productId);
  }, [props.productId])

  const parseLayout = (displayFirstId, totalItems, pdtLeftBtn, pdtRightBtn) => {
    return {
      displayFirstId: displayFirstId,
      totalItems: totalItems,
      pdtLeftBtn: pdtLeftBtn,
      pdtRightBtn: pdtRightBtn
    }
  }

  const getRelatedPdts = async (id) => {
    try {
      const pdt_ids = await axios.get(`/products/${id}/related`);
      let pdt_idsData = [];
      pdt_ids.data.forEach( pdt_id => {
        if (!pdt_idsData.includes(pdt_id) && pdt_id !== props.productId) {
          pdt_idsData.push(pdt_id);
        }
      } )

      let pdtPromises = [];
      for (let i = 0; i < pdt_idsData.length; i++) {
        pdtPromises[i] = axios.get(`/products/${pdt_idsData[i]}`)
      }
      Promise.all(pdtPromises)
        .then( (productsData) => {
          let products = productsData.map( pdtData => (pdtData.data) );
          let rightBtn;
          setRelatedPdts({pdt_ids: pdt_idsData, products: products});
          if (pdt_idsData.length > displayPdtItems - 1) {
            rightBtn = 'pointer rightBtn';
          } else {
            rightBtn = 'pointer rightBtn btn-Inactive';
          }
          setPdtLayOut(parseLayout(0, pdt_idsData.length, 'pointer btn-Inactive', rightBtn))
        } )
        .catch(err => {
          throw err;
        })
    } catch (err) {
      throw err;
    }
  }

  const getOutfits = () => {
    let savedOutfit, savedOutfitIds, rightBtn;
    if (localStorage.getItem('outfit') !== null) {
      savedOutfit = JSON.parse(localStorage.getItem('outfit'));
      savedOutfitIds = JSON.parse(localStorage.getItem('outfitId'));
    } else {
      savedOutfit = [];
      savedOutfitIds = [];
    }
    setOutfits({pdt_ids: savedOutfitIds, products: savedOutfit});
    if (savedOutfitIds.length > displayOutfitItems - 1) {
      rightBtn = 'pointer rightBtn';
    } else {
      rightBtn = 'pointer rightBtn btn-Inactive';
    }
    setOutfitLayOut(parseLayout(0, savedOutfitIds.length, 'pointer btn-Inactive', rightBtn))
  }

  const addOutfit = async (selectedId) => {
    try {
      const newOutfitData = await axios.get(`/products/${selectedId}`);
      let newOutfit = newOutfitData.data;

      let savedOutfit, savedOutfitIds;
      if (localStorage.getItem('outfit') !== null) {
        savedOutfit = JSON.parse(localStorage.getItem('outfit'));
        savedOutfitIds = JSON.parse(localStorage.getItem('outfitId'));
        if (!savedOutfitIds.includes(newOutfit.id)) {
          savedOutfit.push(newOutfit);
          savedOutfitIds.push(newOutfit.id);
        }
      } else {
        savedOutfit = [newOutfit];
        savedOutfitIds = [newOutfit.id];
      }

      localStorage.setItem('outfitId', JSON.stringify(savedOutfitIds));
      localStorage.setItem('outfit', JSON.stringify(savedOutfit));
      setOutfits({pdt_ids: savedOutfitIds, products: savedOutfit});

      if (outfitLayOut.displayFirstId + displayOutfitItems === savedOutfitIds.length) {
        if (outfitLayOut.displayFirstId === 0) {
          setOutfitLayOut(parseLayout(outfitLayOut.displayFirstId, savedOutfitIds.length, 'pointer btn-Inactive', 'pointer rightBtn'));
        } else {
          setOutfitLayOut(parseLayout(outfitLayOut.displayFirstId, savedOutfitIds.length, 'pointer', 'pointer rightBtn'));
        }
      }

    } catch (err) {
      throw err;
    }
  }

  const removeOutfit = (selectedId) => {

    let savedOutfit = JSON.parse(localStorage.getItem('outfit'));
    let savedOutfitIds = JSON.parse(localStorage.getItem('outfitId'));
    let toDeleteId = savedOutfitIds.indexOf(selectedId);
    savedOutfit.splice(toDeleteId, 1);
    savedOutfitIds.splice(toDeleteId, 1);

    localStorage.removeItem('outfitId');
    localStorage.setItem('outfitId', JSON.stringify(savedOutfitIds));
    localStorage.removeItem('outfit');
    localStorage.setItem('outfit', JSON.stringify(savedOutfit));
    setOutfits({pdt_ids: savedOutfitIds, products: savedOutfit});

    if (outfitLayOut.displayFirstId + displayOutfitItems === savedOutfitIds.length + 1) {
      setOutfitLayOut(parseLayout(outfitLayOut.displayFirstId, savedOutfitIds.length, outfitLayOut.pdtLeftBtn, 'pointer rightBtn btn-Inactive'));
    }
  }

  const slideLeft = (carousel, products, itemNum) => {
    let leftBtn, updatedLayout, updatedLayoutRemoved;
    if (carousel.displayFirstId > 0) {
      if (carousel.displayFirstId === 1) {
        leftBtn = 'pointer btn-Inactive';
      } else {
        leftBtn = 'pointer';
      }
      updatedLayout = parseLayout(carousel.displayFirstId - 1, products.pdt_ids.length, leftBtn, 'pointer rightBtn');
      updatedLayoutRemoved = parseLayout(carousel.displayFirstId - 1, products.pdt_ids.length, leftBtn, 'pointer rightBtn btn-Inactive');
      if (itemNum === displayPdtItems) {
        setPdtLayOut(updatedLayout);
      } else {
        if (products.pdt_ids.length < carousel.displayFirstId + itemNum - 1) {
          setOutfitLayOut(updatedLayoutRemoved);
        } else {
          setOutfitLayOut(updatedLayout);
        }
      }
    }
  }

  const slideRight = (carousel, products, itemNum) => {
    let rightBtn, updatedLayout;
    if (carousel.totalItems > carousel.displayFirstId + itemNum - 1) {
      if (products.pdt_ids.length > carousel.displayFirstId + itemNum) {
        rightBtn = 'pointer rightBtn';
      } else {
        rightBtn = 'pointer rightBtn btn-Inactive';
      }
      updatedLayout = parseLayout(carousel.displayFirstId + 1, products.pdt_ids.length, 'pointer', rightBtn);
      if (itemNum === displayPdtItems) {
        setPdtLayOut(updatedLayout);
      } else {
        setOutfitLayOut(updatedLayout);
      }
    }
  }

  const onProductBtnClick = (btnId) => {
    // console.log('onProductBtnClick', btnId);
    setShowComp(true);
    setBtnId(btnId);
  }

  const onCompaClose = () => {
    setShowComp(false);
  }

  const onAddOutfitClick = () => {
    addOutfit(props.productId);
  }

  const onOutfitBtnClick = (btnId) => {
    removeOutfit (btnId);
  }


  return (
    <div data-testid="relatedPdt" onClick={(e) => {
      onCompaClose();
      props.apiInteractions(e.target.className, 'Related Product');
    }}>
      <div className="related-product-widget">
        <h2 className="related-product-header">RELATED PRODUCTS</h2>
        <div className={relatedPdtClassName}>
          <label
            className={pdtLayOut.pdtLeftBtn}
            onClick={() => slideLeft(pdtLayOut, relatedPdts, displayPdtItems)}
          >{'\u1438'}</label>
          {
            relatedPdts.products.slice(pdtLayOut.displayFirstId, pdtLayOut.displayFirstId + displayPdtItems).map( product =>
              (
                <Product
                  key={product.id}
                  overviewProductId={props.productId}
                  id={product.id}
                  category={product.category}
                  name={product.name}
                  default_price={product.default_price}
                  cardBtn={'\u2606'}
                  onProductBtnClick={onProductBtnClick}
                  onCardClick={props.onCardClick}
                />
              )
            )
          }
          <label
            className={pdtLayOut.pdtRightBtn}
            onClick={() => slideRight(pdtLayOut, relatedPdts, displayPdtItems)}
          >{'\u1433'}</label>
        </div>
      </div>

      <div className="outfit-widget">
        <h2 className="outfit-header">YOUR OUTFIT</h2>
        <div className={outfitClassName}>
        <label
            className={outfitLayOut.pdtLeftBtn}
            onClick={() => slideLeft(outfitLayOut, outfits, displayOutfitItems)}
          >{'\u1438'}</label>
          <OutfitAddCard
            onAddOutfitClick={onAddOutfitClick}
          />
          {
            outfits.products.slice(outfitLayOut.displayFirstId, outfitLayOut.displayFirstId + displayOutfitItems).map( outfit =>
              (
                <Product
                  key={outfit.id}
                  overviewProductId={props.productId}
                  id={outfit.id}
                  category={outfit.category}
                  name={outfit.name}
                  default_price={outfit.default_price}
                  cardBtn={'\u2327'}
                  onOutfitBtnClick={onOutfitBtnClick}
                  onCardClick={props.onCardClick}
                />
              )
            )
          }
          <label
            className={outfitLayOut.pdtRightBtn}
            onClick={() => slideRight(outfitLayOut, outfits, displayOutfitItems)}
          >{'\u1433'}</label>
        </div>
      </div>
      <Comparison
        productId={props.productId}
        darkmode={props.darkmode}
        btnId={btnId}
        showComp={showComp}
        onCompaClose={onCompaClose}
      />
    </div>
  )
}

export default RelatedPdt;
