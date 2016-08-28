import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Slide from '../components/Slide';

const mapStateToProps = (state) => {
  return {
    source: state.imgs[state.currentIndex]
  }
}

const SlideContainer = connect(mapStateToProps)(Slide);

export default SlideContainer
