import React from 'react';

const AnswerPhotoDisplay = ({photos}) => {
  if (photos === undefined) {
    return null;
  } else {
    return (
      <div className="img-display">
        {photos.map(({url}, i) =>
          <img src={url} key={i} />
        )}
      </div>
    )
  }
}


export default AnswerPhotoDisplay;