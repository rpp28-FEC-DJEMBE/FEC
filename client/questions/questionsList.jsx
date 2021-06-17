import React from 'react';
import QuestionEntry from './questionEntry.jsx';

const QuestionList = (props) => {


  return (
    <div className="question-list">
      <QuestionEntry questions={props.questions} handleAddAnswer={props.handleAddAnswer} />
      <button>More Answers</button>
      <button onClick={() => props.handleAddQ()}>Add a question</button>
    </div>
  )
}

export default QuestionList;
