import React from 'react';
import axios from 'axios';

import Search from './search.jsx';
import QuestionsList from './questionsList.jsx';
import AnswerModal from './addAnswerModal.jsx';
import AddQuestion from './addQuestion.jsx';
import MoreAnsweredQuestions from './moreAnsweredQuestions.jsx';

class Questions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product_id: 0,
      masterQuestionsList: [],
      questions: [],
      displayQuestions: [],
      answerShow: false,
      questionShow: false,
      questionId: null,
      questionBody: "",
      searchInUse: false,
    }
    this.handleAddAnswerClick = this.handleAddAnswerClick.bind(this);
    this.handleAddQClick = this.handleAddQClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMoreAnsweredQuestions = this.handleMoreAnsweredQuestions.bind(this);
  }

  componentDidMount(){
    this.getQuestions()
    .then((data) => this.updateState(data))
    .catch((err) => console.log("Error: ", err))
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.product_id !== this.props.product.productId){
     this.getQuestions()
     .then(data => {
       this.updateState(data)
     })
    .catch((err) => console.log("Error: ", err))
    }
  }

  getQuestions(){
    return axios({
      method:'get',
      url: '/qa/questions',
      params: {
        product_id:this.props.product.productId,
        count:50
      }
    })
  }

  updateState(data){
    let sorted = data.data.results.sort((a,b) => b.question_helpfulness - a.question_helpfulness);

    this.setState({
      product_id: Number(data.data.product_id),
      masterQuestionsList: sorted.slice(),
      displayQuestions: sorted.slice(0,2),
      questions: sorted.slice(2)
    })
  }

  handleSearch(input){
    const {masterQuestionsList} = this.state
    if (input.length >= 3) {
      this.setState({
        searchInUse: true,
        displayQuestions: masterQuestionsList
        .filter(question =>
          question.question_body.toLowerCase().includes(input.toLowerCase()))
      })
    } else {
      this.setState({
        questions: masterQuestionsList.slice(2),
        displayQuestions: masterQuestionsList.slice(0,2),
        searchInUse: false
      })
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
    const {displayQuestions, answerShow, questionShow, product_id, questionId, questionBody, questions, searchInUse} = this.state;
    const {productName} = this.props.product;

    return (
      <div className="qaDisplay">
        <h2>QUESTIONS & ANSWERS</h2>
        <Search
        handleSearch={this.handleSearch} />
        <QuestionsList
          questions={displayQuestions}
          handleAddAnswer={this.handleAddAnswerClick}
        />
        <AnswerModal
          show={answerShow}
          productName={productName}
          handleClose={this.handleAddAnswerClick}
          question={questionId}
          questionBody={questionBody} />
        <AddQuestion
          show={questionShow}
          productId={product_id}
          productName={productName}
          handleClose={this.handleAddQClick} />
        <MoreAnsweredQuestions
          questions={questions}
          searchInUse={searchInUse}
          handleMoreAnsweredQuestions={this.handleMoreAnsweredQuestions} />
        <button className="qa-button" onClick={() => this.handleAddQClick()}>Add a question +</button>
      </div>
    )
  };
};

export default Questions;