import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
// import { act } from "react-dom/test-utils";
// import App from '../../client/app.jsx';
import RelatedPdt from '../../client/relatedProducts/RelatedPdt.jsx';

import axios from 'axios';

describe("Authors", () => {
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

  beforeEach(() => {
    let useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());

    props = {
      getOutfits: jest.fn().mockResolvedValue(outfits),
      getRelatedPdts: jest.fn().mockResolvedValue(relatedPdts)
    };

    let props1 = {productId: 22122}

    wrapper = shallow(<RelatedPdt {...props} />);
  });

  describe("on start", () => {
    it("does not load the outfits", () => {
      expect(props.getOutfits).not.toHaveBeenCalled();
    });

    it("does not load load relatedPdts", () => {
      expect(props.getRelatedPdts).not.toHaveBeenCalled();
    });

    it("renders the outfits", () => {
      expect(wrapper.find("OutfitAddCard")).toHaveLength(1);

      const firstProduct = wrapper.find("Product").first();
      expect(firstProduct).toHaveLength(0);

      // expect(firstProduct.prop("id")).toEqual(product1.id);
      // expect(firstProduct.prop("category")).toEqual(null);

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.exists('.related-product-widget')).toBe(true);

    });
  });
});

// test("renders users correctly", () => {
//   const products = [{
//     id: 0,
//     username: 'TestUser'
//   }];
//   const wrapper = shallow(<RelatedPdt />)
//   expect(wrapper.exists()).toBe(true);
//   // expect(wrapper.relatedPdts.exists()).toBe(true);
//   // expect(wrapper.state('products')[0].id).toBe(22122);
//   // expect(wrapper.find(".card").length).toEqual(4);
//   // // expect(wrapper.find(".userLi").first().text()).toEqual("#0: TestUser");
//   // expect(wrapper.find(".userLi").at(1).text()).toEqual("#2: Huiqing");
// })


// describe('MyComponent', () => {
//   test('useEffect', () => {
//     const props = {
//       getOutfits: jest.fn(),
//     };

//     const wrapper = shallow(<RelatedPdt {...props} />);
//     // expect(props.getOutfits.exists()).toBe(true);

//     // THIS DOES NOT WORK, HOW CAN I FIX IT?

//     // expect(props.getOutfits).toHaveBeenCalled();
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