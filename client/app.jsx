import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

import './app.css';

// import logo from './images/react_js_logo_64px.png';
import logo from './images/djembe.png';
// const logo = 'https://drive.google.com/uc?export=view&id=1ZJWMpyC9lHuT9YawTMJ8ymOfPlDK7ga_'
// import Overview from './overview/Overview.jsx';
// import RelatedPdt from './relatedProducts/RelatedPdt.jsx';
// import Questions from './questions/questions.jsx';
// import Reviews from './reviews/Reviews.jsx';
const Overview = lazy( () => import('./overview/Overview.jsx'));
const RelatedPdt = lazy( () => import('./relatedProducts/RelatedPdt.jsx'));
const Questions = lazy( () => import('./questions/questions.jsx'));
const Reviews = lazy( () => import('./reviews/Reviews.jsx'));

const renderLoader = () => <p>Loading</p>;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return <p>Loading failed! Please reload.</p>;
    }

    return this.props.children;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 22122,
      productName: 'Camo Onesie'
    }
  }

  onCardClick(productCardId, productName) {
    // console.log('event.target', productCardId, productName);
    this.setState({
      productId: productCardId,
      productName: productName
    });
  }

  render() {
    return (
      <ErrorBoundary>
        <Suspense fallback={renderLoader()}>
          <React.Fragment>
            <header>
              <nav>
                <h1><img src={logo} loading="lazy" width="120" height="43" alt='Djembe' />The Djembe Clothing Company</h1>
                {/* <div style={{float: 'right'}} className="pointer" onClick={this.changeProductId.bind(this)}>{'ProductId: ' + this.state.productId}</div> */}
              </nav>
              <p>Site-Wide Announcement Message! -- Sale / Discount Offer -- New Product Highlight</p>
            </header>
            <Overview productId={this.state.productId} />
            <RelatedPdt productId={this.state.productId} onCardClick={this.onCardClick.bind(this)}/>
            <Questions product={this.state} />
            <Reviews productId={this.state.productId} productName={this.state.productName}/>
          </React.Fragment>
        </Suspense>
      </ErrorBoundary>
    )
  }
}

export default App;