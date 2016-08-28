import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Thumbnail from '../components/Thumbnail';
import { changeThumbnail} from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePic: (i) => {
      dispatch(changeThumbnail(i))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    pics: state.imgs,
    currentIndex: state.currentIndex
  }
}

const ThumbnailContainer = connect(mapStateToProps, mapDispatchToProps)(Thumbnail);

export default ThumbnailContainer
