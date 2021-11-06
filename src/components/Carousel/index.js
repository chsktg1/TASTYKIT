import Cookies from 'js-cookie'
import {Component} from 'react'

import Slider from 'react-slick'

import './index.css'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

import LoadingView from '../LoadingView'

export default class Carousel extends Component {
  state = {isLoading: true, car: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/restaurants-list/offers'
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const res = await fetch(url, options)
    if (res.ok) {
      const data = await res.json()

      this.setState({car: data.offers, error: false, isLoading: false})
    } else {
      this.setState({error: true, isLoading: false})
    }
  }

  render() {
    const settings = {
      dots: true,
    }
    const {car, isLoading} = this.state
    return isLoading ? (
      <LoadingView td="restaurants-offers-loader" />
    ) : (
      <div className="slider-container">
        <Slider {...settings}>
          {car.map(e => (
            <div key={e.id}>
              <img
                src={e.image_url}
                alt="offer"
                className="slider-image-width"
              />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
