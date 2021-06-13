import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});

import ImageGallery from '../../client/overview/ImageGallery.jsx';
import {testDataStyles} from './testData.js';

console.log('IMPORT:', testDataStyles);

describe('rendering', () => {

  const propsForImageGallery = {
    styleId: 123167,
    styles: testDataStyles
  }
  const wrapper = shallow(<ImageGallery {...propsForImageGallery} />);

  describe('in the initial state', () => {


    it('should exist', () => {
      expect(wrapper.exists()).toBe(true);
    })

    // it('should show a loading message', () => {
    //   expect(wrapper.find('.o-product-overview').find('p').text()).toContain('Loading');
    // })

    // it('should not render child components', () => {
    //   expect(wrapper.find('ImageGallery').exists()).toBe(false);
    //   expect(wrapper.find('ProductControls').exists()).toBe(false);
    //   expect(wrapper.find('ProductDescription').exists()).toBe(false);
    // })

  })

});
