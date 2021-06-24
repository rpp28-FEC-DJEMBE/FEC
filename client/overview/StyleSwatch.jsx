import React from 'react';

function StyleSwatch(props) {

  const onSwatchClick = (()=> {
    props.setStyle(props.styleId);
  });

  return (
    <div className={"circle-container pointer" + (props.isSelected ? ' selected' : '')} onClick={onSwatchClick}>
      {props.isSelected ? <div className="icon-container"><span className="material-icons">check_circle_outline</span></div> : null}
      <div className="circle">
        <img className="circle-fill" src={props.photo} alt="Human model wearing the product style" />
      </div>
    </div>
  );
}

export default StyleSwatch;


