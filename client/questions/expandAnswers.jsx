import React from 'react';


const ExpandAnswers = ({answers, answersList, show, seeMoreAnswers}) => {

  if (answersList.length > 2 && show) {
    return (
      <p className="expand-answers-btn" onClick={() => seeMoreAnswers()}>See More Answers</p>
    )
  } else {
    if (answersList.length === answers.length && answersList.length > 2) {
      return (
        <p className="expand-answers-btn" onClick={() => seeMoreAnswers()}>Collapse answers</p>
      )
    } else {
      return null;
    }
  }
}

export default ExpandAnswers;