import React from 'react';
import StyleSwatch from './StyleSwatch.jsx';

function StyleSelector(props) {

  if (!props) {
    return null;
  } else {
    return (
      <nav className="o-style-selector">
        {
          props.styles.map(style => {
            return <StyleSwatch
              key={style.style_id}
              styleId={style.style_id}
              photo={style.photos[0].thumbnail_url}
              isSelected={style.style_id === props.selectedStyleId}
              setStyle={props.setStyle}
            />
          })
        }
      </nav>
    )
  }

}

export default StyleSelector;


