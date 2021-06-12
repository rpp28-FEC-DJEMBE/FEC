import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
import Reviews from '../../client/reviews/Reviews.jsx';

test('shallow wrapper instance should not be null', () => {
  const wrapper = shallow(<Reviews productId={22122}/>);
  const instance = wrapper.instance();

  expect(instance).not.toBeNull();
})