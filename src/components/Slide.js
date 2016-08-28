import React, { Component, PropTypes } from 'react'

export default class Slide extends Component {
  render() {
    const { source } = this.props;

    return (
      <div className="carousel_img">
        <img src={source} />
      </div>
    )
  }
}

Slide.propTypes = {
  source: PropTypes.string.isRequired
};
