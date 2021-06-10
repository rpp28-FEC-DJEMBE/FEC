import React from 'react';
import Answers from './answers.jsx';

const QuestionEntry = (props) => {

  return (
    <>
      {props.questions.map(question =>
      <>
          <div className="question-entry">
            <p className="question">Q: {question.question_body}</p>
            <div className="question-entry-header">
              <p>Helpful? Yes({question.question_helpfulness})</p>
              <p onClick={()=> console.log("hi")}>Add Answer</p>
            </div>
          </div>
            <Answers questionId={question.question_id}/>
      </>
      )}
    </>

  )
}


export default QuestionEntry;