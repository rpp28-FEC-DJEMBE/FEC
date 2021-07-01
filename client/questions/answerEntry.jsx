import axios from 'axios';
import React from 'react';
import AnswerPhotoDisplay from './answerPhotoDisplay.jsx';

class AnswerEntry extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      reported: false,
      helpfulClick: false,
      helpful: this.props.answer.helpfulness
    };
  };

  handleReport(){
    if (!this.state.reported) {
      this.setState({
        reported: true,
      })
      axios({
        method: "put",
        url: `/qa/answers/${this.props.answer.answer_id}/report`
      })
    } else {
      console.log("Already Reported");
    }
  };

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
      .catch((err) => console.log("Error: ", err));
    } else {
      console.log("Already Clicked!");
    }
  };

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
    };

    let month = months[date.slice(5,7)];
    let day = date.slice(8,10);
    let year = date.slice(0,4);

    return `${month} ${day}, ${year}`
  };

  reportDisplay(){
    if(this.state.reported) {
      return "reported"
    } else {
      return "report"
    }
  };

  render() {
    const {body, photos, answerer_name, date} = this.props.answer

    return(
      <div  className="answer" >
          <div className="answer-display">
            <p className="a">A:</p>
            <p className="answer-body">{body}</p>
          </div>
          <AnswerPhotoDisplay photos={photos} />
          <div className="answer-footer">
            <span>by {answerer_name}, {this.convertDate(date)}</span>
            <span className="a-divider">|</span>
            <span >Helpful? <u onClick={() => this.handleHelpful()}>Yes</u> ({this.state.helpful})</span>
            <span className="a-divider">|</span>
            <span onClick={()=> this.handleReport()}>{this.reportDisplay()}</span>
          </div>
        </div>
    )
  }
};

export default AnswerEntry;