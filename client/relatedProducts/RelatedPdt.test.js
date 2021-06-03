import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
import RelatedPdt from './RelatedPdt.jsx';


test("renders users correctly", () => {
  const users = [{
    userId: 0,
    username: 'TestUser'
  }];
  const wrapper = shallow(
    <RelatedPdt
      users={users}
    />)
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find(".userLi").text()).toEqual("#0: TestUser");
})
