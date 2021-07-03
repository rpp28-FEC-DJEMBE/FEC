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
    this.setImages = this.setImages.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.mainImage = React.createRef();

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

    // if(this.props.imageMode === 2) {
    //   this.mainImage.
    // }
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
      if (this.props.imageMode === 1) {
        newMode = 2; //expanded --> zoomed
      }
      if (this.props.imageMode === 2) {
        newMode = 1; //zoomed --> expanded
      }
      this.props.setImageMode(newMode);
      return;
    }

    // thumbnail gallery clicks
    let newSelectedImageIndex = 0;

    if ( classes.contains('o-images-thumbnail') || classes.contains('o-images-thumbnail-icon') ) {
      newSelectedImageIndex = parseInt(e.currentTarget.id);
    }
    if (classes.contains('back-arrow') || classes.contains('main-image-prev')) {
      newSelectedImageIndex = Math.max(this.state.selectedImageIndex - 1, 0);
    }
    if (classes.contains('forward-arrow') || classes.contains('main-image-next')) {
      newSelectedImageIndex = Math.min(this.state.selectedImageIndex + 1, this.props.stylePhotos.length - 1);
    }
    this.setImages(newSelectedImageIndex);

  }

  handleMouseMove(e) {

    let zoomWindow = e.currentTarget;
    let width = zoomWindow.offsetWidth;
    let height = zoomWindow.offsetHeight;

    let offsetX = e.clientX - this.mainImage.current.getBoundingClientRect().left;
    let offsetY = e.clientY - this.mainImage.current.getBoundingClientRect().top;

    let posX = Math.min(Math.max(0, offsetX), width);
    let posY = Math.min(Math.max(0, offsetY), height);

    let percentX = posX / width * 100;
    let percentY = posY / height * 100;

    zoomWindow.style.setProperty('--x', percentX + '%');
    zoomWindow.style.setProperty('--y', percentY + '%');
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

    // render the forward/backward arrows for the thumbnails
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

    // render the forward/backward arrows for the main image
    let mainImagePrev = null;
    let mainImageNext = null;

    if (this.props.imageMode === 0) {
      if (firstVisibleImageIndex > 0) {
        mainImagePrev = <span className='material-icons pointer main-image-prev' onClick={this.handleClick}>arrow_back_ios</span>;
      }

      if (lastVisibleImageIndex < this.props.stylePhotos.length - 1) {
        mainImageNext = (<span className='material-icons pointer main-image-next' onClick={this.handleClick}>arrow_forward_ios</span>);
      }
    }

    // return elements
    return (
      <React.Fragment>
        <nav className="o-images-thumbnails">
          <div className="back-arrow-container">{backArrow}</div>
          <ul>{thumbnailList}</ul>
          <div className="forward-arrow-container">{forwardArrow}</div>
        </nav>
        <nav className="o-main-image-arrows">
          {mainImagePrev}
          {mainImageNext}
        </nav>
      </React.Fragment>
    );
  }

  renderMainImage() {

    let className, mainImage;
    let cssVariables = {};

    if (this.props.imageMode === 0) {
      className = "o-images-main pointer";
      mainImage = <img className={className} src={this.state.mainImageUrl} onClick={this.handleClick} ref={this.mainImage}/>
    }
    if (this.props.imageMode === 1) {
      className = "o-images-main o-expanded pointer";
      mainImage = <img className={className} src={this.state.mainImageUrl} onClick={this.handleClick} ref={this.mainImage}/>
    }
    if (this.props.imageMode === 2) {
      className = "o-images-main o-zoomed pointer";
      cssVariables['--bgImgUrl'] = 'url(' + this.state.mainImageUrl + ')';
      cssVariables['--x'] = '50%';
      cssVariables['--y'] = '50%';
      mainImage = <div className={className} onClick={this.handleClick} onMouseMove={this.handleMouseMove} style={cssVariables} ref={this.mainImage}/>
    }

    return (
      <React.Fragment>
        {mainImage}
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
        <section className={this.props.imageMode === 0
            ? "o-images"
            : this.props.imageMode === 1
              ? "o-images o-expanded"
              : "o-images o-zoomed"
          }>
          {this.renderMainImage()}
          {this.renderThumbnailGallery()}
        </section>
      )
    }
  }
}

export default ImageGallery;