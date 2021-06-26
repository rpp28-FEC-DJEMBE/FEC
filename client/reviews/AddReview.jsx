import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { charsTable } from './reviewHelpers.js';

const AddReview = (props) => {
  const [product, setProduct] = useState('Andre');
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setChars] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

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

    const handleCharEntry = (e) => {
      let nam = e.target.name;
      let val = Number(e.target.value);
      setChars(prevState => ({...prevState, [nam]: val}))
    }

    // using chars table from helper file
    return chars.map(char => {
      let charId = characteristics[char].id;
      return (
        <div className='review-chars' key={charId}>
          <label>{char}</label>
          <div className='review-chars-entry'>
            {
              charsTable[char].map((option, index) => (

              <span key={index} onClick={e => handleCharEntry(e)}>
                      <input type='radio' name={charId} value={index + 1}></input>{option}</span>
              ))

            }

          </div>
        </div>
      )
    })
  }

  const reviewBodyCount = () => {
    if (body.length < 50) {
      return `Minimum required characters left: ${50 - body.length}`;
    }
    return `Minimum reached`;
  }

  if (!props.show) {
    return null
  }


  let missingFieldsAlert = () => {
    let template = `You must enter the following:`
    if (rating === 0) {
      template += `
      - Overall Rating*`
    }
    if (recommend === null) {
      template += `
      - Do you recommend this product?*`
    }
    if (Object.keys(characteristics).length !== Object.keys(props.metaData.characteristics).length) {
      template += `
      - Characteristics*`
    }
    if (body.length < 50) {
      template += `
      - Review Body*`
    }
    if (name === '') {
      template += `
      - What is your nickname*`
    }
    if (email === '') {
      template += `
      - Your email*`
    }

    if (template !== `You must enter the following:`) {
      alert(template);
    }
  }

  const submitReview = () => {
    let postBody = {
      product_id: props.productId,
      rating: rating,
      summary: summary,
      body: body,
      recommend: recommend,
      name: name,
      email: email,
      photos: photos,
      characteristics: characteristics
    }

    console.log('review body being posted', postBody);
    missingFieldsAlert();
    axios({
      method: 'post',
      url: `/reviews`,
      data: postBody
    })
    .then(() => console.log(`Review successfully posted`))
    .catch((err) => console.log('Error posting review'))
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
            <span onClick={e => setRating(Number(e.target.value))}>
              <input type="radio" name="rating" id="str1" value="1"></input>
            </span>
            <span onClick={e => setRating(Number(e.target.value))}>
              <input type="radio" name="rating" id="str2" value="2"></input>
            </span>
            <span onClick={e => setRating(Number(e.target.value))}>
              <input type="radio" name="rating" id="str3" value="3"></input>
            </span>
            <span onClick={e => setRating(Number(e.target.value))}>
              <input type="radio" name="rating" id="str4" value="4"></input>
            </span>
            <span onClick={e => setRating(Number(e.target.value))}>
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
          <div className='review-text'>
            <input
              id="summary" type="text" onChange={e => setSummary(e.target.value)} maxLength="60" placeholder="Example: Best purchase ever!">
            </input>
          </div>
          <label>Review Body*</label>
          <div className='review-text'>
            <textarea
              id="review-body" type="text" onChange={e => setBody(e.target.value)} maxLength="1000" placeholder="Why did you like the product or not?">
            </textarea>
            <p className="disclaimer">{reviewBodyCount()}</p>
          </div>
          <label>What is your nickname*</label>
          <div className='review-text'>
            <input
              id="nickname" type="text" onChange={e => setName(e.target.value)} maxLength="60" placeholder="Example: jackson11!">
            </input>
            <p className="disclaimer">For privacy reasons, do not use your full name or email address</p>
          </div>
          <label>Your email*</label>
          <div className='review-text'>
            <input
              id="email" type="email" onChange={e => setEmail(e.target.value)} maxLength="60" placeholder="Example: jackson11@email.com">
            </input>
            <p className="disclaimer">For authentication reasons, you will not be emailed</p>
          </div>
        </div>
        <div className='modal-footer'>
          <input className="upload-photo" type="file"></input>
          <button className="review-button" onClick={() => submitReview()}>Submit Review</button>
        </div>
      </div>
    </div>
  )
}

export default AddReview;