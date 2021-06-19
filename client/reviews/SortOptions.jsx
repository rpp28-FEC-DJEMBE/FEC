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
    this.props.handleSort(e)
    this.setState({ value: e.target.value });
  }

  render () {
    let reviewNumber = this.props.reviews.length;
    return (
      <div className='sort-options'>
        <label>{reviewNumber} reviews, sorted by </label>
        <select value={this.state.value} onChange={this.handleChange} >
          <option value='relevant'>relevance</option>
          <option value='helpful'>helpful</option>
          <option value='newest'>newest</option>
        </select>
      </div>
    )
  }
}

export default SortOptions;