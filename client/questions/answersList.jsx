import React from 'react';
import axios from 'axios';
import ExpandAnswers from './expandAnswers.jsx';
import AnswerEntry from './answerEntry.jsx';

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answersList:[],
      answers:[],
      report:[]
    }
    this.handleExpandAnswers = this.handleExpandAnswers.bind(this);
  }

  componentDidMount(){
    this.getAnswers();
  }

  componentDidUpdate(prevProps){
    if(prevProps.questionId !== this.props.questionId) {
      this.getAnswers();
    }
  }

  getAnswers(){
    axios({
      method:'get',
      url: `/qa/questions/${this.props.questionId}/answers`,
      params: {
        count: 50
      }
    }).then(data => {
      let sorted = data.data.results.sort((a, b) => b.helpfulness - a.helpfulness)
      this.setState({
        answersList: sorted,
        answers: sorted.slice(0,2),
        questionId: this.props.questionId
      })
    })
    .catch((err) => console.log("Error: ", err))
  }

  updateQuestionHelpful(){
    axios({
      method:'put',
      url: `/qa/questions/${this.props.questionId}/helpful`,
    })
    .catch((err) => console.log("Error: ", err))
  }


  handleExpandAnswers() {
    this.setState({
      answers: this.state.answersList,
      answersList: []
    })
  }

  render() {
    if (this.state.answers.length === 0) {
      return null;
    }
    return (
      <div className="answer-list">
        {this.state.answers.map((answer, index) =>
        <AnswerEntry answer={answer} key={index} question={this.props.question} />
        )}
        <ExpandAnswers answersList={this.state.answersList} seeMoreAnswers={this.handleExpandAnswers} />
      </div>
    )
  }

}

export default AnswersList;