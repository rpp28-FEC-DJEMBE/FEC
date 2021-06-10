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
    //check if button had been triggered

    <div className="answer-modal">
      <input className="user" type="text" maxlength="60" placeholder="Example: jack543"></input>
      <input className="email" type="text" maxlength="60" placeholder="Example: jack@email.com"></input>
      <textarea className="answer" type="text" maxlength="1000"></textarea>
    </div>
  }
}

export default AnswerModal;
