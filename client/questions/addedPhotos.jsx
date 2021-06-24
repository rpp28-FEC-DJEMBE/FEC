import React from 'react';

const AddedPhotos = (props) => {
  console.log(props.photos)

  return (


    <div className="photo-list">
      {props.photos.map((photo, i) => {
        return <img src={photo} className="answer-img"></img>
      })}
    </div>
  )
}

export default AddedPhotos;