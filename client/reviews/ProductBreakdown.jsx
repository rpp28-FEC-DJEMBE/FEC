import React from 'react';
import { charsTable } from './reviewHelpers.js';

const ProductBreakdown = ({characteristics}) => {
  let chars = Object.keys(characteristics)

  if (!chars.length) {
    return null;
  } else {
    return (
      <div className='product-breakdown'>
        {
          chars.map((char) => {
            let slider = (char === 'Comfort' || char === 'Quality') ? 'slider4' : 'slider3';
            let description = (char === 'Comfort' || char === 'Quality') ?
              <div id='char-desc'>
                <label>{charsTable[char][0]}</label> <label>{charsTable[char][4]}</label>
              </div>
              : <div id='char-desc'>
                  <label>{charsTable[char][0]}</label> <label>{charsTable[char][2]}</label> <label>{charsTable[char][4]}</label>
                </div>
            return (
              <div className='char-bar' key={characteristics[char].id}>
                <p id='char-title'>{char}</p>
                <input readOnly type="range" min="1" max="5" value={characteristics[char].value} className={slider}></input>
                {description}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ProductBreakdown;

/*
Product Breakdown (Factors)
Reviews will provide ability to give feedback on specific characteristics of the product.   The characteristics include Size, Width, Comfort, Quality, Length, and Fit.   One or more of these may be relevant for a product.  In the Reviews module, the average feedback received will be displayed for all characteristics which apply to the product.
Feedback for characteristics will be on a 5 point scale.  The range of this scale will depend on the characteristic in question.  For example, Size can range from (1) “too small” to (5) “too big”, with the middle option (3) being “perfect”.  Using the same 5 point scale for Quality, however, the scale would range from (1) “poor” to (5) “great”.
Regardless of what the range of the scale represents, the 5 point scale will display the same for all of the characteristics of the product.  Each will appear as a grey bar similar to the rating breakdown.  Above the bar, a label will state the characteristic.  Below the bar, the meaning of the lowest selection (1) and the highest selection (5) will appear.   On the bar, a single icon will appear representing the average value received via reviews submitted.  The icon should appear horizontally from the left edge of the bar such that it represents the average input for the characteristic.  For example, if the average is 5, the icon should appear all the way to the right.  An average of 3 should appear in the middle.

*/