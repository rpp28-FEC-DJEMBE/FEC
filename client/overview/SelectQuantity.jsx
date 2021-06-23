import React from 'react';

function SelectQuantity(props) {

  // const onSwatchClick = (()=> {
  //   props.setStyle(props.styleId);
  // });

  return (
    <select name="quantity" className="o-quantity-list">
      <option value="">-</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  );

}




export default SelectQuantity;


