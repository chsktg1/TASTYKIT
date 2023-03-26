/* eslint-disable */

import React, {Component} from 'react'

import CartContext from '../CartContext'

import Header from '../Header'

import {AiOutlineMinusSquare, AiOutlinePlusSquare} from 'react-icons/ai'

import imageNoOrder from '../assets/cooking1.png'
import {Link} from 'react-router-dom'

import Tick from '../assets/Vector.png'

import './index.css'

export default class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {
            cartItems,
            decQuantity,
            incQuantity,
            orderPlaced,
            setOrderPlaced,
          } = value
          console.log('cartItems', cartItems)
          const inc = id => {
            decQuantity(id)
          }

          const placeOrder = () => {
            console.log('clicked')
            setOrderPlaced()
          }

          const dec = id => {
            incQuantity(id)
          }

          const getCost = () => {
            if (cartItems.length > 0) {
              let totalCost = cartItems[0]['quantity'] * cartItems[0]['cost']
              for (let i = 1; i < cartItems.length; i++) {
                totalCost =
                  totalCost + cartItems[i]['quantity'] * cartItems[i]['cost']
              }
              return <p>₹ {totalCost}</p>
            }
            return null
          }

          return (
            <>
              <Header cart />
              <ul>
                {orderPlaced ? (
                  <>
                    <img src={Tick} />
                    <h1>Payment Successful</h1>
                    <p>
                      Thank you for ordering Your payment is successfully
                      completed.
                    </p>
                    <Link to="/">
                      <button className="btn btn-primary">
                        Go To Home Page
                      </button>
                    </Link>
                  </>
                ) : cartItems === [] ||
                  cartItems === null ||
                  cartItems === undefined ||
                  cartItems.length === 0 ? (
                  <div className="noOrdersDiv">
                    <div>
                      <img src={imageNoOrder} alt="empty cart" />
                    </div>
                    <h1>No Order Yet!</h1>
                    <p>Your cart is empty. Add something from the menu.</p>
                    <Link to="/">
                      <button className="btn btn-secondary alp" type="button">
                        Order now
                      </button>
                    </Link>
                  </div>
                ) : (
                  <>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: '30px',
                      }}
                    >
                      <p>Item</p> <p>Quantity</p> <p>Price</p>
                    </div>
                    {cartItems.map(e => (
                      <>
                        <table>
                          <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                          </tr>
                          <tr>
                            <th>
                              <h1 className="dishName">{e.name}</h1>
                              <img
                                className="dishImage"
                                src={e.imageUrl}
                                alt={e.name}
                              />
                            </th>
                          </tr>
                        </table>

                        <li
                          key={e.id}
                          testid="cartItem"
                          style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            marginTop: '30px',
                          }}
                        >
                          <div className="oneExtraDiv">
                            <div className="imageNameContainer">
                              <h1 className="dishName">{e.name}</h1>
                              <img
                                className="dishImage"
                                src={e.imageUrl}
                                alt={e.name}
                              />
                            </div>

                            <div className="OLS">
                              <div>
                                <button
                                  className="newButton"
                                  testid="decrement-quantity"
                                  onClick={() => inc(e.id)}
                                >
                                  <AiOutlineMinusSquare />
                                </button>
                              </div>
                              <p testid="item-quantity" className="quant">
                                {e.quantity}
                              </p>
                              <div>
                                <button
                                  className="newButton"
                                  testid="increment-quantity"
                                  onClick={() => dec(e.id)}
                                >
                                  <AiOutlinePlusSquare />
                                </button>
                              </div>
                            </div>

                            <div className="OLS" testid="total-price">
                              {e.cost * e.quantity}
                            </div>

                            <div className="Setquant alp">
                              <div>
                                <button
                                  className="newButton"
                                  testid="decrement-quantity"
                                >
                                  <AiOutlineMinusSquare
                                    onClick={() => inc(e.id)}
                                  />
                                </button>
                              </div>
                              <h1 className="quant">{e.quantity}</h1>
                              <div>
                                <button
                                  className="newButton"
                                  testid="increment-quantity"
                                >
                                  <AiOutlinePlusSquare
                                    onClick={() => dec(e.id)}
                                  />
                                </button>
                              </div>

                              <div testid="total-price">
                                {e.cost * e.quantity}
                              </div>
                            </div>
                          </div>
                        </li>
                      </>
                    ))}
                    <div className="order-total">
                      <p>Order Total :</p>
                      {getCost()}
                    </div>
                    <button
                      type="button"
                      className="btn btn-info"
                      style={{marginLeft: '80vw'}}
                      onClick={placeOrder}
                    >
                      Place Order
                    </button>
                  </>
                )}
              </ul>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
