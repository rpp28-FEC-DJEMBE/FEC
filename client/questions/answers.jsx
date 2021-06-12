import React from 'react';
import axios from 'axios';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers:[]
    }
  }

  componentDidMount(){
    axios({
      method:'get',
      url: `/qa/questions/${this.props.questionId}/answers`,
      params: {
        count: 2
      }
    }).then(data => {
      this.setState({
        answers: data.data.results
      })
    })
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

  render() {
    return (
      <div className="answer-list">
        {this.state.answers.map((answer, index) =>
        <div  className="answer" key={index}>
          <p>A: {answer.body}</p>
          <div className="answer-footer">
            <p>by {answer.answerer_name}, {this.convertDate(answer.date)}</p>
            <p>Helpful? Yes({answer.helpfulness})</p>
            <p>report</p>
          </div>
        </div>
        )}
      </div>
    )
  }

}

export default Answers;