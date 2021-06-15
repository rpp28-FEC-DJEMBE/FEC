import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});

import ProductDescription from '../../client/overview/ProductDescription.jsx';

describe('rendering', () => {

  describe('in the initial state', () => {

    const wrapper = shallow(<ProductDescription />);

    it('should exist', () => {
      expect(wrapper.exists()).toBe(true);
    })

  })

});
