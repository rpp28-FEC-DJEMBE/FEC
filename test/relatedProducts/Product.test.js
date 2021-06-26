import React from 'react';
import Enzyme, {mount, shallow, configure} from 'enzyme';

// for hooks
import ReactDOM from "react-dom";
// import { render, getByTestId} from "@testing-library/react";
import { render, getByTestId, fireEvent, screen, cleanup, findByText } from '@testing-library/react';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
// import { act } from "react-dom/test-utils";
// import App from '../../client/app.jsx';
import Product from '../../client/relatedProducts/Product';
import {productDataMock, productDataMock4, pdtDetailDataMock} from './RelatedPdtDataMock';

import axios from 'axios';

it("renders Product without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Product detail={pdtDetailDataMock}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Product', () => {
  // const getDetail = jest.fn();
  // const onProductBtnClick = jest.fn();
  // const onCardClick = jest.fn();
  let classNameMockData = {
    regular: '',
    sale: 'product-sale-price-none'
  };
  let wrapper;

  beforeEach( () => {
    wrapper = mount(<Product
      key={productDataMock4.id}
      overviewProductId={productDataMock.id}
      id={productDataMock4.id}
      category={productDataMock4.category}
      name={productDataMock4.name}
      default_price={productDataMock4.default_price}
      rating={'5'}
      cardBtn={'\u2606'}
      // onProductBtnClick={onProductBtnClick}
      // onCardClick={onCardClick}
      detail={pdtDetailDataMock}
      className={classNameMockData}
    />)
    // wrapper = mount(<Product
    //   key={product.id}
    //   overviewProductId={props.productId}
    //   id={product.id}
    //   category={product.category}
    //   name={product.name}
    //   default_price={product.default_price}
    //   rating={'5'}
    //   cardBtn={'\u2606'}
    //   onProductBtnClick={onProductBtnClick}
    //   onCardClick={props.onCardClick}
    // />)
  } );

  it ('renders', () => {
    // wrapper = mount(<Comparison />);
    // console.log('Product DOM', wrapper.debug());
    expect(wrapper).not.toBeNull();
  });

  it ('shows my default text', () => {
    // expect(getDetail).not.toHaveBeenCalled();
    // expect(getDetail).toBeCalledTimes(0);
    // expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.find('p').at(0).text()).toEqual('Pants');
    expect(wrapper.find('p').at(1).text()).toEqual('Morning Joggers');
    // expect(wrapper.find('a').at(0).hasClass('compare-btn pointer'));
    expect(wrapper.find('a').at(0).hasClass('compare-btn pointer'));
    // expect(wrapper.find('a').at(0).simulate('click'));
    wrapper.find('a').at(0).simulate('click');
    // console.log('Product DOM2222', wrapper.debug());
  });

})


beforeEach(() => {
  const getDetail = jest.fn();
  const onProductBtnClick = jest.fn();
  const onCardClick = jest.fn();
  let classNameMockData = {
    regular: '',
    sale: 'product-sale-price-none'
  };

  render(<Product
    key={productDataMock4.id}
    overviewProductId={productDataMock.id}
    id={productDataMock4.id}
    category={productDataMock4.category}
    name={productDataMock4.name}
    default_price={productDataMock4.default_price}
    rating={'5'}
    cardBtn={'\u2606'}
    onProductBtnClick={onProductBtnClick}
    onCardClick={onCardClick}
    detail={pdtDetailDataMock}
    className={classNameMockData}
  />);
});

afterEach(cleanup);

test('Should render Product Card', async () => {
  // expect(screen.getByTestId('pdtCard')).toBeInTheDocument();
});
test('Should render Product Card', async () => {
  // const product = await findByText('pdtCard');
  // await waitFor(() => {
  //   expect(getByText('pdtCard')).toBeInTheDocument()
  // })
  // expect(screen.getByRole('div')).toBeInTheDocument();
});