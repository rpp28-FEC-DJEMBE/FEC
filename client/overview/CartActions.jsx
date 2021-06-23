import React from 'react';

function CartActions(props) {

  // receives
    // props.style: the currently selected style object
    // props.selectedStyleId: the id of the currently selected style

  // save sku and quantity in state
  const [sku, setSKU] = useState(null);
  const [qty, setQty] = useState(0);

  const saveSKU = ((skuId)=> {
    setSKU(skuId);
  });

  const saveQty = ((skuQty)=> {
    setQty(skuQty);
  });

  return (
    <SelectSize skus={props.style.skus} saveSKU={saveSKU} />
    <SelectQty skus={props.style.skus} saveQty={saveQty} />
    <AddToCart sku={sku} qty={qty} />
    <AddToOutfit selectedStyleId={props.selectedStyleId} />
  );
}

export default CartActions;


