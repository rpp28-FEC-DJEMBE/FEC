import React, {useEffect, useState} from 'react';
import RatingStars from './RatingStars.jsx';
import ReviewPhotoModal from './ReviewPhotoModal.jsx';
import helper from './reviewHelpers.js';
import axios from 'axios';

const ReviewTile = ({ review }) => {
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [report, setReport] = useState(false);
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);


  const handleHelpful = () => {
    if (!helpfulClicked) {
      setHelpfulClicked(true);
      setHelpfulness(helpfulness + 1);
      axios({
        method:'put',
        url: `/reviews/${review.review_id}/helpful`,
      })
      .catch((err) => console.log("Error: ", err));
    } else {
      alert("You've already voted for this review")
    }
  }

  const handleShowMore = () => {
    setShowBody(true);
  }

  const handleReport = () => {
    if (!report) {
      setReport(true);
      axios({
        method: "put",
        url: `/reviews/${review.review_id}/report`
      })
      .catch((err) => console.log("Error: ", err));
    }
  }

  let body = (review.body.length > 250 && !showBody) ? review.body.substr(0,250) + '...' : review.body;
  let showMore = (body === review.body) ? null : <u className='pointer' onClick={() => handleShowMore()}>Show more</u>
  let recommend;
  let response;
  let photos;
  let reportDisplay = (!report) ? <u className='pointer' onClick={() => handleReport()}>Report</u> : 'Reported'

  // display if a recommendation is present in the data
  if (review.recommend) {
    recommend = <p>&#10003; I recommend this product</p>
  }

  // display if a response is present in the data
  if (review.response) {
    response = <p className='response'>Response from seller: <br></br> <em>{review.response}</em></p>
  }

  // if a review has photos, render an image and hidden modal until clicked
  if (review.photos.length) {
    photos =  <ul className='review-photos'>
                {
                  review.photos.map((image) => (
                    <ReviewPhotoModal url={image.url} id={image.id} key={image.id}/>
                  ))
                }
              </ul>
  }

  return (
    <div className='review-tile'>
      <div id='review-header'>
        <div id='tile-stars'>
          <RatingStars rating={review.rating} />
        </div>
        <p className='user tile-user'>{review.reviewer_name}, {helper.convertDate(review.date)}</p>
      </div>
      <div id='review-body'>
        <h4>{review.summary}</h4>
        {body}
        {showMore}
        {recommend}
        {response}
        {photos}
      </div>
      <div id='review-footer'>
      Was this review helpful? <u className='pointer' onClick={() => handleHelpful()}>Yes</u> {helpfulness} | {reportDisplay}
      </div>
    </div>
  )

}

export default ReviewTile;