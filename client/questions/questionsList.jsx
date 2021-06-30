import React from 'react';
import QuestionEntry from './questionEntry.jsx';

const QuestionList = ({questions, handleAddAnswer}) => {
  return (
    <div className="question-list">
      {questions.map((question, i) =>
        <QuestionEntry
          key={i}
          question={question}
          handleAddAnswer={handleAddAnswer} />
      )}
    </div>
  )
}

export default QuestionList;
