import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});

import Overview from '../../client/overview/Overview.jsx';

describe('rendering', () => {

  describe('in the initial state', () => {

    const spy = jest.spyOn(Overview.prototype, 'componentDidMount');
    const wrapper = shallow(<Overview />);
    // const wrapper = shallow(<Overview />, { disableLifecycleMethods: true });
    // ^this is cool, you can use to test the state prior to a fetch in componentDidMount

    it('should exist', () => {
      expect(wrapper.exists()).toBe(true);
    })

    it('should show a loading message', () => {
      expect(wrapper.find('.o-product-overview').find('p').text()).toContain('Loading');
    })

    it('should not render child components', () => {
      expect(wrapper.find('ImageGallery').exists()).toBe(false);
      expect(wrapper.find('ProductControls').exists()).toBe(false);
      expect(wrapper.find('ProductDescription').exists()).toBe(false);
    })

    // this works, but is really just testing the React lifecycle, which I don't need to do
    // keep it for reference though
    it('should have called componentDidMount', () => {
      expect(spy).toHaveBeenCalled()
    })

  })

});

// interactions
// lifecycle