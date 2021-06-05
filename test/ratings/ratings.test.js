import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
import Ratings from '../../client/ratings/ratings.jsx';

test('shallow wrapper instance should not be null', () => {
  const wrapper = shallow(<Ratings />);
  const instance = wrapper.instance();

  expect(instance).not.toBeNull();
})