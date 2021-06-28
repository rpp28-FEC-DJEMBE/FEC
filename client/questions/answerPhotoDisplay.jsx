import { render } from 'enzyme';
import React from 'react';

class AnswerPhotoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.photos
    };
  };

  render() {
    if (this.state.photos === undefined) {
      return null;
    } else {
      return (
        <div className="img-display">
          {this.state.photos.map((photo, i) =>
            <img src={photo.url} key={i} />
          )}
        </div>
      )
    }
  };
};




export default AnswerPhotoDisplay;