import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

import './app.css';

// import logo from './images/react_js_logo_64px.png';
import logo from './images/djembe.png';
// const logo = 'https://drive.google.com/uc?export=view&id=1ZJWMpyC9lHuT9YawTMJ8ymOfPlDK7ga_'
import Overview from './overview/overview.jsx';
import RelatedPdt from './relatedProducts/RelatedPdt.jsx';
import Questions from './questions/questions.jsx';
import Reviews from './reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // productId: [22122, 22349, 22168, 22164][Math.floor(Math.random() * 4)]
      // productId: 22156 // for dup features
      // productId: 22164 // for sale price, for >6 relatedid
      productId: 22122,
      productName: 'Camo Onesie'
    }
  }

  onCardClick(productCardId, productName) {
    console.log('event.target', productCardId, productName);
    this.setState({
      productId: productCardId,
      productName: productName
    });
  }

  // changeProductId() {
  //   let newProductId = [22122, 22349, 22168, 22164][Math.floor(Math.random() * 4)];
  //   this.setState({
  //     productId: newProductId
  //   });
  // }

  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <h1><img src={logo} alt='Djembe' />The Djembe Clothing Company</h1>
            {/* <div style={{float: 'right'}} className="pointer" onClick={this.changeProductId.bind(this)}>{'ProductId: ' + this.state.productId}</div> */}
          </nav>
          <p>Site-Wide Announcement Message! -- Sale / Discount Offer -- New Product Highlight</p>
        </header>
        <Overview productId={this.state.productId} />
        <RelatedPdt productId={this.state.productId} onCardClick={this.onCardClick.bind(this)}/>
        <Questions product={this.state} />
        <Reviews productId={this.state.productId} />
      </React.Fragment>
    )
  }
}

export default App;