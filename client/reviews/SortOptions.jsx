import React from 'react';

const SortOptions = (props) => {
  let reviewNumber = props.reviews.length;

  return (
    <div className='sort-options'>
      <label>{reviewNumber} reviews, sorted by </label>
      <select value={props.sorting} onChange={(e) => props.handleSort(e)} >
        <option value='relevant'>relevance</option>
        <option value='helpful'>helpful</option>
        <option value='newest'>newest</option>
      </select>
    </div>
  )

}

export default SortOptions;