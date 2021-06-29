import React from 'react';

const AnswerPhotoDisplay = (props) => {
  if (props.photos === undefined) {
    return null;
  } else {
    return (
      <div className="img-display">
        {props.photos.map((photo, i) =>
          <img src={photo.url} key={i} />
        )}
      </div>
    )
  }
}


export default AnswerPhotoDisplay;