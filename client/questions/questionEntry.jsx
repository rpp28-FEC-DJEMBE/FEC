import React, {useState} from 'react';
import Answers from './answers.jsx';
import AnswerModal from './addAnswerModal.jsx'

const QuestionEntry = (props) => {
const [show, setShow] = useState(false)

  return (
    <>
      {props.questions.map(question =>
      <>
          <div className="question-entry">
            <p className="question">Q: {question.question_body}</p>
            <div className="question-entry-header">
              <p>Helpful? Yes({question.question_helpfulness})</p>
              <p onClick={()=> setShow(true)}>Add Answer</p>
              <AnswerModal onClick={()=> setShow(false)} show={show}/>
            </div>
          </div>
            <Answers questionId={question.question_id}/>
      </>
      )}
    </>

  )
}


export default QuestionEntry;