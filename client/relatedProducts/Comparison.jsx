// import React from 'react';
import React, {useEffect, useState} from 'react';
import style from './Comparison.css';
const axios = require('axios');

function Comparison (props) {
  const check="\u2713";
  const [featuresComp, setFeaturesComp] = useState([
    {id: 0, name: '', features: []}, {id: 0, features: []}
  ]);

  useEffect( () => {
    getFetures(props.productId, props.clickedId);
  }, [])


  const getFetures = async (currentId, clickedId) => {
    try {
      const featuresData1 = await axios.get(`/products/${currentId}`);
      const featuresData2 = await axios.get(`/products/${clickedId}`);
      // console.log('1', currentId, featuresData1.data.name, featuresData1.data.features)
      // console.log('2', currentId, featuresData2.data.name, featuresData2.data.features)
      setFeaturesComp([
        {
          id: currentId,
          name: featuresData1.data.name,
          features: featuresData1.data.features
        },
        {
          id: clickedId,
          name: featuresData2.data.name,
          features: featuresData2.data.features
        }
      ]);

    } catch (err) {
      console.log(err);
    }

  }
  if (featuresComp[0].name !== '') {
    // console.log('props:', featuresComp[0].features, featuresComp);
  }
  return (
    <div className="comparison-box">
      <p className="comparing">COMPARING</p>
      <div className="comparison-name">
        <p>{featuresComp[0].name}</p>
        <p>{featuresComp[1].name}</p>
      </div>
      <div className="comparison-table">
        <div>
          {
            featuresComp[0].features.map( feature => (
              <p key={feature.feature+feature.value}>{feature.value}</p>
             ) )
          }
          <p className="product-id">{props.productId}</p>
          <p>{check}</p>
        </div>
        <div>
          {
            featuresComp[0].features.map( feature => (
              <p key={feature.feature+feature.value}>{feature.feature}</p>
             ) )
          }
          {
            featuresComp[1].features.map( feature => (
              <p key={feature.feature+feature.value}>{feature.feature}</p>
             ) )
          }
        </div>
        <div>
          {
            featuresComp[0].features.slice(0, featuresComp[0].features.length - 1).map( feature => (
              <p key={feature.feature+feature.value}>{check}</p>
             ) )
          }
          <p className="product-id">{props.clickedId}</p>
          {
            featuresComp[1].features.map( feature => (
              <p key={feature.feature+feature.value}>{feature.value}</p>
             ) )
          }
        </div>
      </div>
    </div>
  )
}

export default Comparison;

