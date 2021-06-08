import React from 'react';
import style from './RelatedPdt.css';
import OutfitAddCard from './OutfitAddCard.jsx';
import Product from './Product.jsx';
import Comparison from './Comparison.jsx';

class RelatedPdt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          userId: 1,
          username: 'Kingsley',
          widget: 'Overview',
          rating: 1
        },
        {
          userId: 2,
          username: 'Huiqing',
          widget: 'Related Products',
          rating: 2
        },
        {
          userId: 3,
          username: 'Simon',
          widget: 'Questions & Answers',
          rating: 3
        },
        {
          userId: 4,
          username: 'Andre',
          widget: 'Ratings & Reviews',
          rating: 4
        }
      ]
    }
  }

  cloneArray(array) {
    // console.log(...array)
    return [...array];
  }

  reverseString(str) {
    return str
    .toLowerCase()
    .split('')
    .reverse()
    .join('');
  }

  slideLeft() {

  }

  slideRight() {

  }

  render () {
    return (
      <div>

        <div className="relatedProductWidget">
          <h3 className="relatedProductHeader">RELATED PRODUCTS</h3>
          <div className="relatedProductBox">
            <button id="leftBtn" onClick={this.slideLeft.bind(this)}>left</button>
            {
              this.state.users.map( user =>
                (
                  <Product
                    key={user.userId}
                    userId={user.userId}
                    username={user.username}
                    rating={user.rating}
                    cardBtn={'\u2606'}
                  />
                )
              )
            }
            <button id="rightBtn" onClick={this.slideRight.bind(this)}>right</button>
          </div>
        </div>

        <div className="relatedProductWidget">
          <h3 className="relatedProductHeader">YOUR OUTFIT</h3>
          <div className="relatedProductBox">
            <button id="leftBtn" onClick={this.slideLeft.bind(this)}>left</button>
            <OutfitAddCard />
            {
              this.state.users.map( user =>
                (
                  <Product
                    key={user.userId}
                    userId={user.userId}
                    username={user.username}
                    rating={user.rating}
                    cardBtn={'\u2327'}
                  />
                )
              )
            }
            <button id="leftBtn" onClick={this.slideRight.bind(this)}>Right</button>
          </div>
        </div>

        <Comparison />

      </div>
    )
  }

}

export default RelatedPdt;


        // <div className="yourOutfitSection">
        //   <h3 className="yourOutfitHeader">YOUR OUTFIT</h3>
        //   <div className="yourOutfitBox">
        //     <OutfitAddCard />
        //     {
        //       this.state.users.map( user =>
        //         (
        //           <Outfit
        //             key={user.userId}
        //             userId={user.userId}
        //             username={user.username}
        //             widget={user.widget}
        //           />
        //         )
        //       )
        //     }
        //   </div>
        // </div>