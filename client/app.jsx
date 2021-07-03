import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

import './app.css';
import logo from './images/djembe.png';
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
      productName: 'Camo Onesie',
      darkmode: false
    }
    this.onCardClick = this.onCardClick.bind(this);
    this.apiInteractions = this.apiInteractions.bind(this);
  }

  onCardClick(productCardId, productName) {
    // console.log('event.target', productCardId, productName);
    this.setState({
      productId: productCardId,
      productName: productName
    });
  }

  apiInteractions(element, widget) {
    let data = {
      "element": element,
      "widget": widget,
      "time": new Date()
    }
    console.log(element, widget, data.time);

    axios({
      method: 'post',
      url: '/interactions',
      data: data
    })
    .then(res => console.log(res))
    .catch(err => { throw new Error(err.message); });
  }

  themeToggle(){
    const app = document.body;
    app.classList.toggle("darkmode");
    if(!this.state.darkmode) {
      this.setState({
        darkmode: true
      })
    } else {
      this.setState({
        darkmode: false
      })
    }
  }

  render() {
    return (
      <ErrorBoundary>
        <Suspense fallback={renderLoader()}>
          <React.Fragment>
            <header>
              <nav>
                <h1>
                  <img src={logo} loading="lazy" width="120" height="43" alt='Djembe' />
                  The Djembe Clothing Company
                  <label className="toggle">
                    <input onClick={()=> this.themeToggle()} type="checkbox" ></input>
                    <span className="slider"></span>
                  </label>
                </h1>
              </nav>
              <p>Site-Wide Announcement Message! -- Sale / Discount Offer -- New Product Highlight</p>
            </header>
            <Overview productId={this.state.productId}  apiInteractions={this.apiInteractions} />
            <RelatedPdt productId={this.state.productId} darkmode={this.state.darkmode} onCardClick={this.onCardClick} apiInteractions={this.apiInteractions} />
            <Questions product={this.state} apiInteractions={this.apiInteractions} />
            <Reviews productId={this.state.productId} productName={this.state.productName} apiInteractions={this.apiInteractions} />
          </React.Fragment>
        </Suspense>
      </ErrorBoundary>
    )
  }
}

export default App;