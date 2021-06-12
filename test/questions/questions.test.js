import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});

import Questions from '../../client/questions/questions.jsx';
import AddAnswerModal from '../../client/questions/addAnswerModal.jsx';
import Answers from '../../client/questions/answers.jsx';
import QuestionEntry from '../../client/questions/questionEntry.jsx';
import QuestionsList from '../../client/questions/questionsList.jsx';
import Search from '../../client/questions/search.jsx';

describe('Components all render', () => {

  test('Renders Questions', () => {
    const questions = shallow(<Questions />)
    expect(questions.exists()).toBe(true);
  })

  test('Renders AddAnswerModal', () => {
    const addAnswerModal = shallow(<AddAnswerModal show={true}/>)
    expect(addAnswerModal.exists()).toBe(true);
  })

  test('Renders Answers', () => {
    const answers = shallow(<Answers />)
    expect(answers.exists()).toBe(true);
  })

  test('Renders QuestionEntry', () => {
    const questions = [{
      "question_id": 153661,
      "question_body": "Does this product run big or small?",
      "question_date": "2019-01-17T00:00:00.000Z",
      "asker_name": "jbilas",
      "question_helpfulness": 10,
      "reported": false,
      "answers": {
        "1991252": {
          "id": 1991252,
          "body": "Example answer to be posted",
          "date": "2021-06-06T00:00:00.000Z",
          "answerer_name": "Question person",
          "helpfulness": 0
        }
      }
    }]
    const questionEntry = shallow(<QuestionEntry questions={questions}/>)
    expect(questionEntry.exists()).toBe(true);
  })

  test('Renders Answers', () => {
    const questionsList = shallow(<QuestionsList />)
    expect(questionsList.exists()).toBe(true);
  })

  test('Renders Search', () => {
    const search = shallow(<Search />)
    expect(search.exists()).toBe(true);
  })
})

