import React from 'react';
import QuestionEntry from './questionEntry.jsx';

const QuestionList = ({questions, handleAddAnswer}) => {

  return (
    <div className="question-list">
      <QuestionEntry
        questions={questions}
        handleAddAnswer={handleAddAnswer} />
    </div>
  )
}

export default QuestionList;
