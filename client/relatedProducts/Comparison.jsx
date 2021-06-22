// import React from 'react';
import React, {useEffect, useState} from 'react';
import style from './Comparison.css';
const axios = require('axios');
const {collectFeatures, combineFeatures} = require('./featuresHelper');

function Comparison ({productId, btnId, showComp, onCompaClose}) {
  const check="\u2713";

  const [featuresComp, setFeaturesComp] = useState(
    {
      id: [],
      name: [],
      features: [[], []],
      featuresCombined: {
        value1: [],
        value2: [],
        featureWValue: []
      }
  }
  );

  useEffect( () => {
    getFetures(productId, btnId);
  }, [productId, btnId])


  const getFetures = async (currentId, btnId) => {
    try {
      const featuresData1 = await axios.get(`/products/${currentId}`);
      const featuresData2 = await axios.get(`/products/${btnId}`);
      // console.log('1', currentId, featuresData1.data.name, featuresData1.data.features)
      // console.log('2', currentId, featuresData2.data.name, featuresData2.data.features)

      let features1 = collectFeatures(featuresData1.data.features);
      let features2 = collectFeatures(featuresData2.data.features);
      let featuresCombined = combineFeatures(features1, features2);

      // console.log('features', featuresData1.data.features, featuresData2.data.features)
      // console.log(features1, features2, featuresCombined)

      setFeaturesComp(
        {
          id: [currentId, btnId],
          name: [featuresData1.data.name, featuresData2.data.name],
          features: [featuresData1.data.features, featuresData2.data.features],
          featuresCombined: featuresCombined
        }
      );

    } catch (err) {
      console.log(err);
    }

  }

  // if (featuresComp[0].name !== '') {
    // console.log('props:', featuresComp.features[0], featuresComp);
  // }

  if (!showComp) {
    return null;
  }

  return (
    <div className="comparison-box pointer" onClick={onCompaClose}>
      <p className="comparing">COMPARING</p>
      <div className="comparison-name-line">
        <p>{featuresComp.name[0]}</p>
        <p>{featuresComp.name[1]}</p>
      </div>
      <div className="comparison-table">
        <div>
          {/* <p className="comparison-name">{featuresComp.name[0]}</p> */}
          <p className="product-id">{productId}</p>
          {
            featuresComp.featuresCombined.value1.map( (value1, i) => (
              <p key={i}>{value1}</p>
              ) )
          }
        </div>
        <div>
          {/* <p className="no-show comparison-name">null</p> */}
          <p className="product-id">vs</p>
          {
            featuresComp.featuresCombined.featureWValue.map( (featureValue, i) => (
              <p key={i}>{featureValue}</p>
              ) )
          }
        </div>
        <div>
          {/* <p className="comparison-name">{featuresComp.name[1]}</p> */}
          <p className="product-id">{btnId}</p>
          {
            featuresComp.featuresCombined.value2.map( (value2, i) => {
            if (value2 === '') {
              return (<p key={i} className="no-show">null</p>);
            } else {
              return (<p key={i} className="value2">{value2}</p>);
            }
            } )
          }
        </div>
      </div>
    </div>
  )

}

export default Comparison;

