import React from 'react';

const MoreAnsweredQuestions = ({questions, handleMoreAnsweredQuestions, searchInUse}) => {
  if(questions.length > 0 && !searchInUse) {
    return (
      <button
        className="qa-button"
        onClick={() => handleMoreAnsweredQuestions()}
      >More Answered Questions</button>
    )
  } else {
    return null
  }
}

export default MoreAnsweredQuestions