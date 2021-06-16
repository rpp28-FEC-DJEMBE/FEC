import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AddReview = (props) => {
  const [name, setName] = useState('Andre');
  useEffect(() => {
    getPdtName();
  });

  const getPdtName = () => {
    axios.get(`/products/${props.productId}`)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => {
        console.log('Error fetching product name', err);
      })
  }

  if (!props.show) {
    return null
  }

  return(
    <div className='review-modal'>
      <div className='review-content'>
        <div className='modal-header'>
          <h2 className='review-title'> Write Your Review</h2>
          <div className='exit' onClick={props.handleClose}>X</div>
          <h4>About the {name}</h4>
        </div>
        <div className='modal-body'>

        </div>
        <div className='modal-footer'>
          <input className="upload-photo" type="file"></input>
          <button className="review-button">Submit Review</button>
        </div>
      </div>
    </div>
  )
}

export default AddReview;