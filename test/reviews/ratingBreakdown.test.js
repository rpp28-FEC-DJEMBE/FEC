import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
import RatingBreakdown from '../../client/reviews/RatingBreakdown.jsx';
import RatingStars from '../../client/reviews/RatingStars.jsx';
import RatingBars from '../../client/reviews/RatingBars.jsx';


describe('Components render', () => {
  let data = {
    "product_id": "22122",
    "ratings": {
        "2": "2",
        "3": "3",
        "4": "1",
        "5": "1"
    },
    "recommended": {
        "false": "1",
        "true": "6"
    },
    "characteristics": {
        "Fit": {
            "id": 74277,
            "value": "4.6190476190476190"
        },
        "Length": {
            "id": 74278,
            "value": "3.5000000000000000"
        },
        "Comfort": {
            "id": 74279,
            "value": "5.0000000000000000"
        },
        "Quality": {
            "id": 74280,
            "value": "4.0000000000000000"
        }
    }
  };



  test('Renders RatingBreakdown component', () => {
    const breakdownRTG = shallow(<RatingBreakdown ratings={data.ratings} recommended={data.recommended}/>);

    expect(breakdownRTG.exists()).toBe(true);
  })
  test('Renders RatingStars component', () => {
    const stars = shallow(<RatingStars rating={25}/>);

    expect(stars.exists()).toBe(true);
  })

  test('Renders RatingBars component', () => {
    const bars = shallow(<RatingBars ratings={data.ratings} />);

    expect(bars.exists()).toBe(true);
  })
})