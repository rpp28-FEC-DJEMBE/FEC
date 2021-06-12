import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
  }

renderThumbnails() {
  // get the style data
  // iterate through it, urls
  // build the ul/li fragment


}

  render() {

    if (this.props.styles === null) {
      return null;
    } else {
      return(
        <section className="o-image-gallery">
          <img className="o-main-image" src={this.props.styles.results[0].photos[0].url} />
          <nav className="o-image-gallery-thumbnails">
            <ul>
              <li>x</li>
              <li>x</li>
              <li>x</li>
            </ul>
          </nav>
        </section>
      )
    }
  }
}

export default ImageGallery;