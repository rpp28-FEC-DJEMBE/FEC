import React from 'react';
import RatingStars from './RatingStars.jsx';
import ReviewPhotoModal from './ReviewPhotoModal.jsx';
import helper from './reviewHelpers.js';
import axios from 'axios';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.review.helpfulness,
      helpfulClicked: false,
      showBody: false,
      report: 'Report'
    }
    this.handleHelpful = this.handleHelpful.bind(this);
    this.handleShowMore = this.handleShowMore.bind(this);
  }

  handleHelpful() {
    if (!this.state.helpfulClicked) {
      this.setState((prevState) => {
        return {
          helpfulness: prevState.helpfulness + 1,
          helpfulClicked: true
        }
      })

      axios({
        method:'put',
        url: `/reviews/${this.props.review.review_id}/helpful`,
      })
      .catch((err) => console.log("Error: ", err));
    } else {
      alert("You've already voted for this review!")
    }
  }

  handleShowMore() {
    this.setState({ showBody: true })
  }

  handleReport(){
    if (this.state.report === 'Report') {
      this.setState({
        report: 'Reported!',
      })
      axios({
        method: "put",
        url: `/reviews/${this.props.review.review_id}/report`
      })
      .catch((err) => console.log("Error: ", err));
    }
  }

  render() {
    let { review } = this.props;
    let body = (review.body.length > 250 && !this.state.showBody) ? review.body.substr(0,250) + '...' : review.body;
    let showMore = (body === review.body) ? null : <u className='pointer' onClick={this.handleShowMore}>Show more</u>
    let recommend;
    let response;
    let photos;

    // display if a recommendation is present in the data
    if (review.recommend) {
      recommend = <p>&#10003; I recommend this product</p>
    }

    // display if a response is present in the data
    if (review.response) {
      response = <p className='response'>Response from seller: <br></br> <em>{this.props.review.response}</em></p>
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
        Was this review helpful? <u className='pointer' onClick={() => this.handleHelpful()}>Yes</u> {this.state.helpfulness} | <u className='pointer' onClick={() => this.handleReport()}>{this.state.report}</u>
        </div>
      </div>
    )
  }
}

export default ReviewTile;

/*
Each review will be displayed on a single tile within the list.  The tile will display the following information:

Star Rating - This will be the rating given to the product by this individual review..  The rating will be displayed in the format of solid or outlined stars, where the solid stars represent the review score.  A total of 5 stars should always appear, and the amount filled in should correspond to the average score.
The visual for rating should be representative of up to a quarter of a review point.  For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.

Date of review - The date the review was written should appear in the format “Month DD, YYYY”

Review Summary - Reviews submitted will have a one sentence summary. This single sentence will be capped at 60 characters.  On the review tile, this summary will appear in bold font above the full review.

Review Body - The review body will be a free-form multimedia input where the user can submit text and images regarding their experience with the product.
The text submitted as part of the review will be between 50 and 1000 characters long.
Users should be able to submit up to 5 images along with a single review.
By default the first 250 characters of the review should display.  If the review is longer than 250 characters, below the body a link reading “Show more” will appear.  Upon clicking this link, the review tile should expand and the rest of the review should display.
Any images that were submitted as part of the review should appear as thumbnails below the review text. Upon clicking a thumbnail, the image should open in a modal window, displaying at full resolution.  The only functionality available within this modal should be the ability to close the window.

Recommend - If the reviewer recommends buying the product, the text “I recommend this product” and a checkmark icon will display below the review.  If the reviewer does not recommend the product, nothing will display here.

Reviewer name - The username for the reviewer will appear.  Only the username will appear. No email addresses or other personal information will display.  However, if the user’s email is associated with a sale in the system then next to the username the text “Verified Purchaser” will appear.

Response to Review - Our internal sales team has the ability to respond to any reviews written.  If the review has a corresponding response, this should appear below the reviewer name.  The response should be preceded by the text “Response from seller”, and should be visually distinguished from the rest of the review.

Rating Helpfulness - Any user on the site will have the ability to provide feedback on whether reviews are helpful.  At the bottom of the review tile the text “Was this review helpful?” will precede two links “Yes (#)” and “No (#)”.   Following “Yes” and “No” will be the count of users that have selected that button.  Clicking either link should cast a vote for that selection.
A user on the site does not need to be logged in to provide feedback on helpfulness.
A user can provide feedback on any review.  However, they can only make one submission for each review. If the user selects either “Yes” or “No” for a review, they should not be able to select another option again for that review.

*/