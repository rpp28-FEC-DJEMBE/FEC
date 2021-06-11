

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

        <div className="o-image-gallery">

          <ul className="o-image-gallery-thumbnails">
            <li>x</li>
            <li>x</li>
            <li>x</li>
          </ul>

          <img className="o-main-image" src={this.props.styles.results[0].photos[0].url} />


        </div>
      )
    }
  }
}

export default ImageGallery;