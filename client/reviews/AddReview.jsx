import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AddReview = (props) => {
  const [product, setProduct] = useState('Andre');
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setChars] = useState({});
  const [summary, setSummary] = useState(null);
  const [body, setBody] = useState(null);

  useEffect(() => {
    getPdtName();
  });

  const getPdtName = () => {
    axios.get(`/products/${props.productId}`)
      .then((res) => {
        setProduct(res.data.name);
      })
      .catch((err) => {
        console.log('Error fetching product name', err);
      })
  }

  const charsEntry = (e) => {
    let { characteristics } = props.metaData;
    let chars = Object.keys(characteristics);

    let charsTable = {
      Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
      Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
      Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
      Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
      Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
      Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
    }


    return chars.map(char => {
      let charId = characteristics[char].id;
      return (
        <div className='review-chars' key={charId}>
          <label>{char}</label>
          <div className='review-chars-entry'>
            {
              charsTable[char].map((option, index) => (
                // NEED TO FIX - charId in state when clicked
              <span key={index} onClick={e => setChars(prevState => ({...prevState, charId: e.target.value}))}>
                      <input type='radio' name={charId} value={index + 1}></input>{option}</span>
              ))

            }

          </div>
        </div>
      )
    })
  }

  if (!props.show) {
    return null
  }

  return(
    <div className='review-modal' onClick={props.handleClose}>
      <div className='review-content' onClick={e => e.stopPropagation()}>
        <div className='addreview-header'>
          <h2 className='review-title'> Write Your Review</h2>
          <div className='exit pointer' onClick={props.handleClose}>X</div>
          <h3>About the {product}</h3>
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
            <span onClick={e => setRecommend((e.target.value === 'true'))}>
              <input type='radio' name='recommend' value='true'></input>Yes</span>
            <span onClick={e => setRecommend((e.target.value === 'true'))}>
              <input type='radio' name='recommend' value='false'></input>No</span>
          </div>
          <label>Characteristics*</label>
            {charsEntry()}
          <label>Review Summary</label>
          <input
            id="summary" type="text" onChange={e => setSummary(e.target.value)} maxLength="60" placeholder="Example: Best purchase ever!">
          </input>
          <label>Review Body*</label>
          <textarea
            id="summary" type="text" onChange={e => setBody(e.target.value)} maxLength="1000" placeholder="Why did you like the product or not?">
          </textarea>
          </div>
        <div className='modal-footer'>
          <input className="upload-photo" type="file"></input>
          <button className="review-button" onClick={() => console.log(body)}>Submit Review</button>
        </div>
      </div>
    </div>
  )
}

export default AddReview;