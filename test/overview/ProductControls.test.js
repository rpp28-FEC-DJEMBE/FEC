import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});

import ProductControls from '../../client/overview/ProductControls.jsx';

describe('rendering', () => {

  describe('in the initial state', () => {

    const wrapper = shallow(<ProductControls />);

    it('should exist', () => {
      expect(wrapper.exists()).toBe(true);
    })

  })

});

