import React from 'react';

import Search from './search.jsx';
import QuestionsList from './questionsList.jsx';

const Questions = () => {
  return (
    <div className="qaDisplay">
      <h1>Questions and Answers</h1>
      <Search />
      <QuestionsList />
    </div>
  );
};

export default Questions;