import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});

import ProductDescription from '../../client/overview/ProductDescription.jsx';
import {testDataProduct} from './testData.js';

describe('rendering', () => {

  describe('in the initial state', () => {

    const wrapper = shallow(<ProductDescription product={testDataProduct} />);

    it('should exist', () => {
      expect(wrapper.exists()).toBe(true);
    })

  })

});
