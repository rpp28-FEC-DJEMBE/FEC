import axios from 'axios';
import React from 'react';

class AnswerEntry extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      reported: false,
      helpfulClick: false,
      helpful: this.props.answer.helpfulness
    }
  }

  handleReport(){
    if (!this.state.reported) {
      this.setState({
        reported: true
      })
      axios({
        method: "put",
        url: `/qa/answers/${this.props.answer.answer_id}/report`
      })
    } else {
      console.log("Already Reported")
    }
  }

  handleHelpful(){
    if (!this.state.helpfulClick) {
      this.setState((ps) => {
        return{
          helpfulClick: true,
          helpful: ps.helpful + 1
        }
      })
      axios({
        method: "put",
        url: `/qa/answers/${this.props.answer.answer_id}/helpful`
      })
    } else {
      console.log("Already Clicked!")
    }
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

    return(
      <div  className="answer" >
          <div className="answer-display">
            <p className="a">A:</p>
            <p className="answer-body">{this.props.answer.body}</p>
          </div>
          <div className="answer-footer">
            <p>by {this.props.answer.answerer_name}, {this.convertDate(this.props.answer.date)}</p>
            <p >Helpful? <u onClick={() => this.handleHelpful()}>Yes</u> ({this.state.helpful})</p>
            <p onClick={()=> this.handleReport()}>report</p>
          </div>
        </div>
    )
  }
}

export default AnswerEntry;