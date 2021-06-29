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

    // helpful values (not needed in state)
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

  // calculates which thumbnails to show (when there are more than the max allowed) and sets state
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

  // a single click handler for everything on the page; uses classes to determine what was clicked
  handleClick(e) {

    let classes = e.currentTarget.classList;

    // main image click
    if (classes.contains('o-images-main')) {

      let newMode;
      if (this.props.imageMode === 0) {
        newMode = 1; //normal --> expanded
      }
      // delete after zoom view is coded
      if (this.props.imageMode === 1) {
        newMode = 0; //expanded --> normal
      }

      // comment out until zoom view is coded
      // if (this.props.imageMode === 1) {
      //   newMode = 2; //expanded --> zoomed
      // }
      // if (this.props.imageMode === 2) {
      //   newMode = 1; //zoomed --> expanded
      // }
      this.props.setImageMode(newMode);
      return;
    }

    // thumbnail gallery clicks
    let newSelectedImageIndex = 0;

    if ( classes.contains('o-images-thumbnail') || classes.contains('o-images-thumbnail-icon') ) {
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

  // renders the two versions of the thumbnail gallery (want to make this a subcomonent)
  renderThumbnailGallery() {

    if(!this.props.stylePhotos || this.props.stylePhotos.length === 1) { return null };

    const firstVisibleImageIndex = this.state.topImageIndex;
    const lastVisibleImageIndex = firstVisibleImageIndex + this.thumbnailsToShow - 1;

    let thumbnailList;
    let imgClass;
    let isSelected;

    // render the thumbnail gallery

    // render the normal view - images
    if (this.props.imageMode === 0) {
      thumbnailList = this.props.stylePhotos.map((photo, index) => {

        isSelected = index === this.state.selectedImageIndex;
        imgClass = 'pointer o-images-thumbnail';
        if (isSelected) { imgClass = imgClass + ' ' + 'o-images-selected' };
        imgClass = imgClass.trim();

        if (index >= firstVisibleImageIndex && index <= lastVisibleImageIndex) {
          if (this.props.imageMode === 0) {
            return (
              <li key={index}>
                <img id={index} className={imgClass} src={photo.thumbnail_url} onClick={this.handleClick} />
              </li>
            )
          }
        }
      });
    }

    // render the expanded view (icons)
    if (this.props.imageMode === 1) {
      thumbnailList = this.props.stylePhotos.map((photo, index) => {
        isSelected = index === this.state.selectedImageIndex;
        return (
          <li key={index}>
            <svg viewBox="0 0 100 100" width="100%" height="100%">
              <circle cx="50" cy="50" r="35" className="o-images-thumbnail-icon pointer" id={index} onClick={this.handleClick} />
              { isSelected
                  ? <circle cx="50" cy="50" r="25" className="o-images-thumbnail-icon selected pointer" id={index} onClick={this.handleClick} />
                  : null
              }
            </svg>
          </li>
        )
      });

    }

    // render the forward/backward arrows
    let backArrow = null;
    let forwardArrow = null;

    if (this.props.imageMode === 0) {
      if (firstVisibleImageIndex > 0) {
        backArrow = (<i className='pointer back-arrow' onClick={this.handleClick}></i>);
      }

      if (lastVisibleImageIndex < this.props.stylePhotos.length - 1) {
        forwardArrow = (<i className='pointer forward-arrow' onClick={this.handleClick}></i>);
      }
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
        <section className={this.props.imageMode === 0 ? "o-images" : "o-images o-expanded"}>
          <img className={
              this.props.imageMode === 0
                ? "o-images-main pointer"
                : this.props.imageMode === 1
                  ? "o-images-main o-expanded pointer"
                  : "o-images-main o-zoomed pointer"
            }
            src={this.state.mainImageUrl}
            onClick={this.handleClick}
          />
          <nav className="o-images-thumbnails">
            {this.renderThumbnailGallery()}
          </nav>
        </section>
      )
    }
  }
}

export default ImageGallery;