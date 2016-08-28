import React, { Component, PropTypes } from 'react'

export default class Ctrl extends Component {
  render() {
    const { onNextClick, onPrevClick } = this.props;

    return (
      <div className="carousel_btns">
        <button onClick={onPrevClick}>Prev</button>
        <button onClick={onNextClick}>Next</button>
      </div>
    )
  }
}

Ctrl.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired
};
