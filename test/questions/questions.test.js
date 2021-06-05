import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});

import Questions from '../../client/questions/questions.jsx';

describe('Test Overview component', () => {

  test("Renders component correctly", () => {
    const wrapper = shallow(<Questions />)
    expect(wrapper.exists()).toBe(true);
  })

});
