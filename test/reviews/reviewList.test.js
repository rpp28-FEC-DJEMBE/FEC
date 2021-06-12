import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
import ReviewList from '../../client/reviews/ReviewList.jsx';
import SortOptions from '../../client/reviews/SortOptions.jsx';
import ReviewTile from '../../client/reviews/ReviewTile.jsx';

describe('Components render', () => {
  let reviews = [
    {
        "review_id": 289925,
        "rating": 1,
        "summary": "Perspiciatis quis minus eligendi dicta eius perferendis.",
        "recommend": false,
        "response": null,
        "body": "Voluptatem repudiandae omnis. Dolore quibusdam voluptatum eligendi modi ut. Dolorum ut reprehenderit eos. Provident amet laudantium. Modi accusantium rerum provident minima praesentium assumenda dolorum cum et. Enim ut ut ex nam.",
        "date": "2020-05-08T00:00:00.000Z",
        "reviewer_name": "Ruthie.Williamson",
        "helpfulness": 28,
        "photos": [
            {
                "id": 534534,
                "url": "https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
            },
            {
                "id": 534535,
                "url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            }
        ]
    }
  ]

  test('Renders Review List component', () => {
    const reviewList = shallow(<ReviewList reviews={reviews}/>);

    expect(reviewList.exists()).toBe(true);
  })

  test('Renders Sort Options component', () => {
    const sortOptions = shallow(<SortOptions reviews={reviews}/>);

    expect(sortOptions.exists()).toBe(true);
  })

  test('Renders Review Tile component', () => {
    const reviewTile = shallow(<ReviewTile review={reviews[0]}/>);

    expect(reviewTile.exists()).toBe(true);
  })
})