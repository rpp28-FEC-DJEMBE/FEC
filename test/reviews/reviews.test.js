import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
import Reviews from '../../client/reviews/Reviews.jsx';

describe('Components render', () => {
  test('Renders Reviews component', () => {
    const reviews = shallow(<Reviews productId={22122}/>);

    expect(reviews.exists()).toBe(true);
  })
})