import React from 'react';
import ReactDOM from 'react-dom';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    console.log('props:', props);
  }

  render() {
    return(
      <div className="image-gallery">

        {/* <img src={this.props.styles.results[0].photos.url} /> */}
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