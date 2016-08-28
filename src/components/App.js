import React, { Component } from 'react';
import SlideContainer from '../containers/SlideContainer';
import CtrlContainer from '../containers/CtrlContainer';
import ThumbnailContainer from '../containers/ThumbnailContainer';

export default class App extends Component {
  render() {
    return (
      <div className="carousel">
        <SlideContainer />
        <ThumbnailContainer />
        <CtrlContainer />
      </div>
    )
  }
}
