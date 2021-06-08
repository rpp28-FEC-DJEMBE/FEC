import React from 'react';
import style from './Comparison.css';

const check="\u2713";
const Comparison = (props) => (
  <div className="comparisonBox">
    <p>COMPARING</p>
    <div className="comparisonName">
      <p>Current Name</p>
      <p>Compared Name</p>
    </div>
    <div className="comparisonTable">
      <div>
        <p>{check}</p>
        <p>{check}</p>
        <p>{check}</p>
      </div>
      <div>
        <p>Compared Item 1</p>
        <p>Compared Item 2</p>
        <p>Compared Item 3</p>
        <p>Compared Item 4</p>
      </div>
      <div>
      <p>{check}</p>
        <p>{check}</p>
      </div>
    </div>
  </div>
)

export default Comparison;

