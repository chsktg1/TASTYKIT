import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  AiFillStar,
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
} from 'react-icons/ai'

import Header from '../Header'

import CartContext from '../CartContext'

import BackG from '../assets/Rectangle1399.svg'

import LoadingView from '../LoadingView'

import './index.css'

export default class SpecificRest extends Component {
  state = {isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const token = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const res = await fetch(url, options)
    if (res.ok) {
      const data = await res.json()
      data.food_items = data.food_items.map(e => ({quantity: 1, ...e}))

      this.setState({data, isLoading: false})
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isLoading, data} = this.state
          const {setCart, incQuantity, decQuantity, cartItems} = value

          const addMeToCart = item => {
            setCart(item)
          }

          const showQuantity = e => {
            console.log(cartItems)
            console.log('e', e)
            const ans = cartItems.filter(a => a.id === e.id)
            console.log('ans', ans)
            console.log(ans.quantity)
            return ans[0].quantity
          }

          const whatToShow = item => {
            const ans = cartItems.filter(e => e.id === item.id)
            if (ans.length === 0) {
              return true
            }

            return false
          }

          return isLoading ? (
            <LoadingView td="restaurant-details-loader" />
          ) : (
            <div>
              <Header />
              <div
                className="noTopPaddingSMC"
                style={{
                  backgroundImage: `url('${BackG}')`,
                  backgroundSize: 'cover',
                  padding: '40px',
                  display: 'flex',
                  color: 'white',
                }}
              >
                <div style={{paddingRight: '20px'}}>
                  <img
                    src={data.image_url}
                    alt="restaurant"
                    className="resImage"
                  />
                </div>
                <div>
                  <p>{data.name}</p>
                  <p>{data.cuisine}</p>
                  <p>{data.location}</p>
                  <div style={{display: 'flex', marginRight: '15px'}}>
                    <div>
                      <div style={{display: 'flex'}}>
                        <AiFillStar color="white" />
                        <p>{data.rating}</p>
                      </div>
                      <p>{data.reviews_count}+ Ratings</p>
                    </div>
                    <div style={{marginLeft: '30px'}}>
                      <p>{data.cost_for_two}</p>
                      <p>Cost for two</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ul
                  className="ul"
                  style={{
                    marginTop: '64px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    paddingLeft: '150px',
                  }}
                >
                  {data.food_items.map(e => (
                    <li
                      testid="foodItem"
                      className="forMobileScreen"
                      key={e.id}
                      style={{display: 'flex', width: '40vw', margin: '5px'}}
                    >
                      <div className="forMB" style={{marginRight: '30px'}}>
                        <img
                          className="imageDish"
                          style={{
                            width: '255px',
                            height: '150px',
                            borderRadius: '8px',
                          }}
                          src={e.image_url}
                          alt={e.name}
                        />
                      </div>
                      <div style={{display: 'flex', flexDirection: 'column'}}>
                        <p>{e.name}</p>
                        <p>₹ {e.cost}</p>
                        <div style={{display: 'flex'}}>
                          <AiFillStar />
                          <p>{e.rating}</p>
                        </div>
                        <div>
                          {whatToShow(e) ? (
                            <button
                              type="button"
                              className="btn btn-outline-warning"
                              onClick={() => addMeToCart(e)}
                            >
                              ADD
                            </button>
                          ) : (
                            <>
                              <button
                                testid="decrement-count"
                                type="button"
                                onClick={() => decQuantity(e.id)}
                              >
                                <AiOutlineMinusSquare />
                              </button>
                              <span testid="active-count">
                                {showQuantity(e)}
                              </span>
                              <button
                                testid="increment-count"
                                type="button"
                                onClick={() => incQuantity(e.id)}
                              >
                                <AiOutlinePlusSquare />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
