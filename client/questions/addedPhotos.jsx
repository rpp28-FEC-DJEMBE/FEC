import React from 'react';

const AddedPhotos = (props) => {

  return (


    <div className="photo-list">
      {props.photos.map((photo, i) => {
        return <img src={URL.createObjectURL(photo)} className="answer-img"></img>
      })}
    </div>
  )
}

export default AddedPhotos;