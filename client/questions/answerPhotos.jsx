import React from 'react';

const AnswerPhotos = (props) => {

  if (props.files.length < 5) {
    return (
      <label  className="upload-btn" htmlFor="upload-photo">
        <input id="upload-photo" type="file" accept="image/*" onChange={(e)=>props.updatePhotos(e)}></input>
        Upload Photos</label>
      )
  } else {
    return null;
   }
}

export default AnswerPhotos;