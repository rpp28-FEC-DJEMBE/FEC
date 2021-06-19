import React from 'react';


const ExpandAnswers = (props) => {
  if (props.answersList.length > 2) {
    return (
      <p className="expand-answers-btn" onClick={() => props.seeMoreAnswers()}>See More Answers</p>
    )
  } else return null;
}

export default ExpandAnswers;