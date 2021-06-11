

import React from 'react';
// import ReactDOM from 'react-dom';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    if (this.props.styles === null) {
      return null;
    } else {
      return(

        <div className="image-gallery">
          <img src={this.props.styles.results[0].photos[0].url} />
          <p>Main image here</p>

          <ul>
            <li>Thumbnail 1</li>
            <li>Thumbnail 1</li>
          </ul>

        </div>
      )
    }
  }
}

export default ImageGallery;