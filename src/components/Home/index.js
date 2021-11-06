import React, {Component} from 'react'

import Header from '../Header'

import Carousel from '../Carousel'

import Data from '../Data'

import Footer from '../Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header homeOrCart />
        <Carousel />
        <Data />
        <Footer />
      </div>
    )
  }
}
