import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { charsTable } from './reviewHelpers.js';
import AnswerPhotos from '../questions/answerPhotos.jsx';
import AddedPhotos from '../questions/addedPhotos.jsx';

const AddReview = (props) => {
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setChars] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [starText, setStarText] = useState('');
  const [verified, setVerified] = useState(false);


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
    } else {
      setVerified(true);
    }
  }

  const addPhotos = (e) => {
    let file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file)
    formData.append("upload_preset", "bji3bjas")

    axios({
      method: "post",
      url: "https://api.cloudinary.com/v1_1/hrrpp28fec/image/upload",
      data: formData
    })
    .then((data) => {
      setPhotos(prevState => prevState.concat([data.data.url]))
    })
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
    if (verified) {
      axios({
        method: 'post',
        url: `/reviews`,
        data: postBody
      })
      .then(() => console.log(`Review successfully posted`))
      .catch((err) => console.log('Error posting review'))
    }
  }

  const starClick = (e) => {
    let value = e.target.value;
    let starTxt = {
      '1': 'Poor',
      '2': 'Fair',
      '3': 'Average',
      '4': 'Good',
      '5': 'Great'
    };

    setRating(Number(value));
    setStarText(starTxt[value])
  }

  const closeModal = () => {
    setRating(0);
    setRecommend(null);
    setChars({});
    setSummary('');
    setBody('');
    setName('');
    setEmail('');
    setPhotos([]);
    setStarText('');

    props.handleClose();
  }

  return(
    <div className='review-modal' onClick={() => closeModal()}>
      <div className='review-content' onClick={e => e.stopPropagation()}>
        <div className='addreview-header'>
          <h2 className='review-title'> Write Your Review</h2>
          <div className='exit pointer' onClick={() => closeModal()}>X</div>
          <h3>About the {props.productName}</h3>
        </div>
        <div className='modal-body'>
          <label>Overall Rating*</label>
          <section id='overall-rating'>
            <div className="review-stars">
              <input id="star5" name="star" onClick={e => starClick(e)} type="radio" value="5" class="radio-btn hide" />
              <label for="star5" >☆</label>
              <input id="star4" name="star" onClick={e => starClick(e)} type="radio" value="4" class="radio-btn hide" />
              <label for="star4" >☆</label>
              <input id="star3" name="star" onClick={e => starClick(e)} type="radio" value="3" class="radio-btn hide" />
              <label for="star3" >☆</label>
              <input id="star2" name="star" onClick={e => starClick(e)} type="radio" value="2" class="radio-btn hide" />
              <label for="star2" >☆</label>
              <input id="star1" name="star" onClick={e => starClick(e)} type="radio" value="1" class="radio-btn hide" />
              <label for="star1" >☆</label>
              <div class="clear"></div>
            </div>
            <p id='star-text'>{starText}</p>
          </section>
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
          <AddedPhotos photos={photos} />
        </div>
        <div className='modal-footer'>
          <AnswerPhotos updatePhotos={addPhotos} files={photos} />
          <div className="answer-submit pointer" onClick={() => submitReview()}>Submit Review</div>
        </div>
      </div>
    </div>
  )
}

export default AddReview;