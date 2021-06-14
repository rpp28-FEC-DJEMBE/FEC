import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageIndex: 0,
      topImageIndex: 0,
      thumbnailImageUrl: '',
      mainImageUrl: '',
      isLoaded: false
    }
  }

  componentDidMount() {
    let thumbnailImage = this.props.stylePhotos[this.state.selectedImageIndex].thumbnail_url;
    let mainImage = this.props.stylePhotos[this.state.selectedImageIndex].url;

    this.setState({
      thumbnailImageUrl: thumbnailImage,
      mainImageUrl: mainImage,
      isLoaded: true,
    });
  }

  renderThumbnails() {

    const thumbnailList = this.props.stylePhotos.map((photo, index) => {

      let imgClass = '';
      if (index === this.state.selectedImageIndex) { imgClass = 'o-images-selected' };
      if (index < this.state.topImageIndex || index > this.state.topImageIndex + 6) { imgClass = imgClass + ' ' + 'o-images-offscreen' };
      imgClass = imgClass.trim();

      return (
        <li key={index}>
          <img className={imgClass} src={photo.thumbnail_url} />
        </li>
      )
    });

    return (
      <ul>
        {thumbnailList}
      </ul>
    );
  }

  render() {

    if (!this.state.isLoaded) {
      return (
        <section className="o-images-gallery">
          <p>Loading...</p>
        </section>
      )
    } else {
      return (
        <section className="o-images">
          <img className="o-images-main" src={this.state.mainImageUrl} />
          <nav className="o-images-thumbnails">
            {this.renderThumbnails()}
          </nav>
        </section>
      )
    }
  }
}

export default ImageGallery;