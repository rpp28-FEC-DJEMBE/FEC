// import React from 'react';
import React, {useEffect, useState} from 'react';

import style from './RelatedPdt.css';
import OutfitAddCard from './OutfitAddCard.jsx';
import Product from './Product.jsx';
import Comparison from './Comparison.jsx';
const axios = require('axios');

const Fade = () => {return ''};

function RelatedPdt(props) {
  const [relatedPdts, setRelatedPdts] = useState({pdt_ids: [], products: []});
  const [pdtLayOut, setPdtLayOut]= useState({displayFirstId: 0, totalItems: 0, pdtLeftBtn: 'pointer btn-Inactive', pdtRightBtn: 'pointer rightBtn btn-Inactive'});
  // const [outfits, setOutfits] = useState([]);
  const [outfits, setOutfits] = useState({pdt_ids: [], products: []});
  const [outfitLayOut, setOutfitLayOut]= useState({displayFirstId: 0, totalItems: 0, pdtLeftBtn: 'pointer btn-Inactive', pdtRightBtn: 'pointer rightBtn btn-Inactive'});
  const [clickedId, setClickedId] = useState(props.productId);
  const [btnId, setBtnId] = useState(props.productId);
  // const [showComp, setShowComp] = useState(true);
  const [showComp, setShowComp] = useState(false);
  // const displayPdtItems = 2;  // for quick testing of carousel sliding
  const displayPdtItems = 4;
  const displayOutfitItems = displayPdtItems - 1;

  useEffect( () => {
    getOutfits();
    getRelatedPdts(props.productId);
  }, [props.productId])
  // }, [props.productId, btnId])
  // })

  // if (relatedPdts.pdt_ids.length !== 0) {
    // console.log("state3", relatedPdts.pdt_ids, relatedPdts.products);
  // }

  const getRelatedPdts = async (id) => {
    try {
      // console.log('currentID:', props.productId)
      const pdt_ids = await axios.get(`/products/${id}/related`);
      // console.log('pdt_ids.data', pdt_ids.data);
      let pdt_idsData = [];
      pdt_ids.data.forEach( pdt_id => {
        if (!pdt_idsData.includes(pdt_id) && pdt_id !== props.productId) {
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
          let products = productsData.map( pdtData => (pdtData.data) );
          // console.log('products', pdt_idsData);
          setRelatedPdts({pdt_ids: pdt_idsData, products: products});
          // console.log('all relatedid', pdt_idsData)
          if (pdt_idsData.length > displayPdtItems - 1) {
            // console.log('no left with right', pdt_idsData, relatedPdts.pdt_ids)
            setPdtLayOut({displayFirstId: 0, totalItems: pdt_idsData.length, pdtLeftBtn: 'pointer btn-Inactive', pdtRightBtn: 'pointer rightBtn'});
          } else {
            // console.log('no left no right', pdt_idsData, relatedPdts.pdt_ids)
            setPdtLayOut({displayFirstId: 0, totalItems: pdt_idsData.length, pdtLeftBtn: 'pointer btn-Inactive', pdtRightBtn: 'pointer rightBtn btn-Inactive'});
          }
        } )
    } catch (err) {
      console.log(err);
    }
  }

  const getOutfits = () => {
    let savedOutfit, savedOutfitIds;
    if (localStorage.getItem('outfit') !== null) {
      savedOutfit = JSON.parse(localStorage.getItem('outfit'));
      savedOutfitIds = JSON.parse(localStorage.getItem('outfitId'));
    } else {
      savedOutfit = [];
      savedOutfitIds = [];
    }
    setOutfits({pdt_ids: savedOutfitIds, products: savedOutfit});
    if (savedOutfitIds.length > displayOutfitItems - 1) {
      // console.log('no left with right', pdt_idsData, relatedPdts.pdt_ids)
      setOutfitLayOut({displayFirstId: 0, totalItems: savedOutfitIds.length, pdtLeftBtn: 'pointer btn-Inactive', pdtRightBtn: 'pointer rightBtn'});
    } else {
      // console.log('no left no right', pdt_idsData, relatedPdts.pdt_ids)
      setOutfitLayOut({displayFirstId: 0, totalItems: savedOutfitIds.length, pdtLeftBtn: 'pointer btn-Inactive', pdtRightBtn: 'pointer btn-Inactive'});
    }
  }

  const addOutfit = async (selectedId) => {
    try {
      const newOutfitData = await axios.get(`/products/${selectedId}`);
      // console.log('newOutfitData', newOutfitData)
      let newOutfit = newOutfitData.data;

      let savedOutfit, savedOutfitIds;
      if (localStorage.getItem('outfit') !== null) {
        savedOutfit = JSON.parse(localStorage.getItem('outfit'));
        savedOutfitIds = JSON.parse(localStorage.getItem('outfitId'));
        console.log('current savedOutfitIds', savedOutfitIds, savedOutfit.length);
        if (!savedOutfitIds.includes(newOutfit.id)) {
          savedOutfit.push(newOutfit);
          savedOutfitIds.push(newOutfit.id);
        }
      } else {
        savedOutfit = [newOutfit];
        savedOutfitIds = [newOutfit.id];
      }
      console.log('updated savedOutfitIds', savedOutfitIds, savedOutfit.length);

      localStorage.setItem('outfitId', JSON.stringify(savedOutfitIds));
      localStorage.setItem('outfit', JSON.stringify(savedOutfit));
      setOutfits({pdt_ids: savedOutfitIds, products: savedOutfit});

      // check if needs to show right arrow
      // console.log('outfitLayOut.displayFirstId', savedOutfitIds, outfitLayOut.displayFirstId);

      if (savedOutfitIds.length > displayOutfitItems - 1) {
        let updatedLayout = {displayFirstId: outfitLayOut.displayFirstId, totalItems: savedOutfitIds.length, pdtLeftBtn: 'pointer btn-Inactive', pdtRightBtn: 'pointer rightBtn'};
        setOutfitLayOut(updatedLayout);
      }

    } catch (err) {
      console.log(err);
    }
  }

  const removeOutfit = (selectedId) => {

    let savedOutfit = JSON.parse(localStorage.getItem('outfit'));
    let savedOutfitIds = JSON.parse(localStorage.getItem('outfitId'));
    let toDeleteId = savedOutfitIds.indexOf(selectedId);
    console.log('current savedOutfitIds', savedOutfitIds, savedOutfit.length);
    savedOutfit.splice(toDeleteId, 1);
    savedOutfitIds.splice(toDeleteId, 1);
    console.log('updated savedOutfitIds', savedOutfitIds, savedOutfit.length);

    localStorage.removeItem('outfitId');
    localStorage.setItem('outfitId', JSON.stringify(savedOutfitIds));
    localStorage.removeItem('outfit');
    localStorage.setItem('outfit', JSON.stringify(savedOutfit));
    setOutfits({pdt_ids: savedOutfitIds, products: savedOutfit});

    // check if needs to hide right arrow
    // console.log('removeoutfit', selectedId, outfitLayOut.displayFirstId, outfitLayOut.totalItems, savedOutfitIds, JSON.parse(localStorage.getItem('outfitId')), outfits.pdt_ids);
    // removeoutfit 22137 0 3 [22167, 22828] [22167, 22828] [22137, 22167, 22828]

    if (outfitLayOut.displayFirstId + displayOutfitItems === savedOutfitIds.length + 1) {
      let updatedLayout = {displayFirstId: outfitLayOut.displayFirstId, totalItems: savedOutfitIds.length, pdtLeftBtn: outfitLayOut.pdtLeftBtn, pdtRightBtn: 'pointer rightBtn btn-Inactive'};
      setOutfitLayOut(updatedLayout);
    }
  }

  // pdtLayOut|outfitLayOut => carousel
  // relatedPdts|outfits => products
  // displayPdtItems|displayOutfitItems => itemNum
  const slideLeft = (carousel, products, itemNum) => {
    if (carousel.displayFirstId > 0) {
      // console.log('left1', carousel.displayFirstId);
      if (carousel.displayFirstId === 1) {
        let updatedLayout = {displayFirstId: carousel.displayFirstId - 1, totalItems: products.pdt_ids.length, pdtLeftBtn: 'pointer btn-Inactive', pdtRightBtn: 'pointer rightBtn'};
        if (itemNum === displayPdtItems) {
          setPdtLayOut(updatedLayout);
        } else {
          setOutfitLayOut(updatedLayout);
        }
      } else {
        let updatedLayout = {displayFirstId: carousel.displayFirstId - 1, totalItems: products.pdt_ids.length, pdtLeftBtn: 'pointer', pdtRightBtn: 'pointer rightBtn'};
        if (itemNum === displayPdtItems) {
          setPdtLayOut(updatedLayout);
        } else {
          setOutfitLayOut(updatedLayout);
        }
      }
      // console.log('left2', carousel.displayFirstId);

    }
  }

  const slideRight = (carousel, products, itemNum) => {
    // console.log(carousel, products, itemNum);

    if (carousel.totalItems > carousel.displayFirstId + itemNum - 1) {
      if (products.pdt_ids.length > carousel.displayFirstId + itemNum) {
        let updatedLayout = {displayFirstId: carousel.displayFirstId + 1, totalItems: products.pdt_ids.length, pdtLeftBtn: 'pointer', pdtRightBtn: 'pointer rightBtn'};
        if (itemNum === displayPdtItems) {
          setPdtLayOut(updatedLayout);
        } else {
          setOutfitLayOut(updatedLayout);
        }
      } else {
        let updatedLayout = {displayFirstId: carousel.displayFirstId + 1, totalItems: products.pdt_ids.length, pdtLeftBtn: 'pointer', pdtRightBtn: 'pointer rightBtn btn-Inactive'};
        if (itemNum === displayPdtItems) {
          setPdtLayOut(updatedLayout);
        } else {
          setOutfitLayOut(updatedLayout);
        }
      }
    }
  }

  const onProductBtnClick = (btnId) => {
    console.log('onProductBtnClick', btnId);
    setShowComp(true);
    setBtnId(btnId);
  }

  const onCompaClose = () => {
    // console.log('onCompaClose');
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


  if (!relatedPdts.products.length) {
    return (<p></p>);
  } else {
    return (
      <div>
        <div className="related-product-widget">
          <h3 className="related-product-header">RELATED PRODUCTS</h3>
          <div className="related-product-box">
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
                    rating={'5'}
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
            {/* <Fade className="fade" /> */}
          </div>
        </div>

        <div className="related-product-widget">
          <h3 className="related-product-header">YOUR OUTFIT</h3>
          <div className="related-product-box">
          <label
              className={outfitLayOut.pdtLeftBtn}
              onClick={() => slideLeft(outfitLayOut, outfits, displayOutfitItems)}
            >{'\u1438'}</label>
            <OutfitAddCard onAddOutfitClick={onAddOutfitClick}/>
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
                    rating={'5'}
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
            {/* <Fade className="fade" /> */}
          </div>
        </div>

        <Comparison productId={props.productId} btnId={btnId} showComp={showComp} onCompaClose={onCompaClose}/>


      </div>
    )
  }

}

export default RelatedPdt;



