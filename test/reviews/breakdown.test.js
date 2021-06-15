import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
import Breakdown from '../../client/reviews/Breakdown.jsx';
import ProductBreakdown from '../../client/reviews/ProductBreakdown.jsx';
import RatingBreakdown from '../../client/reviews/RatingBreakdown.jsx';


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

  test('Renders Breakdown component', () => {
    const breakdown = shallow(<Breakdown />);

    expect(breakdown.exists()).toBe(true);
  })

  test('Renders ProductBreakdown component', () => {
    const breakdownPDT = shallow(<ProductBreakdown />);

    expect(breakdownPDT.exists()).toBe(true);
  })

  test('Renders RatingBreakdown component', () => {
    const breakdownRTG = shallow(<RatingBreakdown ratings={data.ratings} recommended={data.recommended}/>);

    expect(breakdownRTG.exists()).toBe(true);
  })
})