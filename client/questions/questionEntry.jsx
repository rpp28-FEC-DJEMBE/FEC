import React, {useState} from 'react';
import Answers from './answers.jsx';
import AnswerModal from './addAnswerModal.jsx'

const QuestionEntry = (props) => {
  return (
    <>
      {props.questions.map((question, index) =>
      <div key={index}>
          <div className="question-entry" key={index}>
            <p className="question">Q: {question.question_body}</p>
            <div className="question-entry-header">
              <p>Helpful? Yes({question.question_helpfulness})</p>
              <p onClick={()=> props.handleAddAnswer(question.question_id)} >Add Answer</p>
            </div>
          </div>
            <Answers questionId={question.question_id}/>
      </div>
      )}
    </>

  )
}


export default QuestionEntry;