import React from 'react';

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer:"",
      user:"",
      email:"",
    }
  }

  render(){
    if (!this.props.show){
      console.log("It didn't work")
      return null;
    }
    return(

      <div className="answer-modal">
        <div className="modal-header" onClick={() => this.props.onClick()}>
          X
        </div>
      <input className="user" type="text" maxlength="60" placeholder="Example: jack543"></input>
      <input className="email" type="text" maxlength="60" placeholder="Example: jack@email.com"></input>
      <textarea className="answer" type="text" maxlength="1000"></textarea>
    </div>
    )
  }
}

export default AnswerModal;
