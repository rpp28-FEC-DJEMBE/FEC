import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';
import Overview from './overview/overview.jsx';
import RelatedPdt from './relatedProducts/RelatedPdt.jsx';
import Questions from './questions/questions.jsx';
import Reviews from './reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: [22122, 22128, 22129, 22161][Math.floor(Math.random() * 4)]
      // id: 22122
    }
  }

  render() {
    return (
      <div>
        <p>Welcome to our app!</p>
        <Overview productId={this.state.productId}/>
        <RelatedPdt productId={this.state.productId}/>
        <Questions productId={this.state.productId}/>
        <Reviews productId={this.state.productId}/>
      </div>
    )
  }
}

export default App;
// ReactDOM.render(<App />, document.getElementById('app'));