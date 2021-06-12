import React from 'react'

class AddQuestion extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      qUser:"",
      qEmail:"",
      questionInput:""
    }
  }


  render(){
    if (!this.props.show){
      return null;
    }

    return (
      <div className="question-modal">
        <div className="question-content">
          <div className="modal-header">
            <h2 className="question-title">Ask Your Question</h2>
            <div onClick={() => this.props.handleClose()}>X</div>
          </div>
          <label>What is your nickname (mandatory)</label>
          <input id="q-user" type="text" maxLength="60" placeholder="Example: jackson11!"></input>
          <p className="disclaimer">For privacy reasons, do not use your full name or email address</p>
          <label>Your email (mandatory)</label>
          <input id="q-email" type="text" maxLength="60" placeholder="“Why did you like the product or not?”"></input>
          <p className="disclaimer">For authentication reasons, you will not be emailed</p>
          <label>Your Question</label>
          <textarea id="questionInput" type="text" maxLength="1000"></textarea>
          <div className="question-footer">
          <button>Submit question</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddQuestion;