import React, { useEffect } from 'react';

function SelectQty(props) {

  // receives:
  // inventory={inventory}
  // saveQty={saveOrderQty}
  // selectedSku={orderSku}

  const maxOrderQuantity = 15;

  const saveQty = (event => {
    props.saveQty(Number(event.currentTarget.value));
  });


  const renderQtyOptions = (() => {

    if (!props.selectedSku) {
      return (
        <option value='0'>-</option>
      )
    } else {

      let maxQty = Math.min(props.inventory[props.selectedSku].quantity, maxOrderQuantity);
      const qtyOptions = [...Array(maxQty).keys()].map(qty => {
        return (<option key={qty + 1} value={qty + 1}>{qty + 1}</option>)
      });

      return qtyOptions;
    }
  });

  if (!props) {
    return null;
  } else {
    return (
      <React.Fragment>
        <select
          name="qty"
          className="o-qty-list"
          disabled={!props.selectedSku}
          // selected={!props.selectedSize ? '0' : 1}
          onChange={saveQty}
        >
          {renderQtyOptions()}
          </select>
      </React.Fragment>
    )
  }

}

export default SelectQty;