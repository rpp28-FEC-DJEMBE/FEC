import React from 'react';
import axios from 'axios';

import Search from './search.jsx';
import QuestionsList from './questionsList.jsx';
import AnswerModal from './addAnswerModal.jsx'


class Questions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product_id: 0,
      questions: [],
      answerShow: false,
      questionId: null
    }
    this.handleAddAnswerClick = this.handleAddAnswerClick.bind(this);
  }

  componentDidMount(){
    axios({
      method:'get',
      url: '/qa/questions',
      params: {
        product_id:22122,
        count:2
      }
    }).then(data => {
      this.setState({
        product_id: data.data.product_id,
        questions: data.data.results
      })
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

  render() {
    return (
      <div className="qaDisplay">
        <h1>Questions & Answers</h1>
        <Search />
        <QuestionsList questions={this.state.questions} handleAddAnswer={this.handleAddAnswerClick} />
        <AnswerModal show={this.state.answerShow} handleClose={this.handleAddAnswerClick} question={this.state.questionId} />
      </div>
    );
  }
}

export default Questions;