import React from 'react';
import QuestionEntry from './questionEntry.jsx';

const QuestionList = (props) => {

  return (
    <div className="question-list">
      <QuestionEntry questions={props.questions} handleAddAnswer={props.handleAddAnswer} />
    </div>
  )
}

export default QuestionList;
