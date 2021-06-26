import React from 'react';
import Enzyme, {mount, shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});

// // for hooks
import ReactDOM from "react-dom";
import { render, getByTestId, fireEvent, screen, cleanup } from '@testing-library/react';
// // import { act } from "react-dom/test-utils";


import axios from 'axios';

import RelatedPdt from '../../client/relatedProducts/RelatedPdt.jsx';
// // import App from '../../client/app.jsx';
import Product from '../../client/relatedProducts/Product.jsx';
import OutfitAddCard from '../../client/relatedProducts/OutfitAddCard.jsx';
import Comparison from '../../client/relatedProducts/Comparison.jsx';
import {productDataMock, relatedIdsDataMock, relatedPdtDataMock} from './RelatedPdtDataMock.js';


// // mock a package, or a file.
// jest.mock('axios');
// // console.log(axios);


// let passedData = {
//   productId: 22122,
//   productName: 'Camo Onesie'
// }
// let passedData4 = {
//   productId: 22124,
//   productName: 'Camo Onesie4'
// }

// import mockAxios from 'axios';
// import { expect } from '@jest/globals';
// mockAxios.get.mockImplementation( () => {
//   Promise.resolve(passedData);
// } );
// mockAxios.get.mockImplementation( () => {
//   Promise.resolve(passedData4);
// } );




// describe('relatedPdt', () => {
//   // const RelatedPdt = jest.fn();
//   test('should get relatedId', async () => {
//     // let passedData = {
//     //   productId: 22122,
//     //   productName: 'Camo Onesie'
//     // }
//     // const result = await RelatedPdt(passedData);
//     // console.log('test fn', RelatedPdt);
//     // console.log('test results', result);
//     // expect(result).toBe('testing');
//     expect(mockAxios.get).toHaveBeenCalled();
//   })
// })


describe('RelatedPdt', () => {
  const getOutfits = jest.fn();
  const slideLeft = jest.fn();
  const onCardClick = jest.fn();
  let wrapper;

  beforeEach( async() => {
    // wrapper = mount(<RelatedPdt getOutfits={getOutfits}/>)
    wrapper = mount(<RelatedPdt productId={22122} onCardClick={onCardClick}/>)
  } );

  it ('renders', async() => {
    // console.log(wrapper.debug());
    expect(wrapper).not.toBeNull();
  });

  it ('shows my default text', async() => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h3').exists()).toBe(true);
    // expect(wrapper.find('h3').text()).toEqual('RELATED PRODUCTS');
    expect(wrapper.find('h3').at(0).text()).toEqual('RELATED PRODUCTS');
    expect(wrapper.find('h3').at(1).text()).toEqual('YOUR OUTFIT');
    expect(wrapper.find('h3').at(0).hasClass('related-product-header')).toBe(true);
    // expect(wrapper.getByTestId('relatedPdt').toBeInTheDocument()).toEqual('YOUR OUTFIT');
    // screen.getByTestId('relatedPdt').toBeInTheDocument();
  });

  it ('shows my default text', async() => {
    // expect(wrapper.find('label').at(2).hasClass('pointer rightBtn btn-Inactive')).toBe(true);
    expect(wrapper.find('label').at(2).hasClass('pointer rightBtn btn-Inactive'));
    expect(wrapper.find('label').exists()).toBe(true);
    // expect(wrapper.find('label').at(0).simulate('click'));
    // expect(wrapper.find('label').at(1).simulate('click'));
    // expect(wrapper.find('label').at(2).simulate('click'));
    expect(wrapper.find('label').at(3).simulate('click'));
    expect(wrapper.find('h3').at(1).text()).toEqual('YOUR OUTFIT');
    // expect(relatedPdts).toBe(true);
    expect(wrapper.props().productId).toEqual(22122);
  });

  it ('shows my default text', async() => {
    expect(getOutfits).not.toHaveBeenCalled();
    expect(wrapper.find('label').at(3).simulate('click'));
    expect(getOutfits).toBeCalledTimes(0);
  });

})

it("renders relatedProducts without crashing", async() => {
  const div = document.createElement("div");
  ReactDOM.render(<RelatedPdt />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it("App loads with initial state of 0", async() => {
  const wrapper = shallow(<RelatedPdt />);
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find(".related-product-header").exists()).toBe(true);
  const text = wrapper.find(".related-product-header").at(0).text();
  expect(text).toEqual("RELATED PRODUCTS");
});






describe("RelatedPdt", () => {
  let props;
  let wrapper;

  const product1 = {
    "id": 22939,
    "name": "Pablo Sweatpants"
  }
  const product2 = {
    "id": 22331,
    "name": "Elvera Socks"
  }

  const outfits = [product1, product2];
  const relatedPdts = [{
    pdt_ids: [22939, 22331],
    relatedProducts: [product1, product2]
  }];

  beforeEach(async() => {
    let useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());

    props = {
      getOutfits: jest.fn().mockResolvedValue(outfits),
      getRelatedPdts: jest.fn().mockResolvedValue(relatedPdts)
    };

    let props1 = {productId: 22122}

    wrapper = shallow(<RelatedPdt {...props} />);

    // console.log('relatedPdt,,,,,,,,,,,,,,,,,,,', wrapper.debug());
  });

  describe("on start", () => {
    it("does not load the outfits", () => {
      expect(props.getOutfits).not.toHaveBeenCalled();
    });

    it("does not load load relatedPdts", () => {
      expect(props.getRelatedPdts).not.toHaveBeenCalled();
    });

    it("renders the outfits", async() => {
      expect(wrapper.find("OutfitAddCard")).toHaveLength(1);
      expect(wrapper.find("Comparison")).toHaveLength(1);

      // const firstProduct = wrapper.find("Product").first();
      const firstProduct = wrapper.find("Product").at(0);
      expect(firstProduct).toHaveLength(0);

      // expect(firstProduct.prop("id")).toEqual(product1.id);
      // expect(firstProduct.prop("category")).toEqual(null);

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.exists('.related-product-widget')).toBe(true);

    });
  });
});

beforeEach(() => {
  render(<RelatedPdt productDataMock={productDataMock}/>);
  render(<Product />);
  render(<OutfitAddCard />);
  render(<Product />);
  render(<Comparison />);
  axios.get('/products/22122/related')
    .then(response => response)
    .catch(err => err);
});

afterEach(cleanup);

test('Should render relatedPdt', async() => {
  // expect(screen.getByTestId('relatedPdt')).toBeInTheDocument();
  const activeComponent = screen.getByTestId( 'relatedPdt' );
  // expect( activeComponent ).toHaveTextContent( 'related-product-widget' );
});

it("App loads with initial state of 0", async() => {
  const { container } = render(<RelatedPdt />);
  const showComp = getByTestId(container, "relatedPdt");
  // expect(showComp).toBe("0");
});







// describe('MyComponent', () => {
//   test('useEffect', async() => {
//     const props = {
//       getOutfits: jest.fn(),
//     };

//     const wrapper = shallow(<RelatedPdt {...props} />);
//     // THIS DOES NOT WORK, HOW CAN I FIX IT?
//     expect(props.getOutfits).not.toHaveBeenCalled();
//   });
// });



// test("it should clone array", () => {
//   const users = [{
//     userId: 0,
//     username: 'TestUser'
//   }];
//   const wrapper = shallow(
//     <RelatedPdt
//       users={users}
//     />)
//   expect(wrapper.instance().cloneArray([1,2,3])).toEqual([1,2,3]);
// })

// test("it should reverse string", () => {
//   const users = [{
//     userId: 0,
//     username: 'TestUser'
//   }];
//   const wrapper = shallow(
//     <RelatedPdt
//       users={users}
//     />)
//   expect(wrapper.instance().reverseString('hello')).toEqual('olleh');
// })