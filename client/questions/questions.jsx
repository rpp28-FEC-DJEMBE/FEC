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
      answerShow: false,
      questionShow: false,
      questionId: null
    }
    this.handleAddAnswerClick = this.handleAddAnswerClick.bind(this);
    this.handleAddQClick = this.handleAddQClick.bind(this);

  }

  componentDidMount(){
    this.getQuestions()
  }

  getQuestions(){
    axios({
      method:'get',
      url: '/qa/questions',
      params: {
        product_id:this.props.productId,
        count:2
      }
    }).then(data => {
      this.setState({
        product_id: Number(data.data.product_id),
        questions: data.data.results
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.product_id !== this.props.productId){
     this.getQuestions();
    }
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
        <h1>Questions & Answers</h1>
        <Search />
        <QuestionsList questions={this.state.questions} handleAddAnswer={this.handleAddAnswerClick} handleAddQ={this.handleAddQClick} />
        <AnswerModal show={this.state.answerShow} handleClose={this.handleAddAnswerClick} question={this.state.questionId} />
        <AddQuestion show={this.state.questionShow} handleClose={this.handleAddQClick} />
      </div>
    );
  }
}

export default Questions;