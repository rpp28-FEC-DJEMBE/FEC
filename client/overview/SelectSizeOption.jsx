import React from 'react';

function StyleSizeOption(props) {

  const selectSize = ((sku)=> {
    props.setStyle(props.styleId);
  });

  return (
    <option value={props.size} onChange={selectSize(props.sku, props.size)}>{props.size}</option>
  );
}

export default StyleSizeOption;


