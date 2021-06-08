import React from 'react';

class SortOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'relevance'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render () {
    // change the sort text ('248 reviews') dynamically
    return (
      <div className='sort-options'>
        <label>248 reviews, sorted by </label>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value='relevance'>relevance</option>
          <option value='helpful'>helpful</option>
          <option value='newest'>newest</option>
        </select>
      </div>
    )
  }
}

export default SortOptions;