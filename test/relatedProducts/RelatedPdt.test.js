import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
import RelatedPdt from '../../client/relatedProducts/RelatedPdt.jsx';

test("renders users correctly", () => {
  const products = [{
    id: 0,
    username: 'TestUser'
  }];
  const wrapper = shallow(<RelatedPdt />)
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.state('products')[0].id).toBe(22122);
  // expect(wrapper.find(".card").length).toEqual(4);
  // // expect(wrapper.find(".userLi").first().text()).toEqual("#0: TestUser");
  // expect(wrapper.find(".userLi").at(1).text()).toEqual("#2: Huiqing");
})

test("it should clone array", () => {
  const users = [{
    userId: 0,
    username: 'TestUser'
  }];
  const wrapper = shallow(
    <RelatedPdt
      users={users}
    />)
  expect(wrapper.instance().cloneArray([1,2,3])).toEqual([1,2,3]);
})

test("it should reverse string", () => {
  const users = [{
    userId: 0,
    username: 'TestUser'
  }];
  const wrapper = shallow(
    <RelatedPdt
      users={users}
    />)
  expect(wrapper.instance().reverseString('hello')).toEqual('olleh');
})