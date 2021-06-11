import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';

import logo from './images/react_js_logo_64px.png';
import Overview from './overview/overview.jsx';
import RelatedPdt from './relatedProducts/RelatedPdt.jsx';
import Questions from './questions/questions.jsx';
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
      <React.Fragment>
        <header>
          <h1><img src={logo} alt='The Dejmbe Clothing Company' /></h1>
        </header>
        <Overview />
        <RelatedPdt users={this.state.users}/>
        <Questions />
        <Reviews />
      </React.Fragment>
    )
  }
}

export default App;