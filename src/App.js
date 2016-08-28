import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imgs: [
        'https://unsplash.it/458/354?random&time=1472179609076',
        'https://unsplash.it/458/354?random&time=1472179634185',
        'https://unsplash.it/458/354?random&time=1472179639144',
        'https://unsplash.it/458/354?random&time=1472179649184',
        'https://unsplash.it/458/354?random&time=1472179659091'
      ],
      currentIndex: 0
    }

    this.navPrev = this.navPrev.bind(this);
    this.navNext = this.navNext.bind(this);

  }

  navNext() {
    let state = this.state;
    let current = state.currentIndex;
    let imgLength = state.imgs.length;
    this.setState({
      currentIndex: current < imgLength - 1 ? current + 1 : 0
    })
  }

  navPrev() {
    let state = this.state;
    let current = state.currentIndex;
    let imgLength = state.imgs.length;
    this.setState({
      currentIndex: current <= 0 ? imgLength - 1: current - 1
    })
  }

  render() {
    return (
      <div className="carousel">
        <div className="carousel_img">
          <img src={this.state.imgs[this.state.currentIndex]} />
        </div>
        <div className="carousel_btns">
          <button onClick={this.navPrev}>Prev</button>
          <button onClick={this.navNext}>Next</button>
        </div>
      </div>
    )
  }
}
