import React from 'react';
import Enzyme, {mount, shallow, configure} from 'enzyme';

// for hooks
import ReactDOM from "react-dom";
// import { render, getByTestId} from "@testing-library/react";
import { render, getByTestId, fireEvent, screen, cleanup } from '@testing-library/react';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
// import { act } from "react-dom/test-utils";
// import App from '../../client/app.jsx';
import OutfitAddCard from '../../client/relatedProducts/OutfitAddCard.jsx';

import axios from 'axios';

it("renders Comparison without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<OutfitAddCard />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

describe('OutfitAddCard', () => {
  const onAddOutfitClick = jest.fn();
  let wrapper;

  beforeEach( () => {
    wrapper = mount(<OutfitAddCard />)
  } );

  afterEach(() => {
    cleanup();
  });

  it ('renders', () => {
    // console.log('OutfitAddCard', wrapper.debug());
    expect(wrapper).not.toBeNull();
  });

  it ('shows my default text', () => {
    expect(onAddOutfitClick).not.toHaveBeenCalled();
    expect(wrapper.find('div').simulate('click'));
    expect(onAddOutfitClick).toBeCalledTimes(0);
    // expect(wrapper.find('p').exists()).toBe(true);
    // expect(wrapper.find('p').at(0).text()).toEqual('COMPARING');
    expect(wrapper.find('div').hasClass('add-outfit pointer'));
  });

})