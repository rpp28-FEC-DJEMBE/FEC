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
      questionId: null
    }
    this.handleAddAnswerClick = this.handleAddAnswerClick.bind(this);

  }

  componentDidMount(){
    this.getQuestions()
    .then((data) => this.updateState(data))
    .then(() => this.handleMoreAnsweredQuestions())
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
      displayQuestions: sorted.splice(0,4),
      questions: sorted
    })
    console.log(sorted)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.product_id !== this.props.productId){
     this.getQuestions()
     .then(data => {
       this.updateState(data)
     })
    }
  }

  handleMoreAnsweredQuestions() {
    this.setState({
      displayQuestions:this.state.displayQuestions.concat(this.state.questions.splice(0,4))
    })
  }

  handleAddAnswerClick (question_id) {
    if(!this.state.answerShow) {
      this.setState({
        answerShow: true,
        questionId: question_id
      })
    } else {
      this.setState({
        answerShow: false,
        questionId: null
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
        <AnswerModal show={this.state.answerShow} handleClose={this.handleAddAnswerClick} question={this.state.questionId} />
        <AddQuestion show={this.state.questionShow} handleClose={this.handleAddQClick} />
        <button onClick={() => this.handleMoreAnsweredQuestions()}>More Answered Questions</button>
        <button onClick={() => this.handleAddQClick()}>Add a question</button>
      </div>
    );
  }
}

export default Questions;