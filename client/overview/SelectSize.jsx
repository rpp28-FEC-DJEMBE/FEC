import React from 'react';

function SelectSize(props) {

  // receives:
  // props.skus: current object of skus
  // props.saveSKU: upstream function

  return (
    <select name="size" className="o-size-list" value={}>
      <option value="Select Size">Select Size</option>
      Object.keys(props.skus).map((sku, index) => {
        return <SelectSizeOption key={/* skus key */} sku={sku} size={sku.size} />
      })
    </select>
  );
}

export default SelectSize;


