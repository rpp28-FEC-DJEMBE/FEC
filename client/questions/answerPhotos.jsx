import React from 'react';

const AnswerPhotos = ({files, updatePhotos}) => {

  if (files.length < 5) {
    return (
      <label  className="upload-btn" htmlFor="upload-photo">
        <input id="upload-photo" type="file" accept="image/*" onChange={(e)=> updatePhotos(e)}></input>
        Upload Photos</label>
      )
  } else {
    return null;
   }
}

export default AnswerPhotos;