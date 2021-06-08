import React from 'react';
import QuestionEntry from './questionEntry.jsx';

const QuestionList = () => {
  return (
    <div>
      <QuestionEntry />
      <button>More Answers</button>
      <button>Add a question</button>
    </div>
  )
}

export default QuestionList;
