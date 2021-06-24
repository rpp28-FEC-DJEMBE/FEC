import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});

import AddAnswerModal from '../../client/questions/addAnswerModal.jsx';
import AddedPhotos from '../../client/questions/addedPhotos.jsx';
import AddQuestion from '../../client/questions/addQuestion.jsx';
import AnswerEntry from '../../client/questions/answerEntry.jsx';
import AnswerPhotos from '../../client/questions/answerPhotos.jsx';
import AnswersList from '../../client/questions/answersList.jsx';
import ExpandAnswers from '../../client/questions/expandAnswers.jsx';
import QuestionEntry from '../../client/questions/questionEntry.jsx';
import Questions from '../../client/questions/questions.jsx';
import QuestionsList from '../../client/questions/questionsList.jsx';
import Search from '../../client/questions/search.jsx';
import AnswerModal from '../../client/questions/addAnswerModal.jsx';

describe('Components all render', () => {

  test('Renders ExpandAnswers', () => {
    const answer = [
      {
      "id": 1444525,
      "body": "test",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "We",
      "helpfulness": 1,
      "photos": []
      },
      {
        "id": 1444525,
        "body": "This is a test",
        "date": "2018-01-04T00:00:00.000Z",
        "answerer_name": "Are",
        "helpfulness": 2,
        "photos": []
    },
    {
      "id": 1444525,
      "body": "one two three",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "Testing",
      "helpfulness": 3,
      "photos": []
    }]

    const expandAnswers = shallow(<ExpandAnswers answersList={answer} />)
    expect(expandAnswers.exists()).toBe(true);
  })

  test('Renders AnswersList', () => {
    const answersList = shallow(<AnswersList />)
    expect(answersList.exists()).toBe(true);
  })

  test('Renders AnswerPhotos', () => {
    const files = ["1", "2", "3"]
    const answerPhotos = shallow(<AnswerPhotos files={files} />)
    expect(answerPhotos.exists()).toBe(true);
  })

  test('Renders AddedPhotos', () => {
    const addedPhotos = shallow(<AddedPhotos photos={["photo"]}/>)
    expect(addedPhotos.exists()).toBe(true);
  })

  test('Renders AnswerEntry', () => {
    const answer = {
        "id": 1444525,
        "body": "Its the best! Seriously magic fabric",
        "date": "2018-01-04T00:00:00.000Z",
        "answerer_name": "metslover",
        "helpfulness": 8,
        "photos": []
    }

    const answerEntry = shallow(<AnswerEntry answer={answer} />)
    expect(answerEntry.exists()).toBe(true);
  })

  test('Renders Questions', () => {
    const questions = shallow(<Questions />)
    expect(questions.exists()).toBe(true);
  })

  test('Renders AddAnswerModal', () => {
    const addAnswerModal = shallow(<AddAnswerModal show={true}/>)
    expect(addAnswerModal.exists()).toBe(true);
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

describe('State is mounted', () => {

  test('Top level state', () => {
    const question = shallow(<Questions productId={22122} />)
    const questionInstance = question.instance();
    questionInstance.componentDidMount();

    expect(question.state('product_id')).toBe(22122);
    expect(question.state('questions').length > 0).toBe(true);
  })
})

describe('Modals: Add Answer & Add Question', () => {
  const question = shallow(<Questions productId={22122} />);
  const questionInstance = question.instance();
  const answerModal = shallow(<AnswerModal />)
  const addQuestion = shallow(<AddQuestion />)

  test('add Answer Modal', () =>{
    questionInstance.handleAddAnswerClick(22122, "???")
    expect(question.state('answerShow')).toBe(true)
    expect(answerModal.exists()).toBe(true)
  })

  test('add question Modal', () =>{
    questionInstance.handleAddQClick()
    expect(question.state('questionShow')).toBe(true)
    expect(addQuestion.exists()).toBe(true)
  })
})

