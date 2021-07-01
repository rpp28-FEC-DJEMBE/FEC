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
    const {answer, user, email} = this.state
    let warning = "You are missing the following:\n"

    if (user === "") {
      warning += "- Username \n"
    }
    if (email === "") {
      warning += "- Email \n"
    }
    if (answer === "") {
      warning += "- Answer "
    }
    if (warning !== "You are missing the following:\n") {
      alert(warning)
    } else {
      axios({
        method: 'post',
        url: `/qa/questions/${this.props.question}/answers`,
        data: {
          body:this.state.answer,
          name:this.state.user,
          email:this.state.email,
          photos:this.state.photos
        }
      })
      .catch((err) => console.log("Error adding answer", err))
      this.props.handleClose()
    }
  }

  inputChange(stateKey){
    let input = document.getElementById(stateKey).value;
    this.setState({[stateKey]: input})
  }

  updatePhotos(event){
    let file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file)
    formData.append("upload_preset", "bji3bjas")

    axios({
      method: "post",
      url: "https://api.cloudinary.com/v1_1/hrrpp28fec/image/upload",
      data: formData
    })
    .then((data) => {
      this.setState({
        photos: this.state.photos.concat([data.data.url])
      })
    })
  }

  closeModal() {
    this.setState({
      answer:"",
      user:"",
      email:"",
      photos: []
    })
    this.props.handleClose()
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
            <div className="exit" onClick={() => this.closeModal()}>X</div>
          </div>
          <p className="subtitle"> <b>{this.props.productName} : {this.props.questionBody}</b></p>
          <div className="input-content">
            <label htmlFor="user">What is your nickname* </label>
            <input id="user" type="text" onChange={() => this.inputChange("user")} maxLength="60" placeholder="Example: jack543">{this.state.user}</input>
            <p className="disclaimer">For privacy reasons, do not use your full name or email address</p>
            <label htmlFor="email">Your email* </label>
            <input id="email" type="text" onChange={() => this.inputChange("email")} maxLength="60" placeholder="Example: jack@email.com">{this.state.email}</input>
            <p className="disclaimer">For authentication reasons, you will not be emailed</p>
            <label htmlFor="answer">Your Answer*</label>
            <textarea id="answer" type="text" onChange={() => this.inputChange("answer")} maxLength="1000">{this.state.answer}</textarea>
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
