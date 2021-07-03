import React from 'react';

function SelectSize(props) {

  // receives:
  // inventory={inventory}
  // saveSku={saveOrderSku}

  let hasInventory = false;

  const saveSku = (event => {
    let sku = event.currentTarget.value === 'Select Size' ? null : event.currentTarget.value;
    props.saveSku(sku);
  });

  const renderSizeOptions = (() => {
    const skus = props.inventory;
    const sizeOptions = Object.keys(skus).map(sku => {
      if (skus[sku].size) { hasInventory = true; }
      return (
        <option key={sku} value={sku}>{skus[sku].size}</option>
      );
    });

    if (!hasInventory) {
      return (
        <React.Fragment>
          <select name="size" className="o-size-list" disabled={true} >
            <option value='OUT OF STOCK'>OUT OF STOCK</option>
          </select>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <select name="size" className="o-size-list" onChange={saveSku}>
            <option value='Select Size'>Select Size</option>
            {sizeOptions}
          </select>
        </React.Fragment>
      )
    }
  });

  if (!props) {
    return null;
  } else {
    return renderSizeOptions();
  }

}

export default SelectSize;
