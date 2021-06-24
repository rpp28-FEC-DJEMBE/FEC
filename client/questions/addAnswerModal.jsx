import React from 'react';
import axios from 'axios';
import AnswerPhotos from './answerPhotos.jsx';
import AddedPhotos from './addedPhotos.jsx';

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer:"",
      user:"",
      email:"",
      photos: []
    }
    this.updatePhotos = this.updatePhotos.bind(this);
  }

  submitAnswers(){

    if (this.state.answer === "" || this.state.user === "" || this.state.email === ""){
      alert("Missing Username, Email, or Answer!");
    } else {
      axios({
        method: 'post',
        url: `/qa/questions/${this.props.question}/answers`,
        data: {
          body:this.state.answer,
          name:this.state.user,
          email:this.state.email,
          // photos:this.state.photos
        }
      })
    }
  }

  inputChange(stateKey){
    let input = document.getElementById(stateKey).value;
    this.setState({[stateKey]: input})
    console.log(this.state)
  }

  updatePhotos(event){
    this.setState({
      photos: this.state.photos.concat([URL.createObjectURL(event.target.files[0])])
    })
  }

  render(){
    if (!this.props.show){
      return null;
    }

    return(
      <div className="answer-modal">
        <div className="answer-content">
          <div className="modal-header">
            <h2 className="answer-title">Submit your Answer</h2>
            <div className="exit" onClick={() => this.props.handleClose()}>X</div>
          </div>
          <p>{this.props.questionBody}</p>
          <div className="input-content">
            <label htmlFor="user">What is your nickname (mandatory) </label>
            <input id="user" type="text" onChange={() => this.inputChange("user")} maxLength="60" placeholder="Example: jack543"></input>
            <label htmlFor="email">Your email (mandatory) </label>
            <input id="email" type="text" onChange={() => this.inputChange("email")} maxLength="60" placeholder="Example: jack@email.com"></input>
            <label htmlFor="answer">Your Answer</label>
            <textarea id="answer" type="text" onChange={() => this.inputChange("answer")} maxLength="1000"></textarea>
          </div>
          <AddedPhotos photos={this.state.photos} />
          <div className="modal-footer">
            <AnswerPhotos updatePhotos={this.updatePhotos} files={this.state.photos} />
            <div className="answer-submit" onClick={()=>this.submitAnswers()}>Submit Answer</div>
          </div>
        </div>
      </div>
    )
  }
}

export default AnswerModal;
