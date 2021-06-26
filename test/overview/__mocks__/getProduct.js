import {testDataProduct, testDataStyles, testDataSelectedStyle} from './testData.js';

const product = {
  22126: testDataProduct
}

export default function getProduct(productId) {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      product[productId]
        ? resolve(product[productId])
        : reject({
            error: 'No data found for productId ' + productId,
          }),
    );
  });
}