import React, {useState} from 'react';
import AnswersList from './answersList.jsx';

const QuestionEntry = ({questions}) => {

  return (
    <>
      {questions.map(({question_body, question_id, question_helpfulness}, index) =>
      <div key={index}>
          <div className="question-entry" key={index}>
            <p className="question">Q: {question_body}</p>
            <div className="question-entry-header">
              <p>Helpful? <u>Yes</u> ({question_helpfulness})</p>
              <p onClick={()=> props.handleAddAnswer(question_id, question_body)} >Add Answer</p>
            </div>
          </div>
            <AnswersList questionId={question_id}  />
      </div>
      )}
    </>

  )
}


export default QuestionEntry;