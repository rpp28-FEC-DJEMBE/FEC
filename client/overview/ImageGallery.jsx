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
    // // let selectedStyleId = this.props.styleId;
    // // let selectedStyle = this.props.styles.find( ({style_id}) => style_id => style_id === selectedStyleId );
    // let stylePhotos = selectedStyle.photos;
    let thumbnailImage = this.props.stylePhotos[this.state.selectedImageIndex].thumbnail_url;
    let mainImage = this.props.stylePhotos[this.state.selectedImageIndex].url;

    this.setState({
      thumbnailImageUrl: thumbnailImage,
      mainImageUrl: mainImage,
      isLoaded: true,
    });
  }

  renderThumbnails() {
    const thumbnailList = this.props.stylePhotos.map((photo, index) =>
      <li key={index}>
        <img className={index === this.state.selectedImageIndex ? "o-thumbnail-selected" : null} src={photo.thumbnail_url} />
      </li>
    );

    return (
      <ul>
        {thumbnailList}
      </ul>
    );
  }

  render() {

    if (!this.state.isLoaded) {
      return (
        <section className="o-image-gallery">
          <p>Loading...</p>
        </section>
      )
    } else {
      return (
        <section className="o-image-gallery">
          <img className="o-main-image" src={this.state.mainImageUrl} />
          <nav className="o-image-gallery-thumbnails">
            {this.renderThumbnails()}
          </nav>
        </section>
      )
    }
  }
}

export default ImageGallery;