import React from 'react';
import ReactDOM from 'react-dom';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // not yet
    }
  }

  render() {
    return(
      <div className="image-gallery">

        {/* <img > */}
        <p>Main image here</p>

        <ul>
          <li>Thumbnail 1</li>
          <li>Thumbnail 1</li>
        </ul>

      </div>
    )
  }
}

export default ImageGallery;