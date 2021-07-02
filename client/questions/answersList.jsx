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
      report:[],
      show: true
    }
    this.handleExpandAnswers = this.handleExpandAnswers.bind(this);
  };

  componentDidMount(){
    this.getAnswers();
  };

  componentDidUpdate(prevProps){
    if(prevProps.questionId !== this.props.questionId) {
      this.getAnswers();
    }
  };

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
    .catch((err) => console.log("Error: ", err));
  };

  handleExpandAnswers() {
    if (this.state.show === true) {

      this.setState({
        answers: this.state.answersList,
        show: false
      })
    } else {
      this.setState({
        answers: this.state.answersList.slice(0,2),
        show: true
      })
    }
  };

  render() {
    const {answers, answersList, show} = this.state

    if (this.state.answers.length === 0) {
      return null;
    }
    return (
      <div className="answer-list">
        {answers.map((answer, index) =>
        <AnswerEntry
          answer={answer}
          key={index}
          question={this.props.question} />
        )}
        <ExpandAnswers
          answers={answers}
          answersList={answersList}
          seeMoreAnswers={this.handleExpandAnswers}
          show={show} />
      </div>
    )
  };

};

export default AnswersList;