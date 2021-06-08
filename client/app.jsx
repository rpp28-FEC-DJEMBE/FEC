import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';
import Overview from './overview/overview.jsx';
import RelatedPdt from './relatedProducts/RelatedPdt.jsx';
import Reviews from './reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          userId: 1,
          username: 'Kingsley'
        },
        {
          userId: 2,
          username: 'Huiqing'
        },
        {
          userId: 3,
          username: 'Simon'
        },
        {
          userId: 4,
          username: 'Andre'
        }
      ],
      test: true
    }
  }

  render() {
    return (
      <div>
        <p>Welcome to our app!</p>
        <Overview />
        <RelatedPdt users={this.state.users}/>
        <Reviews />
      </div>
    )
  }
}

export default App;
// ReactDOM.render(<App />, document.getElementById('app'));