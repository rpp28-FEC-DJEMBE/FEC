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
      <section className="o-cart-actions">
        <section className="o-cart-lists">
          <SelectSize inventory={inventory} saveSize={saveOrderSize} />
          <SelectQty inventory={inventory} saveQty={saveOrderQty} selectedSize={orderSize} />
        </section>
        <section className="o-cart-buttons">
          <button className="o-add-to-bag">Add to bag<span className="o-add-to-bag-icon">+</span></button>
          <button className="o-add-to-outfit">&#9734;</button>
        </section>
      </section>
    );
  }
}

export default CartActions;
