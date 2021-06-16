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
    this.handleClick = this.handleClick.bind(this);
    this.setImages = this.setImages.bind(this);
  }

  componentDidMount() {
    this.setImages(this.state.selectedImageIndex);
  }

  setImages(imageIndex) {
    let thumbnailImage = this.props.stylePhotos[imageIndex].thumbnail_url;
    let mainImage = this.props.stylePhotos[imageIndex].url;
    this.setState({
      thumbnailImageUrl: thumbnailImage,
      mainImageUrl: mainImage,
      isLoaded: true,
    });
  }

  handleClick(e) {
    let newIndex = parseInt(e.target.id);
    console.log('newIndex:', newIndex);
    this.setState({
      selectedImageIndex: newIndex
    });
    this.setImages(newIndex);
  }

  renderThumbnails() {

    if(this.props.stylePhotos.length === 1) { return null };

    let thumbnailList = this.props.stylePhotos.map((photo, index) => {
      let imgClass = 'pointer ';
      console.log('index:', index, 'this.state.selectedImageIndex:', this.state.selectedImageIndex, 'equal?', index === this.state.selectedImageIndex);
      if (index === this.state.selectedImageIndex) { imgClass = imgClass + 'o-images-selected ' };
      if (index < this.state.topImageIndex || index > this.state.topImageIndex + 6) { imgClass = imgClass + 'o-images-offscreen' };
      imgClass = imgClass.trim();

      return (
        <li key={index}>
          <img id={index} className={imgClass} src={photo.thumbnail_url} onClick={this.handleClick} />
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