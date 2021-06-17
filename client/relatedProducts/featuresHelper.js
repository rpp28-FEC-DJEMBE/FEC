
const collectFeatures = (features) => {
  let collectedFeatures = {
    feature: [],
    value: [],
    featureAndValue: []
  };
  for (let i = 0; i < features.length; i++) {
    let newFeatureValue;
    if (features[i].value === null) {
      newFeatureValue = `${features[i].feature}`;
    } else {
      newFeatureValue = `${features[i].feature} ${features[i].value.replace(/[^a-zA-Z ]/g, '')}`;
    }
    // console.log(newFeatureValue);
    if (collectedFeatures.featureAndValue.indexOf(newFeatureValue) < 0) {
      collectedFeatures.feature.push(features[i].feature);
      if (features[i].value === null) {
        collectedFeatures.value.push(null);
        collectedFeatures.featureAndValue.push(newFeatureValue);
      } else {
        collectedFeatures.value.push(features[i].value.replace(/[^a-zA-Z ]/g, ''));
        collectedFeatures.featureAndValue.push(newFeatureValue);
      }
    }
  }
  return collectedFeatures;
}

const combineFeatures = (features1, features2) => {
  const check="\u2713";
  let combinedFeatures = {
    value1: [],
    value2: [],
    featureWValue: []
  };

  let toDeleteIndex2 = [];
  for (let i = 0; i < features1.featureAndValue.length; i++) {
    let index2 = features2.feature.indexOf(features1.feature[i])
    // console.log('index2', index2);
    if (index2 > -1) {
      if (features2.featureAndValue[index2] === (features1.featureAndValue[i])) {
        combinedFeatures.value1.push(check);
        combinedFeatures.value2.push(check);
        combinedFeatures.featureWValue.push(features1.featureAndValue[i]);
        // console.log('76 same FV', index2, features1.featureAndValue[i], features2.featureAndValue[index2]);
      } else {
        combinedFeatures.value1.push(features1.value);
        combinedFeatures.value2.push(features2.value);
        combinedFeatures.featureWValue.push(features1.feature[i]);
        // console.log('81 same F diff V', index2, features1.featureAndValue[i], features2.featureAndValue[index2]);
      }

      // console.log('86 cut FV', index2, features1, features2);
      toDeleteIndex2.push(index2);
    } else {
      combinedFeatures.value1.push(check);
      combinedFeatures.value2.push('');
      combinedFeatures.featureWValue.push(features1.featureAndValue[i]);
      // console.log('91 diff FV', index2, features1, features2)
    }
  }
  // console.log('94', features1, features2);
  toDeleteIndex2.sort();
  if (toDeleteIndex2.length) {
    for (let k = toDeleteIndex2.length - 1; k >= 0; k--) {
      features2.feature.splice(toDeleteIndex2, 1);
      features2.value.splice(toDeleteIndex2, 1);
      features2.featureAndValue.splice(toDeleteIndex2, 1);
    }
  }
  // console.log('94again', features1, features2);

  for (let j = 0; j < features2.featureAndValue.length; j++) {
    combinedFeatures.value1.push('');
    combinedFeatures.value2.push(check);
    combinedFeatures.featureWValue.push(features2.featureAndValue[j]);
    // console.log('100 final for 2', features1, features2)

  }

  return combinedFeatures;
}

module.exports = {
  collectFeatures,
  combineFeatures
};

