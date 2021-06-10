import React from 'react';
import axios from 'axios';

// const Answers = (props) => {
//   let answers = [];

//   axios({
//     method:'get',
//     url: `/qa/questions/${props.questionID}`
//   }).then(data => {

//   })
//   return (
//     <div className="answer-list">
//       {answers.map(answer =>
//       <>
//         <p className="answer" >`A: {answer.body}`</p>
//         <p className="username" >{answer.answerer_name}</p> <p>Helpful?</p> <p>`Yes({answer.helpfulness})`</p> <p>report</p>
//       </>
//       )}
//     </div>
//     )
// }


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
        {this.state.answers.map(answer =>
        <div  className="answer">
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