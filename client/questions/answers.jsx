import React from 'react';
import axios from 'axios';
import ExpandAnswers from './expandAnswers.jsx'

class Answers extends React.Component {
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

  convertDate(date){
    const months = {
      "01":"January",
      "02":"February",
      "03":"March",
      "04":"April",
      "05":"May",
      "06":"June",
      "07":"July",
      "08":"August",
      "09":"September",
      "10":"October",
      "11":"November",
      "12":"December"
    }

    let month = months[date.slice(5,7)];
    let day = date.slice(8,10);
    let year = date.slice(0,4);

    return `${month} ${day}, ${year}`
  }

  handleExpandAnswers() {
    this.setState({
      answers: this.state.answersList
    })
  }


// handleReportClick(answerId){
//   const reportedList = this.state.report
//   console.log(reportedList)
//   if(!reportedList.includes(answerId)){
//     this.setState({
//       report: this.state.report.push(answerId)
//     })
//     console.log(answerId)
//   } else {
//     console.log("Can't report again!")
//   }
// }

  render() {
    if (this.state.answers.length === 0) {
      return null;
    }
    return (
      <div className="answer-list">
        {this.state.answers.map((answer, index) =>
        <div  className="answer" key={index}>
          <div className="answer-display">
            <p className="a">A:</p>
            <p className="answer-body">{answer.body}</p>
          </div>
          <div className="answer-footer">
            <p>by {answer.answerer_name}, {this.convertDate(answer.date)}</p>
            <p>Helpful? Yes({answer.helpfulness})</p>
            <p onClick={()=> this.handleReportClick(answer.answer_id)}>report</p>
          </div>
        </div>
        )}
        <ExpandAnswers answersList={this.state.answersList} seeMoreAnswers={this.handleExpandAnswers} />
      </div>
    )
  }

}

export default Answers;