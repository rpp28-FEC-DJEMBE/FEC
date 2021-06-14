import React from 'react';

const ProductBreakdown = ({characteristics}) => {
  let chars = Object.keys(characteristics)

  return (
    <div className='product-breakdown'>
      <p>Product Breakdown</p>
      {chars.map((char) => (
        <div className='char-bar' key={characteristics[char].id}>
          {char} {characteristics[char].value}
        </div>
      ))}
    </div>
  )
}

export default ProductBreakdown;

/*
Product Breakdown (Factors)
Reviews will provide ability to give feedback on specific characteristics of the product.   The characteristics include Size, Width, Comfort, Quality, Length, and Fit.   One or more of these may be relevant for a product.  In the Reviews module, the average feedback received will be displayed for all characteristics which apply to the product.
Feedback for characteristics will be on a 5 point scale.  The range of this scale will depend on the characteristic in question.  For example, Size can range from (1) “too small” to (5) “too big”, with the middle option (3) being “perfect”.  Using the same 5 point scale for Quality, however, the scale would range from (1) “poor” to (5) “great”.
Regardless of what the range of the scale represents, the 5 point scale will display the same for all of the characteristics of the product.  Each will appear as a grey bar similar to the rating breakdown.  Above the bar, a label will state the characteristic.  Below the bar, the meaning of the lowest selection (1) and the highest selection (5) will appear.   On the bar, a single icon will appear representing the average value received via reviews submitted.  The icon should appear horizontally from the left edge of the bar such that it represents the average input for the characteristic.  For example, if the average is 5, the icon should appear all the way to the right.  An average of 3 should appear in the middle.

*/