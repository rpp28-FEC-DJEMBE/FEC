import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageIndex: 0,
      topImageIndex: 0,
      mainImageUrl: '',
      isLoaded: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.setImages = this.setImages.bind(this);

    // helpful values not needed in state
    this.thumbnailsToShow = 7;
  }

  componentDidMount() {
    this.setImages(this.state.selectedImageIndex);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.selectedStyleId != this.props.selectedStyleId && this.props.stylePhotos) {
      this.setState({
        isLoaded: false
      });


      this.setImages(this.state.selectedImageIndex);
    }
  }

  setImages(selectedImageIndex) {

    // "quantize" the input - if the provided index is out of bounds, bound it
    selectedImageIndex = Math.min( Math.max(selectedImageIndex, 0), this.props.stylePhotos.length - 1);

    // determine the first visible image in the gallery
    let firstVisibleImage = this.state.topImageIndex;
    let lastVisibleImage = firstVisibleImage + this.thumbnailsToShow - 1;
    if (selectedImageIndex < firstVisibleImage) { firstVisibleImage = selectedImageIndex; }
    if (selectedImageIndex > lastVisibleImage)  { firstVisibleImage = selectedImageIndex - this.thumbnailsToShow + 1; }

    // get the main image url and set state
    let mainImage = this.props.stylePhotos[selectedImageIndex].url;
    this.setState({
      selectedImageIndex: selectedImageIndex,
      topImageIndex: firstVisibleImage,
      mainImageUrl: mainImage,
      isLoaded: true
    });
  }

  handleClick(e) {

    let classes = e.currentTarget.classList;

    // main image click
    if (classes.contains('o-images-main')) {
      this.props.toggleExpandedMode();
      return;
    }

    // thumbnail gallery clicks
    let newSelectedImageIndex = 0;

    if (classes.contains('o-images-thumbnail')) {
      newSelectedImageIndex = parseInt(e.currentTarget.id);
    }
    if (classes.contains('back-arrow')) {
      newSelectedImageIndex = Math.max(this.state.selectedImageIndex - 1, 0);
    }
    if (classes.contains('forward-arrow')) {
      newSelectedImageIndex = Math.min(this.state.selectedImageIndex + 1, this.props.stylePhotos.length - 1);
    }
    this.setImages(newSelectedImageIndex);

  }

  renderThumbnailGallery() {

    if(!this.props.stylePhotos || this.props.stylePhotos.length === 1) { return null };

    const firstVisibleImageIndex = this.state.topImageIndex;
    const lastVisibleImageIndex = firstVisibleImageIndex + this.thumbnailsToShow - 1;

    // render the thumbnail gallery
    let thumbnailList = this.props.stylePhotos.map((photo, index) => {
      let imgClass = 'pointer o-images-thumbnail ';
      if (index === this.state.selectedImageIndex) { imgClass = imgClass + 'o-images-selected' };
      imgClass = imgClass.trim();

      if (index >= firstVisibleImageIndex && index <= lastVisibleImageIndex) {
        return (
          <li key={index}>
            <img id={index} className={imgClass} src={photo.thumbnail_url} onClick={this.handleClick} />
          </li>
        )
      }
    });

    // render the forward/backward arrows
    let backArrow = null;
    let forwardArrow = null;

    if (firstVisibleImageIndex > 0) {
      backArrow = (<i className='pointer back-arrow' onClick={this.handleClick}></i>);
    }

    if (lastVisibleImageIndex < this.props.stylePhotos.length - 1) {
      forwardArrow = (<i className='pointer forward-arrow' onClick={this.handleClick}></i>);
    }

    // return elements
    return (
      <React.Fragment>
        <div className="back-arrow-container">{backArrow}</div>
        <ul>{thumbnailList}</ul>
        <div className="forward-arrow-container">{forwardArrow}</div>
      </React.Fragment>
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
          <img className="o-images-main pointer" src={this.state.mainImageUrl} onClick={this.handleClick} />
          <nav className="o-images-thumbnails">
            {this.renderThumbnailGallery()}
          </nav>
        </section>
      )
    }
  }
}

export default ImageGallery;