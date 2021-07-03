import React from 'react';

function StyleSwatch(props) {

  const onSwatchClick = (()=> {
    props.setStyle(props.styleId);
  });

  // let imgUrl = props.photo.split('&w=')[0] + '&w=64&h=64&fit=crop';
  let imgUrl;
  if (props.photo) {
    imgUrl = props.photo.split('&w=')[0] + '&w=64&h=64';
  } else {
    imgUrl = props.photo;
  }

  return (
    <div className={"circle-container pointer" + (props.isSelected ? ' selected' : '')} onClick={onSwatchClick}>
      {props.isSelected ? <div className="icon-container"><span className="material-icons">check_circle_outline</span></div> : null}
      <div className="circle">
        { props.photo
            ? <img className="circle-fill" src={imgUrl} alt="Human model wearing the product style" />
            : null
        }

      </div>
    </div>
  );
}

export default StyleSwatch;


