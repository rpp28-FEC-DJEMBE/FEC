import React from 'react';
import AnswersList from './answersList.jsx';
import axios from 'axios';

class QuestionEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      helpfulClick: false,
      helpful: this.props.question.question_helpfulness
    }
  }

  updateQuestionHelpful(){
    if (!this.state.helpfulClick) {
      this.setState((ps) => {
        return {
          helpfulClick: true,
          helpful: ps.helpful + 1
        }
      })
      axios({
      method:'put',
      url: `/qa/questions/${this.props.question.question_id}/helpful`,
    })
    .catch((err) => console.log("Error: ", err));
    } else {
      console.log("Already Clicked!")
    }
  };

  render() {
    const {question_body, question_id} = this.props.question
    return (
      <>
        <div className="question-entry">
          <p className="question">Q: {question_body}</p>
          <div className="question-entry-header">
            <span>Helpful? <u onClick={() => this.updateQuestionHelpful()}>Yes</u> ({this.state.helpful})</span>
            <span className="q-divider">|</span>
            <span onClick={()=> this.props.handleAddAnswer(question_id, question_body)} >Add Answer</span>
          </div>
        </div>
          <AnswersList
            questionId={question_id}  />
      </>
    )
  }
}

export default QuestionEntry;