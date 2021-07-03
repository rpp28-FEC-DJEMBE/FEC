import React from 'react';

function SelectSize(props) {

  // receives:
  // inventory={inventory}
  // saveSku={saveOrderSku}

  const saveSku = (event => {
    let sku = event.currentTarget.value === 'Select Size' ? null : event.currentTarget.value;
    props.saveSku(sku);
  });

  const renderSizeOptions = (() => {

    const skus = props.inventory;
    const sizeOptions = Object.keys(skus).map(sku => {
      return (
        <option key={sku} value={sku}>{skus[sku].size}</option>
      );
    });

    return (
      <React.Fragment>
        <select name="size" className="o-size-list" onChange={saveSku}>
          <option value='Select Size'>Select Size</option>
          {sizeOptions}
        </select>
      </React.Fragment>
    )
  });

  if (!props) {
    return null;  // TODO: need to handle OUT OF STOCK here or below
  } else {
    return renderSizeOptions();
  }

}

export default SelectSize;
