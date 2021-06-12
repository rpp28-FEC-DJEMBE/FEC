import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageIndex: 0,
      thumbnailImageUrl: '',
      mainImageUrl: '',
      isLoaded: false
    }
  }

  componentDidMount() {
    let selectedStyleId = this.props.styleId;
    let selectedStyle = this.props.styles.find( ({style_id}) => style_id => style_id === selectedStyleId );
    let stylePhotos = selectedStyle.photos;
    let thumbnailImageUrl = stylePhotos[this.state.selectedImageIndex].thumbnail_url;
    let mainImageUrl = stylePhotos[this.state.selectedImageIndex].url;

    this.setState({
      thumbnailImageUrl: thumbnailImageUrl,
      mainImageUrl: mainImageUrl,
      isLoaded: true
    });
  }

  renderThumbnails() {
    // iterate through the urls
    // map the build the ul/li fragment
    // return the ul/li fragment
  }

  render() {

    if (!this.state.isLoaded) {
      return (
        <section className="o-image-gallery">
          <p>Loading...</p>
        </section>
      );
    } else {
      return (
        <section className="o-image-gallery">
          <img className="o-main-image" src={this.state.mainImageUrl} />
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