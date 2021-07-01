import React from 'react';

const AddedPhotos = ({photos}) => {

  return (


    <div className="photo-list">
      {photos.map((photo, i) => {
        return <img key={i} src={photo} className="answer-img"></img>
      })}
    </div>
  )
}

export default AddedPhotos;