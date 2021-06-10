import React from 'react';
import axios from 'axios';

import Search from './search.jsx';
import QuestionsList from './questionsList.jsx';

class Questions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product_id: 0,
      questions: []
    }
  }

  componentDidMount(){
    axios({
      method:'get',
      url: '/qa/questions',
      params: {
        product_id:22122,
        count:2
      }
    }).then(data => {
      this.setState({
        product_id: data.data.product_id,
        questions: data.data.results
      })
    })
  }

  render() {
    return (
      <div className="qaDisplay">
        <h1>Questions & Answers</h1>
        <Search />
        <QuestionsList questions={this.state.questions}/>
      </div>
    );
  }
}

export default Questions;