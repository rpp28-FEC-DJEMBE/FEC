import React from 'react';

function SelectSizeOption(props) {

  // receives:
  // key={size} size={size} saveSize={saveSize}

  const setSize = (() => {
    console.log('CALLING SET SIZE WITH', props.size)
    props.saveSize(props.size);
  });

  return (
    <option value={props.size} onChange={setSize}>{props.size}</option>
  );
}

export default SelectSizeOption;


