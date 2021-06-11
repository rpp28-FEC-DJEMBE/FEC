import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});

import Overview from '../../client/overview/overview.jsx';

describe('Test Overview component', () => {

  test("Renders component correctly", () => {
    const wrapper = shallow(<Overview />)
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".product-image").text()).toEqual("Product image component");
  })

});
