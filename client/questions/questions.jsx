import React from 'react';
import axios from 'axios';

import Search from './search.jsx';
import QuestionsList from './questionsList.jsx';
import AnswerModal from './addAnswerModal.jsx'
import AddQuestion from './addQuestion.jsx'


class Questions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product_id: 0,
      questions: [],
      displayQuestions: [],
      answerShow: false,
      questionShow: false,
      questionId: null,
      questionBody: ""
    }
    this.handleAddAnswerClick = this.handleAddAnswerClick.bind(this);

  }

  componentDidMount(){
    this.getQuestions()
    .then((data) => this.updateState(data))
    .catch((err) => console.log("Error: ", err))

    // .then(() => this.handleMoreAnsweredQuestions())
  }

  getQuestions(){
    return axios({
      method:'get',
      url: '/qa/questions',
      params: {
        product_id:this.props.productId,
        count:50
      }
    })
  }

  updateState(data){
    let sorted = data.data.results.sort((a,b) => b.question_helpfulness - a.question_helpfulness);
    this.setState({
      product_id: Number(data.data.product_id),
      displayQuestions: sorted.splice(0,2),
      questions: sorted
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.product_id !== this.props.productId){
     this.getQuestions()
     .then(data => {
       this.updateState(data)
     })
    .catch((err) => console.log("Error: ", err))
    }
  }

  handleMoreAnsweredQuestions() {
    this.setState({
      displayQuestions:this.state.displayQuestions.concat(this.state.questions.splice(0,4))
    })
  }

  handleAddAnswerClick (question_id, question_body) {
    if(!this.state.answerShow) {
      this.setState({
        answerShow: true,
        questionId: question_id,
        questionBody: question_body
      })
    } else {
      this.setState({
        answerShow: false,
        questionId: null,
        questionBody: ""
      })
    }
  }

  handleAddQClick () {
    if(!this.state.questionShow) {
      this.setState({
        questionShow: true
      })
    } else {
      this.setState({
        questionShow:false
      })
    }
  }



  render() {
    return (
      <div className="qaDisplay">
        <h3>Questions & Answers</h3>
        <Search />
        <QuestionsList questions={this.state.displayQuestions} handleAddAnswer={this.handleAddAnswerClick} handleAddQ={this.handleAddQClick} handleMoreQuestions={this.handleMoreAnsweredQuestions} />
        <AnswerModal show={this.state.answerShow} handleClose={this.handleAddAnswerClick} question={this.state.questionId} questionBody={this.state.questionBody} />
        <AddQuestion show={this.state.questionShow} handleClose={this.handleAddQClick.bind(this)} />
        <button onClick={() => this.handleMoreAnsweredQuestions()}>More Answered Questions</button>
        <button onClick={() => this.handleAddQClick()}>Add a question</button>
      </div>
    );
  }
}

export default Questions;