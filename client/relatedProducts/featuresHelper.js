
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

    if (index2 > -1) {
      if (features2.featureAndValue[index2] === (features1.featureAndValue[i])) {
        combinedFeatures.value1.push(check);
        combinedFeatures.value2.push(check);
        combinedFeatures.featureWValue.push(features1.featureAndValue[i]);
      } else {
        combinedFeatures.value1.push(features1.value[i]);
        combinedFeatures.value2.push(features2.value[i]);
        combinedFeatures.featureWValue.push(features1.feature[i]);
      }
      toDeleteIndex2.push(index2);
    } else {
      combinedFeatures.value1.push(check);
      combinedFeatures.value2.push('');
      combinedFeatures.featureWValue.push(features1.featureAndValue[i]);
    }
  }

  for (let j = 0; j < features2.featureAndValue.length; j++) {
    if (!toDeleteIndex2.includes(j)) {
      combinedFeatures.value1.push('');
      combinedFeatures.value2.push(check);
      combinedFeatures.featureWValue.push(features2.featureAndValue[j]);
    }

  }

  return combinedFeatures;
}

module.exports = {
  collectFeatures,
  combineFeatures
};

