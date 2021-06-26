import React from 'react';
import Enzyme, {mount, shallow, configure} from 'enzyme';

// for hooks
import ReactDOM from "react-dom";
import { render, getByTestId, fireEvent, screen, cleanup } from '@testing-library/react';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
// import { act } from "react-dom/test-utils";
// import App from '../../client/app.jsx';
import Comparison from '../../client/relatedProducts/Comparison.jsx';
import { collectFeatures, combineFeatures } from '../../client/relatedProducts/featuresHelper.js';
import {productDataMock, productDataMock4, features1DataMock, features2DataMock, featuresCombinedDataMock, featuresCompDataMock} from './RelatedPdtDataMock.js';

import axios from 'axios';


// test featuresHelper function
describe('Comparison Modal featuresHelper function Check', () => {
  const collectedF = collectFeatures(productDataMock.features);
  const collectedF4 = collectFeatures(productDataMock4.features);
  const combinedF = combineFeatures(collectedF, collectedF4);
  it('collect features correctly', () => {
    let collectedFS = JSON.stringify(collectedF);
    let collectedFSMock = JSON.stringify(features1DataMock);
    let combinedFS = JSON.stringify(combinedF);
    let combinedFSMock = JSON.stringify(featuresCombinedDataMock);
    expect(collectedFS).toEqual(collectedFSMock);
    expect(combinedFS).toEqual(combinedFSMock);
  })

})


// test comparison Modal



it("renders Comparison without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Comparison productId={22122} btnId={22124} showComp={true} featuresComp={featuresCompDataMock}/>, div);
  // ReactDOM.unmountComponentAtNode(div);
});


describe('Comparison', () => {
  const getFetures = jest.fn();
  let wrapper;

  beforeEach( () => {
    wrapper = mount(<Comparison productId={22122} btnId={22124} showComp={true} featuresComp={featuresCompDataMock}/>)
    // wrapper = mount(<Comparison />)
  } );

  it ('renders', () => {
    // wrapper = mount(<Comparison />);
    // console.log(wrapper.debug());
    expect(wrapper).not.toBeNull();
  });

  it ('shows my default text', () => {
    expect(getFetures).not.toHaveBeenCalled();
    expect(getFetures).toBeCalledTimes(0);
    // expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.find('p').at(0).text()).toEqual('COMPARING');
    expect(wrapper.find('div').at(0).hasClass('comparison-box pointer'));
    expect(wrapper.find('div').at(0).simulate('click'));
  });

})

// className="comparison-table"