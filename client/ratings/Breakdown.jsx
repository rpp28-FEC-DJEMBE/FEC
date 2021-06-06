import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

class Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='breakdown'>
        <RatingBreakdown />
        <ProductBreakdown />
      </div>
    )
  }
}

export default Breakdown;