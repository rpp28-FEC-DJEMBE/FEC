import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AddReview = (props) => {
  const [name, setName] = useState('Andre');
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(null);

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
    <div className='review-modal' onClick={props.handleClose}>
      <div className='review-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h2 className='review-title'> Write Your Review</h2>
          <div className='exit' onClick={props.handleClose}>X</div>
          <h3>About the {name}</h3>
        </div>
        <div className='modal-body'>
          <label>Overall Rating*</label>
          <div className="review-stars">
            <span onClick={e => setRating(e.target.value)}>
              <input type="radio" name="rating" id="str1" value="1"></input>
            </span>
            <span onClick={e => setRating(e.target.value)}>
              <input type="radio" name="rating" id="str2" value="2"></input>
            </span>
            <span onClick={e => setRating(e.target.value)}>
              <input type="radio" name="rating" id="str3" value="3"></input>
            </span>
            <span onClick={e => setRating(e.target.value)}>
              <input type="radio" name="rating" id="str4" value="4"></input>
            </span>
            <span onClick={e => setRating(e.target.value)}>
              <input type="radio" name="rating" id="str5" value="5"></input>
            </span>
          </div>
          <label>Do you recommend this product?*</label>
          <div className='review-recommend' >
            <span onClick={e => setRecommend(e.target.value)}>
              <input type='radio' name='recommend' value='yes'></input>Yes</span>
            <span onClick={e => setRecommend(e.target.value)}>
              <input type='radio' name='recommend' value='no'></input>No</span>
          </div>
          <label>Characteristics*</label>
          <div className='review-chars'>

          </div>
        </div>
        <div className='modal-footer'>
          <input className="upload-photo" type="file"></input>
          <button className="review-button" onClick={() => console.log(recommend)}>Submit Review</button>
        </div>
      </div>
    </div>
  )
}

export default AddReview;