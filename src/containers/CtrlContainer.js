import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Ctrl from '../components/Ctrl';
import { moveNext, movePrev } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onPrevClick: () => {
      dispatch(movePrev())
    },
    onNextClick: () => {
      dispatch(moveNext())
    }
  }
}

const CtrlContainer = connect(null, mapDispatchToProps)(Ctrl);

export default CtrlContainer
