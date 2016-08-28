import React, { Component, PropTypes } from 'react'

export default class Thumbnail extends Component {
  render() {
    const { pics, onChangePic, currentIndex } = this.props;

    const nodes = pics.map((t,i) => {
        let active = currentIndex === i ? 'active' : '';
        let cssClasses = `carousel_thumbnail ${active}`;
        return <div className={cssClasses} key={i} ><img src={t} onClick={() => onChangePic(i)} /></div>
      }
    );

    return (
      <div className="carousel_thumbnails">
        {nodes}
      </div>
    )
  }
}

Thumbnail.propTypes = {
  pics: PropTypes.array.isRequired,
  onChangePic: PropTypes.func.isRequired
};
