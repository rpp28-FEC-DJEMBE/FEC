import React from 'react';
import QuestionEntry from './questionEntry.jsx';

const QuestionList = (props) => {
  return (
    <div className="question-list">
      <QuestionEntry questions={props.questions}/>
      <button>More Answers</button>
      <button>Add a question</button>
    </div>
  )
}

export default QuestionList;
