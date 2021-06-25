import React, { useState, useEffect } from 'react';
import SelectSize from './SelectSize.jsx';
import SelectQty from './SelectQty.jsx';

function CartActions(props) {

  // receives:
  // style={this.props.style}
  // selectedStyleId={this.props.selectedStyleId}

  const [inventory, setInventory] = useState(null);
  const [orderSize, setOrderSize] = useState(null);
  const [orderQty, setOrderQty] = useState(null);

  const saveOrderSize = (size => {
    setOrderSize(size);
  });

  const saveOrderQty = (qty => {
    setOrderQty(qty);
  });

    useEffect(() => {
    calcAndSetInventory(props.style.skus);
  }, [props.style]); // Only re-run the effect if props.style changes

  // multiple skus can be the same size; reduce to a distinct list of size and qty
  const calcAndSetInventory = (skus) => {
    if (!skus) { return }
    let fullInventory = Array.from(Object.values(skus));
    const reducer = (accumulator, current) => {
      if (accumulator[current.size] === undefined) {
        accumulator[current.size] = current.quantity;
      } else {
        accumulator[current.size] = accumulator[current.size] + current.quantity;
      }
      return accumulator;
    }
    setInventory(fullInventory.reduce(reducer, {}));
  }

  if (!props || !inventory) {
    return null;
  } else {
    return (
      <React.Fragment>
        <SelectSize inventory={inventory} saveSize={saveOrderSize} />
        <SelectQty inventory={inventory} saveQty={saveOrderQty} />
        <button>Add to bag</button>
        <button>&#9734;</button>
      </React.Fragment>
    );
  }
}

export default CartActions;
